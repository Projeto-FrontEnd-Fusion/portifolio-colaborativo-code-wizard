import React, { createContext, useContext, useState } from 'react';
import { FiGithub } from "react-icons/fi";
import { HiBars3 } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVite } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { GoArchive } from "react-icons/go";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { BsStars } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import itachi from "../../assets/itachi.jpeg";
import madara from "../../assets/madara.jpeg";
import boruto from "../../assets/boruto.jpeg";
import kakashi from "../../assets/kakashi.jpeg";
import minato from "../../assets/Minato.jpeg";
import pain from "../../assets/pain.jpeg";


const Hero = () => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuItems = [
    { id: 1, name: "Sobre", icon: <GoArchive /> },
    { id: 2, name: "Equipes", icon: <LiaPeopleCarrySolid /> },
    { id: 3, name: "Vantagens", icon: <BsStars /> },
    { id: 4, name: "Participantes", icon: <GrGroup /> },
    { id: 5, name: "Linkedin", icon: <AiFillLinkedin /> },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main className="bg-dark-color font-inconsolata">
      <main className="flex flex-col border gap-[32px] medium-screen:items-end" >
        <nav className="flex justify-between px-4 h-32 items-center">
        <ul className="mini-screen:hidden medium-screen:flex">
          {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="w-full h-20 flex items-center px-6 rounded-sm text-[20px] font-second-title-font text-light-color
                   cursor-pointer"
                >
                  <a className="flex gap-2 items-center hover:bg-dark-color-second px-3 rounded-[16px]">
                    {item.name}
                  </a>
                </li>
              ))}
          </ul>
          <a
            href="https://github.com/Projeto-FrontEnd-Fusion/portifolio-colaborativo-code-wizard"
            target="_blank"
            className="px-4 flex gap-[6px]
                items-center justify-center bg-primary-button rounded-[16px] py-4 w-28 text-base font-bold" 
          >
            
            <FiGithub />
            Github
          </a>
          
          <button onClick={toggleDropdown} className="medium-screen:hidden">
            {dropdownOpen ? (
              <IoClose className="bg-dark-color fill-light-color w-10 h-10 transition-all duration-1000" />
            ) : (
              <HiBars3 className="bg-dark-color fill-light-color w-10 h-10 transition-all duration-1000" />
            )}
          </button>
          {dropdownOpen && (
            <ul
              className={`menu-mobile w-[100%] bg-dark-color-second flex flex-col justify-start bottom-0 absolute left-0
                    h-[80%] rounded-2xl pt-10 ${
                      dropdownOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="w-full h-20 flex items-center px-6 rounded-sm text-[20px] font-second-title-font text-light-color
                   hover:bg-dark-color cursor-pointer transition-all"
                >
                  <a className="flex gap-2 items-center font-inconsolata">
                    {item.icon} {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <section className="medium-screen:grid grid-cols-2 grid-rows-1 p-10 w-[100%] justify-evenly">
        <article className="mini-screen:ml-auto mr-auto flex flex-col items-center gap-[32px] medium-screen:order-2">
          <section className="mini-screen:flex flex-col text-center medium-screen:text-right">
            <p className="text-light-color-text2 text-sub-title-mobile font-second-title-font text-2xl">
              Projeto
            </p>
            <h1 className="text-light-color-text1 text-title-mobile font-main-title-font text-4xl">
              Frontend Fusion
            </h1>
            <p className="text-light-color-text2 text-sub-title-mobile font-second-title-font text-2xl medium-screen:text-lg">
              Codifique o seu futuro hoje!
            </p>
          </section>
          <div className="mini-screen:flex justify-center gap-8 w-[100%] mb-6">
            <FaReact className="bg-dark-color fill-light-color w-10 h-10  cursor-grabbing hover:scale-125 duration-1000 rounded-[50%]  " />
            <SiVite className="bg-dark-color fill-light-color w-10 h-10 transition ease-in-out hover:scale-125 bg-indigo-600 duration-300 cursor-grabbing" />
            <BiLogoTypescript className="bg-dark-color fill-light-color w-10 h-10 transition ease-in-out hover:scale-125 bg-sky-900 duration-300 cursor-grabbing" />
            <BiLogoTailwindCss className="bg-dark-color fill-light-color w-10 h-10 transition ease-in-out hover:scale-125 bg-teal-500 duration-300 cursor-grabbing" />
          </div>
        </article>
        <section className="mini-screen:flex ml-auto mr-auto w-full justify-center gap-[6px] items-center px-2 m-12 medium-screen:order-1">
          <figure className="flex flex-col h-72 w-24 items-center justify-center">
            <img className="rounded-xl" src={itachi} alt="" />
          </figure>
          <figure className="flex flex-col h-40 w-24 items-center justify-center mt-[-56px] gap-2">
            <img className=" width-100 rounded-xl" src={minato} alt="" />
            <img className="rounded-xl" src={pain} alt="" />
          </figure>
          <figure className="flex flex-col h-60 w-24 items-center justify-center gap-2">
            <img className="rounded-xl" src={madara} alt="" />
            <img className="rounded-xl" src={kakashi} alt="" />
          </figure>
          <figure className="flex flex-col h-72 w-24 items-center justify-center gap-2">
            <img className="rounded-xl" src={boruto} alt="" />
          </figure>
        </section>
        </section>
      </main>
    </main>
  );
};

export default Hero;
