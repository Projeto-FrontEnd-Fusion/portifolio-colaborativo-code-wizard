import {useEffect, useState} from "react";

export default function EquipeBottom(User) {
    const [showProject, setShowProject] = useState(false)
    const [showSkills, setShowSkills] = useState(false)

    const [info, setInfo] = useState()
    const {user, infos} = User

    useEffect(() => {
        for (const name in infos) {
            if (name.toLowerCase() === user.login.toLowerCase()) {
                setInfo(infos[name])
                break
            }
        }
    }, [infos])


    function toggleProjects() {
        setShowProject(!showProject)
        if (showSkills) toggleSkills()
    }

    function toggleSkills() {
        setShowSkills(!showSkills)
        if (showProject) toggleProjects()
    }

    return (
        <div className={`space-y-4 w-full h-fit mt-4 larger-screen:mt-16`}>
            <menu
                className={`flex flex-wrap justify-center w-full h-fit gap-2 larger-screen:justify-start larger-screen:gap-8 larger-screen:mb-8`}>
                <button onClick={toggleProjects}
                        className={`w-40 p-2 rounded bg-primary-button text-light-color font-inconsolata cursor-pointer duration-150 hover:bg-dark-color-second dark:hover:bg-primary-button larger-screen:hover:bg-primary-button larger-screen:w-48 larger-screen:bg-dark-color dark:bg-dark-color-second`}>
                    Projetos Recentes
                </button>
                <button onClick={toggleSkills}
                        className={`w-40 p-2 rounded bg-primary-button text-light-color font-inconsolata cursor-pointer duration-150 hover:bg-dark-color-second dark:hover:bg-primary-button larger-screen:hover:bg-primary-button larger-screen:w-48 larger-screen:bg-dark-color dark:bg-dark-color-second`}>
                    Habilidades
                </button>
            </menu>
            <div className={`grid w-full gap-4 overflow-hidden duration-200 ${showProject ? "open" : "close"}`}>
                <div
                    className={`flex flex-col items-center w-full h-fit gap-4 overflow-hidden larger-screen:flex-row larger-screen:flex-wrap larger-screen:gap-8`}>
                    {info && info.projects.map((project, id) => {
                        return (
                            <picture key={id}
                                     className={`overflow-hidden flex items-center justify-center w-52 h-36 bg-dark-color rounded-lg cursor-pointer larger-screen:w-[300px] larger-screen:h-[210px] dark:bg-light-color`}>
                                <img src="./vite.svg" alt="image"
                                     className={`size-20 object-cover larger-screen:size-40 select-none`}/>
                            </picture>
                        )
                    })}
                </div>
            </div>
            <div className={`grid w-full gap-4 overflow-hidden duration-200 ${showSkills ? "open" : "close"}`}>
                <div
                    className={`flex flex-col items-center w-full h-fit gap-4 overflow-hidden larger-screen:flex-row larger-screen:flex-wrap larger-screen:gap-8`}>
                    {info && info.skills.map((project, id) => {
                        return (
                            <picture key={id}
                                     className={`overflow-hidden flex items-center justify-center w-52 h-36 bg-primary-button rounded-lg cursor-pointer larger-screen:w-[300px] larger-screen:h-[210px]`}>
                                <img src="./vite.svg" alt="image"
                                     className={`size-20 object-cover larger-screen:size-40 select-none`}/>
                            </picture>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}