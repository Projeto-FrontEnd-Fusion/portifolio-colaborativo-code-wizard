import React, { useState } from "react"
import Comentario from "./comentario"
import  { api } from "./db/api";

function ComentariosContainer() {
    
    const [items, setItems] = useState<any[]>([]);
    
    const buscaComentarios = async () => {
        try {
            const {data} = await api.get('/comentarios');    
            if(data.length && data[0].id) {
                setItems(data);
            };
        }
        catch (e) {
            console.log(e);
        }
    }

    buscaComentarios();
    
    return (
        <div>
            <h1>Comentários e Avaliações</h1>
            <div>
                {items.map((item) => 
                    <Comentario 
                        avaliacao={item.avaliacao} 
                        mensagem={item.mensagem} 
                        autor={item.autor} 
                        descricao={item.descricao} 
                        imagem={item.imagem} 
                    />
                )}
            </div>
        </div> 
    );
}

export default ComentariosContainer