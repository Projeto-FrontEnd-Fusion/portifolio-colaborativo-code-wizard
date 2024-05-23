import "./App.css";
import EquipeCollection from "./components/equipe.collection";
import ComentariosContainer from "./components/comentarios.collection";
import AboutFrontEndFusion from "./components/sobre-o-projeto.collection";
("./components/sobre-o-projeto.collection/");
import React from "react";

function App() {
  return (
    <div className=" flex flex-col gap-10">
      <span>[Coloque aqui o hero]</span>
      <span>[Coloque aqui a sessão de vantagens]</span>
      <span>[Coloque aqui a sesão de tecnologias]</span>
      <EquipeCollection />
      <AboutFrontEndFusion />
      <ComentariosContainer />
      <span>[Coloque aqui o cabecalho]</span>
    </div>
  );
}

export default App;
