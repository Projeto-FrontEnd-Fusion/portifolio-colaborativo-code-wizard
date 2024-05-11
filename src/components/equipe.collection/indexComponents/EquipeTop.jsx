import { LuGithub, LuLinkedin, LuInstagram, LuFacebook  } from "react-icons/lu";
import {useEffect, useState} from "react";

export default function EquipeTop(User){
    const [info, setInfo] = useState()
    const {user, infos} = User

    useEffect(()=>{
        for(const name in infos){
            if(name.toLowerCase() === user.login.toLowerCase()){
                setInfo(infos[name])
                break
            }
        }
    },[infos])

    return(
        <div className={`flex items-center flex-col w-full h-fit gap-8 larger-screen:flex-row`}>
            <picture className={`flex items-center justify-center size-40 larger-screen:size-64 larger-screen:flex-shrink-0`}>
                <img src={user.avatar_url} alt={`Foto de ${user.name}`} className={`size-full object-cover rounded-2xl select-none`}/>
            </picture>
            <div
                className={`flex items-center justify-center flex-col gap-4 w-full h-fit larger-screen:w-fit larger-screen:items-start`}>
                <p className={`text-4xl text-center text-dark-color dark:text-[#03FCFC] font-inconsolata`}>{user.name || user.login}</p>
                <p className={`text-xl text-center text-dark-color-second dark:text-light-color-text1 font-mulish font-light`}>FrontEnd Designer</p>
                <div className={`flex items-center justify-center flex-wrap w-full h-fit gap-4 larger-screen:w-fit`}>
                    <div className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                        <a href={user.html_url} target="_blank"
                           className={`flex items-center justify-center size-full`}>
                            <LuGithub className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                        </a>
                    </div>
                    <div className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                        <a href={info && info.social_media.linkedin} target="_blank"
                           className={`flex items-center justify-center size-full`}>
                            <LuLinkedin className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                        </a>
                    </div>
                    <div className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                        <a href={info && info.social_media.instagram} target="_blank"
                           className={`flex items-center justify-center size-full`}>
                            <LuInstagram className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                        </a>
                    </div>
                    <div className={`group size-12 rounded-full bg-[#454343] duration-100 hover:scale-125 dark:bg-primary-button`}>
                        <a href={info && info.social_media.facebook} target="_blank"
                           className={`flex items-center justify-center size-full`}>
                            <LuFacebook className={`stroke-light-color dark:stroke-dark-color duration-75 dark:group-hover:stroke-light-color`}/>
                        </a>
                    </div>
                </div>
                <div className={`flex items-center justify-center w-full h-fit`}>
                    <p className={`w-full break-words max-w-[680px] text-center text-dark-color-second font-mulish larger-screen:line-clamp-4 larger-screen:text-start dark:text-light-color`}>
                        {info && info.descricao}
                    </p>
                </div>
            </div>

        </div>
    )
}