import Advantage from "./Advantage";

import { GrSelect } from "react-icons/gr";
import { RiTodoLine } from "react-icons/ri";
import { GrCubes } from "react-icons/gr";
import { GoTelescope } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";

const Advantages = () => {

  // para melhor estruturação do projeto, quando for importar um componente para dentro de outro, criamos uma pasta com deste componente e 
  // nomeamos o arquivo com "index.jsx". 


  return (
    <div className="bg-dark-color">
      {/* 
      Semanticamente, quando queremos delimitar um espaço para um conteúdo específico, não utilizamos "div" e sim "section"
      */}

      <div className="m-auto flex flex-wrap items-center justify-center p-2 gap-4 mega-screen:max-w-[1212px]">
        <div className="w-96 text-[#F2F0FF] pt-8 pb-8 pr-8 m-3 space-y-4 min-h-[161px] small-screen:min-h-[290px] small-screen:m-0">

          <h3 className="text-[22px] font-black font-inconsolata leading-6 small-screen:text-[32px] small-screen:leading-8">
            Vantagens do <br /> Projeto
          </h3>
          <hr />
          <p className="text-[#B5B3BC] font-mulish text-xs small-screen:text-lg">
            Participar de um projeto em grupo para aprender programação web
            frontend e desenvolver um portfólio colaborativo oferece uma série
            de vantagens!
          </p>
        </div>

        {/* Aumentar um pouco o espaçamento entre o título e o texto de cada tópico */}
        <Advantage
          icon={<GrSelect />}
          title={"Diversidades de habilidades:"}
          txt={
            "Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          }
        />
        <Advantage
          icon={<RiTodoLine />}
          title={"Divisão de tarefas:"}
          txt={
            "Trabalhar em equipe permite distribuir o trabalho de forma eficiente, acelerando o progresso e permitindo que cada membro se concentre em suas áreas de especialização."
          }
        />
        <Advantage
          icon={<GrCubes />}
          title={"Aprendizado colaborativo:"}
          txt={
            "Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          }
        />
        <Advantage
          icon={<GoTelescope />}
          title={"Diversidade de perspectivas:"}
          txt={
            "trabalhar com pessoas diferentes traz uma variedade de perspectivas e abordagens para resolver problemas. Isso pode levar a soluções mais criativas com suas ideias únicas."
          }
        />
        <Advantage
          icon={<GrShieldSecurity />}
          title={"Habilidades interpessoais:"}
          txt={
            "Trabalhar em equipe ajuda a aprimorar habilidades de comunicação, colaboração e trabalho em grupo. Essas habilidades são essenciais no ambiente de trabalho, não apenas na área de programação, mas em muitos outros campos também."
          }
        />
      </div>
    </div>
  );
};

export default Advantages;
