import "./App.css";
import EquipeCollection from "./components/equipe.collection";
import ComentariosContainer from "./components/comentarios.collection";
import AboutFrontEndFusion from "./components/sobre-o-projeto.collection";
import Advantages from "./components/vantagens.collection/Advantages";
import React from "react";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <span>[Coloque aqui o hero]</span>
      <Advantages />
      <span>[Coloque aqui a sessão de tecnologias]</span>
      <EquipeCollection />
      <AboutFrontEndFusion />
      <ComentariosContainer />
      <span>[Coloque aqui a sessão de call to action]</span>
      <span>[Coloque aqui o cabecalho]</span>
    </div>
  );
}

export default App;
