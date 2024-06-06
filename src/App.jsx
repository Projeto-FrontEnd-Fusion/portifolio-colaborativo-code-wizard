
import './App.css'
import EquipeCollection from "./components/equipe.collection";
import ComentariosContainer from './components/comentarios.collection'
import Hero from './components/hero.collection/Hero';
import React from 'react'



function App() {

  return (
<div className=' flex flex-col gap-10'>

<Hero />
<span>[Coloque aqui a sessão de vantagens]</span>
<span>[Coloque aqui a sesão de tecnologias]</span>
<EquipeCollection />
<ComentariosContainer />
<span>[Coloque aqui a sessão de call to action]</span>
<span>[Coloque aqui o cabecalho]</span>

</div>
  )
}

export default App
