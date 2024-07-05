import {LuGithub, LuLinkedin, LuInstagram, LuFacebook} from "react-icons/lu";

export default function EquipeTop(User) {
    const {user} = User

    return (
        <div className={`flex items-center flex-col w-full h-fit gap-8 larger-screen:flex-row`}>
            <picture
                className={`flex items-center justify-center size-40 larger-screen:size-64 larger-screen:flex-shrink-0`}>
                <img src={user.githubImgUrl} alt={`Foto de ${user.name || user.githubName}`}
                     className={`size-full object-cover rounded-2xl select-none`}/>
            </picture>
            <div
                className={`flex items-center justify-center flex-col gap-4 w-full h-fit larger-screen:w-fit larger-screen:items-start`}>
                <p className={`text-4xl text-center text-dark-color dark:text-[#03FCFC] font-inconsolata`}>{user.name || user.githubName}</p>
                <p className={`text-xl text-center text-dark-color-second dark:text-light-color-text1 font-mulish font-light`}>{user.subTitle}</p>
                <div className={`flex items-center justify-center flex-wrap w-full h-fit gap-4 larger-screen:w-fit`}>
                    {user.githubUrl ? (
                        <div
                            className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                            <a href={user.githubUrl} target="_blank"
                               className={`flex items-center justify-center size-full`}>
                                <LuGithub
                                    className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                            </a>
                        </div>
                    ) : null}
                    {user.linkedinUrl ? (
                        <div
                            className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                            <a href={user.linkedinUrl} target="_blank"
                               className={`flex items-center justify-center size-full`}>
                                <LuLinkedin
                                    className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                            </a>
                        </div>
                    ) : null}
                    {user.instagramUrl ? (
                        <div
                            className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                            <a href={user.instagramUrl} target="_blank"
                               className={`flex items-center justify-center size-full`}>
                                <LuInstagram
                                    className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                            </a>
                        </div>
                    ) : null}
                    {user.facebookUrl ? (
                        <div
                            className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                            <a href={user.facebookUrl} target="_blank"
                               className={`flex items-center justify-center size-full`}>
                                <LuFacebook
                                    className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                            </a>
                        </div>
                    ) : null}
                </div>
                <div className={`flex items-center justify-center w-full h-fit`}>
                    <p className={`w-full break-words max-w-[680px] text-center text-dark-color-second font-mulish larger-screen:line-clamp-4 larger-screen:text-start dark:text-light-color`}>
                        {user.text}
                    </p>
                </div>
            </div>
        </div>
    )
}