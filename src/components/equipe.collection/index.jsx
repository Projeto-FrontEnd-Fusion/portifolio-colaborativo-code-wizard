import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import EquipeTop from "./indexComponents/EquipeTop.jsx";
import EquipeBottom from "./indexComponents/EquipeBottom.jsx";

export default function EquipeCollection() {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		const url = "https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/api/DragonCoders"
		const fetchData = async () => {
			try {
				const data = await fetch(url)
				if (!data.ok) {
					console.error("Falha ao requisitar os dados")
					return null
				}
				return await data.json()
			} catch (e) {
				console.error(`Error: ${e}`)
				return null
			}
		}
		fetchData().then(data => data ? setUsers(data) : console.error("Nenhum dado disponivel"))
	}, [])

	return (
		<section
			className={`flex items-center flex-col gap-[90px] w-full h-fit bg-light-color px-4 pb-8 pt-16 larger-screen:px-16 dark:bg-dark-color`}>
			<div className={`w-full max-w-[503px] px-5 pb-5 border-b-2 border-b-dark-color dark:border-b-border-color`}>
				<h1 className={`break-words w-full text-center text-2xl larger-screen:text-3xl font-inconsolata text-dark-color dark:text-light-color`}>
					Desenvolvedores FrontEnd
				</h1>
			</div>
			{users === null ? (
				<div className="flex items-center justify-center flex-col gap-2 w-full h-80">
					<LuLoader2 className={`animate-spin dark:stroke-light-color size-20`} />
				</div>
			) : (
				/** @property users.people */
				users.people.map((user, id) => (
					<div key={id} className="overflow-hidden w-full h-fit max-w-[1280px]">
						<EquipeTop user={user} />
						<EquipeBottom user={user} />
					</div>
				))
			)}
		</section>
	)
}