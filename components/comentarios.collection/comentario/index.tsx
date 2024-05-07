import React from "react"
import { IComentarioProps } from "./types"

export const Comentario = ({mensagem, autor, descricao, imagem}: IComentarioProps) => {
    return (
    <div className="bg-dark-color-second w-317 h-302.14 rounded-2xl">
        Comentário
    </div>)
}