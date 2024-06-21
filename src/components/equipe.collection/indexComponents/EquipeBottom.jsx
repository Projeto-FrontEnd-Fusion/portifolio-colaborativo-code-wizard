import {useState} from "react";
import projectDefault from "../imageProject/projectDefault.png";

export default function EquipeBottom(User) {
    const [showProject, setShowProject] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const {user} = User

    function toggleProjects() {
        setShowProject(!showProject)
        if (showSkills) toggleSkills()
    }

    function toggleSkills() {
        setShowSkills(!showSkills)
        if (showProject) toggleProjects()
    }

    return (
        <div className={`space-y-4 w-full h-fit mt-4 larger-screen:mt-16 larger-screen:space-y-0`}>
            <menu
                className={`flex flex-wrap justify-center w-full h-fit gap-2 larger-screen:justify-start larger-screen:gap-8 larger-screen:mb-8`}>
                <button onClick={toggleProjects}
                        className={`w-40 p-2 rounded bg-primary-button text-light-color font-inconsolata cursor-pointer duration-150 hover:bg-dark-color-second dark:hover:bg-primary-button larger-screen:hover:bg-primary-button larger-screen:w-48 larger-screen:bg-[#111111] dark:bg-dark-color-second`}>
                    Projetos Recentes
                </button>
                <button onClick={toggleSkills}
                        className={`w-40 p-2 rounded bg-primary-button text-light-color font-inconsolata cursor-pointer duration-150 hover:bg-dark-color-second dark:hover:bg-primary-button larger-screen:hover:bg-primary-button larger-screen:w-48 larger-screen:bg-[#111111] dark:bg-dark-color-second`}>
                    Habilidades
                </button>
            </menu>
            <div className={`grid w-full gap-4 overflow-hidden duration-200 ${showProject ? "open" : "close"}`}>
                <div
                    className={`flex items-center justify-center w-full h-fit gap-4 overflow-hidden larger-screen:flex-row larger-screen:justify-start flex-wrap larger-screen:gap-8`}>
                    {user.projects.length === 0 ? (
                        <div
                            className="flex items-center justify-center flex-col gap-2 w-full h-fit larger-screen:items-start">
                            <p className={`font-inconsolata font-bold text-center dark:text-light-color text-3xl`}>
                                Nenhum projeto adicionado.
                            </p>
                        </div>
                    ) : (
                        user.projects.map((project, id) => (
                            <picture key={id}
                                     className={`group overflow-hidden flex items-center justify-center w-52 h-36 dark:bg-dark-color-second rounded-lg cursor-pointer larger-screen:w-[300px] larger-screen:h-[210px]`}>
                                <a href={project.link} target="_blank"
                                   className={`relative size-full flex items-center justify-center`}>
                                    <img src={projectDefault} alt={project.name}
                                         className={`size-full object-cover duration-150 group-hover:sepia-0 sepia`}/>
                                    <div
                                        className={`absolute text size-full flex flex-wrap items-center justify-center backdrop-brightness-50`}>
                                        <p className={`text-xl text-center tracking-tighter drop-shadow-2xl font-bold font-inconsolata text-light-color group-hover:scale-110 larger-screen:group-hover:scale-125 duration-100`}>{project.name}</p>
                                    </div>
                                </a>
                            </picture>
                        ))
                    )}
                </div>
            </div>
            <div className={`grid w-full gap-4 overflow-hidden duration-200 ${showSkills ? "open" : "close"}`}>
                <div
                    className={`flex flex-wrap justify-center items-center w-full h-fit gap-4 overflow-hidden larger-screen:justify-start larger-screen:gap-8`}>
                    <div
                        className="flex items-center justify-center flex-col gap-2 w-full h-fit larger-screen:items-start">
                        <p className={`font-inconsolata font-bold text-center dark:text-light-color text-3xl`}>
                            Nenhuma habilidade adicionada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Na espera da parte de habilidades ser implementada no sistema banckend
// {info && info.skills.map((skill, id) => {
//     return (
//         <div key={id}
//              className={`overflow-hidden flex items-center justify-center size-fit rounded-lg cursor-pointer`}>
//             <picture
//                 className={`size-40 flex flex-col items-center justify-center gap-4 bg-[#111111] dark:bg-dark-color-second p-2`}>
//                 <img src={skill.image} alt={skill.name}
//                      className={`size-16 select-none rounded`}/>
//                 <p className={`text-lg font-inconsolata text-light-color`}>{skill.name}</p>
//             </picture>
//         </div>
//     )
// })}