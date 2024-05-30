import {useEffect, useState} from "react";
import EquipeTop from "./indexComponents/EquipeTop";
import EquipeBottom from "./indexComponents/EquipeBottom";
import {LuLoader2} from "react-icons/lu";

export default function EquipeCollection() {
    const [users, setUsers] = useState([]);
    const [infos, setInfos] = useState()
    const names = ["dErnandoV7", "filipediass", "wesleyselmer", "diogenesdv", "DaviSC17", "welton228"] // Adicione o user do Github

    useEffect(() => {
        let cacheData = JSON.parse(localStorage.getItem("userGit"))
        if (cacheData && (names.length !== cacheData.length)) cacheData = undefined
        if (cacheData && (names.length === cacheData.length)) {
            const checked = names.every((name, i) => name.toLowerCase() === cacheData[i].login.toLowerCase())
            if (!checked) cacheData = undefined
        }

        if (!cacheData) {
            Promise.all(
                names.map(name =>
                    fetch(`https://api.github.com/users/${name}`)
                        .then(response => {
                            if (!response.ok) throw new Error("Erro na solicitação da API")
                            return response.json()
                        })
                )
            )
                .then(data => {
                    localStorage.setItem("userGit", JSON.stringify(data))
                    setUsers(data)
                })
                .catch(error => console.error(error))
        } else {
            setUsers(cacheData)
        }
    }, [])

    useEffect(() => {
        fetch("./src/components/equipe.collection/jsonUsers/userInfo.json")
            .then(response => response.json())
            .then(data => setInfos(data))
            .catch(error => console.error(`Error na solicitação: ${error}`))
    }, [users])

    return (
        <section
            className={`flex items-center flex-col gap-[90px] w-full h-fit bg-light-color px-4 pb-8 pt-16 larger-screen:px-16 dark:bg-dark-color`}>
            <div className={`w-full max-w-[503px] px-5 pb-5 border-b-2 border-b-dark-color dark:border-b-border-color`}>
                <h1 className={`break-words w-full text-center text-2xl larger-screen:text-3xl font-inconsolata text-dark-color dark:text-light-color`}>Desenvolvedores
                    FrontEnd
                </h1>
            </div>
            {users.length === 0 ? (
                <div className="flex items-center justify-center flex-col gap-2 w-full h-80">
                    <LuLoader2 className={`animate-spin dark:stroke-light-color size-20`}/>
                </div>
            ) : (
                users.map((user, id) => (
                    <div key={id} className="overflow-hidden w-full h-fit max-w-[1280px]">
                        <EquipeTop user={user} infos={infos}/>
                        <EquipeBottom user={user} infos={infos}/>
                    </div>
                ))
            )}
        </section>
    )
}