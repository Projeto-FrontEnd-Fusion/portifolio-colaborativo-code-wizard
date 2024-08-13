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
