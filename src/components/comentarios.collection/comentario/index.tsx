import React from "react"
import { IComentarioProps } from "./types"
import Avaliacao from "../avaliacao"

function Comentario ({avaliacao, mensagem, autor, descricao, imagem}: IComentarioProps) {
    return (
    <div className="bg-dark-color-second w-317px h-302.14px rounded-2xl">
        <div className="avaliacao__container ">
            <Avaliacao avaliacao={avaliacao} />
        </div>
        <p className="">{mensagem}</p>
        <div className="pessoa__container">
            <img src={imagem}></img>
            <h2>{autor}</h2>
            <span>{descricao}</span>
        </div>
    </div>
    )
}

export default Comentario