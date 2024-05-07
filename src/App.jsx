
import './App.css'
import { ComentariosContainer } from '../components/comentarios.collection'
import React from 'react'


function App() {

  return (
<div className=' flex flex-col gap-10'>

<span>[Coloque aqui o hero]</span>
<span>[Coloque aqui a sessão de vantagens]</span>
<span>[Coloque aqui a sesão de tecnologias]</span>
  <ComentariosContainer />
<span>[Coloque aqui a sessão de call to action]</span>
<span>[Coloque aqui o cabecalho]</span>

</div>
  )
}

export default App
