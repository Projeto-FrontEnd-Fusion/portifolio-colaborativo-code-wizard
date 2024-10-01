import clsx from "clsx";

function AboutFrontEndFusion() {
  const Container = clsx(
    "flex flex-col p-14 bg-dark-color gap-14 max-medium-screen:px-10 max-small-screen:px-8"
  );

  const AboutProject = clsx("flex flex-col items-center gap-16");
  const TitleAboutProject = clsx(
    `text-5xl font-mulish font-black text-[#FFFF] text-center 
    max-larger-screen:text-4xl
    max-medium-screen:text-2xl
    max-small-screen:max-w-64
    `
  );
  const TextAboutProject = clsx(
    "font-mulish text-[#ffff] text-center font-regular text-xl max-medium-screen:text-base max-small-screen:text-sm"
  );

  const OurGoals = clsx("flex flex-col gap-12");

  const ArticlesOurGoals = clsx(
    "flex rounded-lg p-8 bg-dark-color-second items-center gap-20 max-medium-screen:flex-col max-medium-screen:items-start max-medium-screen:gap-5"
  );

  const ImageArticles = clsx("max-medium-screen:w-12");

  const TextArticles = clsx(
    " mulish font-regular  text-[#FFFF] max-medium-screen:text-sm"
  );

  const Participate = clsx("flex self-center flex-col gap-16");

  const TextParticipate = clsx(
    "mulish font-regular text-[#FFFF]  text-center self-center max-medium-screen:w-[90%]"
  );
  const ButtonParticipate =
    clsx(`mulish font-bold text-2xl text-[#E1E1E1] px-12 py-4  self-center
  rounded-2xl bg-[#06B94E] max-small-screen:text-lg
  max-small-screen:px-10
  max-small-screen:py-2
  `);

  return (
    <section className={Container}>
      {/* 
      Limitar o comprimento da section para que fique um pouco mais afastado das bordas e centralizado com o restante do projeto.
      Acredito que acertando esse ponto, a section ficará perfeita
      */}

      <div className={AboutProject}>
        <h2 className={TitleAboutProject}>Sobre o projeto Front-End Fusion</h2>
        <p className={TextAboutProject}>
          O Frontend Fusion é um projeto inovador focado em proporcionar uma
          experiência envolvente de aprendizado de programação. Nosso objetivo é
          oferecer um ambiente colaborativo onde entusiastas de tecnologia
          possam mergulhar no mundo do desenvolvimento frontend, explorando CSS,
          HTML e JavaScript através de desafios e atividades interativas.
        </p>
      </div>
      <div className={OurGoals}>
        <article className={ArticlesOurGoals}>
          <img
            className={ImageArticles}
            src="/FolderImage.png"
            alt="Imagem de uma pasta"
          />
          <p className={TextArticles}>
            <strong>O Que Procuramos:</strong>
            <br />
            {/* 
            Ao invéz de usar Br para separar as linhas, utilize as tags h1 até h6, neste caso h3 ou h4 ficaria bom, para indicar o título deste tópico 
            E o que ficou separado depois do Br, pode ser colocado dentro de uma tag p
            */}
            
            Paixão pela programação e desejo de aprender e crescer. Conhecimento
            básico de CSS, HTML e JavaScript ou disposição para aprender.
            Capacidade de trabalhar em equipe e colaborar em projetos conjuntos.
            Comprometimento e vontade de enfrentar desafios e superar
            obstáculos.
          </p>
        </article>
        <article className={ArticlesOurGoals}>
          <img
            className={ImageArticles}
            src="/TargetImage.png"
            alt="Imagem de uma pasta"
          />
          <p className={TextArticles}>
            <strong>Responsabilidades:</strong> <br />
            Participar de desafios e atividades gamificadas para desenvolver
            habilidades em programação. Colaborar com outros membros da equipe
            para criar projetos frontend inovadores. Contribuir com ideias e
            feedback para aprimorar continuamente o projeto.
          </p>
        </article>
        <article className={ArticlesOurGoals}>
          <img
            className={ImageArticles}
            src="/StarImage.png"
            alt="Imagem de uma pasta"
          />
          <p className={TextArticles}>
            <strong>Benefícios:</strong> <br />
            Acesso a uma comunidade de aprendizado dinâmica e colaborativa.
            Oportunidade de desenvolver habilidades práticas em programação.
            Experiência valiosa para enriquecer seu currículo e portfólio. Se
            você está pronto para embarcar em uma jornada emocionante de
            aprendizado e crescimento no mundo do desenvolvimento web, junte-se
            a nós no Frontend Fusion!
          </p>
        </article>
      </div>
      <div className={Participate}>
        <p className={TextParticipate}>
          Estamos ansiosos para receber sua inscrição e dar as boas-vindas a
          você em nossa comunidade!
        </p>
        {/* Ajustar o tamanho da letra. Neste caso pode ser uma tag de título também (h2) */}
        <button className={ButtonParticipate}>Quero Participar</button>
      </div>
    </section>
  );
}

export default AboutFrontEndFusion;
