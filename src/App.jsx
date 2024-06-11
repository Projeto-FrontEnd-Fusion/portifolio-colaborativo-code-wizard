import "./App.css";
import EquipeCollection from "./components/equipe.collection";
import ComentariosContainer from "./components/comentarios.collection";
import AboutFrontEndFusion from "./components/sobre-o-projeto.collection";
import Advantages from "./components/vantagens.collection/Advantages";
import LingeTecs from "./components/ling-e-tecs.collection/LingeTecs";
import React from "react";

function App() {
  return (
    <div className="flex flex-col gap-10 bg-dark-color">
      <span>[Coloque aqui o hero]</span>
      <Advantages />
      <LingeTecs/>
      <EquipeCollection />
      <AboutFrontEndFusion />
      <ComentariosContainer />
      <span>[Coloque aqui a sessão de call to action]</span>
      <span>[Coloque aqui o cabecalho]</span>
    </div>
  );
}

export default App;
