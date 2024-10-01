import { FiGithub } from "react-icons/fi";
import profile1 from "../../assets/profile-1.png"
import profile2 from "../../assets/profile-2.png"
import profile3 from "../../assets/profile-3.png"
import profile4 from "../../assets/profile-4.png"
import profile5 from "../../assets/profile-5.png"
import profile6 from "../../assets/profile-6.png"

const Footer = () => {
	const menuItems = [
		{ id: 1, name: "Sobre" },
		{ id: 2, name: "Equipes" },
		{ id: 3, name: "Projetos" },
		{ id: 4, name: "Participantes" },
	];

	return (
		<footer className="bg-dark-color-second font-mulish size-[18px] py-5 px-8 w-full h-[434px] rounded-t-[24px] larger-screen:h-[284px] text-light-color larger-screen:rounded-t-[64px] flex flex-col">

			<div className="flex flex-row justify-between">

				<div className="space-y-9">
					<div className="flex flex-col items-center font-inconsolata larger-screen:flex-row larger-screen:w-[600px] larger-screen:h-2/4 bg-dark-color-second">
						<a
							href="https://github.com/Projeto-FrontEnd-Fusion/portifolio-colaborativo-code-wizard"
							target="_blank"
							className="w-[150px] h-[56px] gap-2 flex items-center justify-center bg-second-button rounded-lg text-lg font-bold"
						>
							github
							<FiGithub size={24} />
						</a>

						<ul className="flex flex-col w-full larger-screen:flex-row">
							{menuItems.map((item) => (
								<li
									key={item.id}
									className="cursor-pointer h-[56px] gap-4 font-normal flex items-center ml-3 larger-screen:px-2"
								>
									<a className="">
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<p className="font-mulish text-center hidden larger-screen:block larger-screen:w-[600px] larger-screen:text-left larger-screen:my-1">
						Projeto Frontendfusion - Todos os direitos reservados
					</p>

				</div>

				{/*  */}
				<div className="flex flex-col w-1/4 larger-screen:w-[300px] space-y-16 larger-screen:mt-2 ">
					<div className="flex flex-row justify-center flex-wrap larger-screen:relative larger-screen:justify-start">
						<img
							className="w-9 h-9 rounded-full larger-screen:absolute larger-screen:top-0 larger-screen:left-0 z-0"
							src={profile6} alt=""
						/>
						<img
							className="w-9 h-9 rounded-full larger-screen:absolute larger-screen:top-0 larger-screen:left-6 z-10"
							src={profile5} alt=""
						/>
						<img
							className="w-9 h-9 rounded-full larger-screen:absolute larger-screen:top-0 larger-screen:left-11 z-20"
							src={profile4} alt=""
						/>
						<img
							className="w-9 h-9 rounded-full larger-screen:absolute larger-screen:top-0 larger-screen:left-16 z-30"
							src={profile3} alt=""
						/>
						<img
							className="w-9 h-9 rounded-full larger-screen:absolute larger-screen:top-0 larger-screen:left-20 z-40"
							src={profile2} alt=""
						/>
						<img
							className="w-9 h-9 rounded-full larger-screen:absolute larger-screen:top-0 larger-screen:left-24 z-50"
							src={profile1} alt=""
						/>
					</div>

					<div className="hidden larger-screen:block">
						<p className="larger-screen:text-base">Dinho silwa - Webdesigner & enginer</p>
						<p className="larger-screen:text-base">Davi santana - Webdesigner & enginer</p>
						<p className="larger-screen:text-base">Mercia Freitas - Webdesigner</p>
						<p className="larger-screen:text-base">Nico silva - WebEnginer</p>
						<p className="larger-screen:text-base">Ricardo gomes - webdesigner</p>
						<p className="larger-screen:text-base">Jonh Doe - Webdevelopemet</p>
					</div>
				</div>

			</div>
			{/* Precisa de ajustes na parte responsiva. O nome dos participantes desaparece e as fotos não ficam organizadas conforme o figma F */}

			<p className="font-mulish text-center my-6 block larger-screen:hidden larger-screen:w-[600px] larger-screen:text-left larger-screen:my-1">
				Projeto Frontendfusion - Todos os direitos reservados
			</p>

		</footer>
	);
};

export default Footer;
