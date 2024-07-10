import React from "react"
import { IComentarioProps } from "./types"
import Avaliacao from "../avaliacao"

function Comentario ({ avaliacao, mensagem, autor, descricao, imagem }: IComentarioProps) {
    return (<>
    <div className="avaliacao__container ">
        <Avaliacao avaliacao={avaliacao} />
    </div>
    <p className="font-mulish text-xs py-6">{mensagem}</p>
    <div className="pessoa__container flex gap-4">
        <img className="w-9 h-9 rounded-full my-auto object-cover" src={imagem}></img>
        <div className="pessoa__titulo flex flex-col">
            <h2 className="font-mulish text-xs text-white">{autor}</h2>
            <span className="font-mulish text-[6px] text-white">{descricao}</span>
        </div>
    </div>
    </>
    )
}

export default Comentario