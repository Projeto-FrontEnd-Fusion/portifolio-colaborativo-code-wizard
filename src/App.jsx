import React from "react";
import "./App.css";
import Hero from './components/hero.collection/Hero';
import Advantages from "./components/vantagens.collection/Advantages";
import LingeTecs from "./components/ling-e-tecs.collection/LingeTecs";
import EquipeCollection from "./components/equipe.collection";
import AboutFrontEndFusion from "./components/sobre-o-projeto.collection";
import ComentariosContainer from "./components/comentarios.collection";
import Footer from "./components/rodape.collection/Footer";

function App() {
  return (
    <div className="flex flex-col gap-10 bg-dark-color">
     
      {/* Esta div deve ser trocada pelo termo "main" já que este é o corpo do projeto.
       Todos os componentes que vem dentro deste main devem ser "sections", ou "header" para o cabeçalho e "footer" para o rodapé  */}
      
      <Hero />
      <Advantages />
      <LingeTecs />
      <EquipeCollection />
      <AboutFrontEndFusion />
      <ComentariosContainer />
      <Footer />
    </div>
  );
};

export default App;
