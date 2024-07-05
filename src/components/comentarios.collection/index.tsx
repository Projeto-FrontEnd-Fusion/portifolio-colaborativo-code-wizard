import React, { useEffect, useState } from "react"
import Comentario from "./comentario"
import  { api } from "./db/api";

function ComentariosContainer() {
 
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        api
        .get('/comentarios')
        .then((response) => setItems(response.data))
        .catch((err) => {
            console.error("Algo não deu certo! " + err)
        });
    }, []);

    console.log(items)
    
    return (
        <section className="comentarios mx-auto my-7 w-3/4">
            <div className="comentarios__title border-b-2 border-border-color mx-auto mb-2 h-16">
                <h1 className="text-center font-inconsolata text-white mx-auto mb-1 text-2xl w-1/2">Comentários e Avaliações</h1>
            </div>
            <div className="items__container flex flex-col gap-y-8">
                {items.map((item) => 
                    <div className="bg-dark-color-second rounded-2xl pl-9 py-9 pr-7" key={item.id}>
                        <Comentario 
                            id={item.id}
                            avaliacao={item.nota} 
                            mensagem={item.mensagem} 
                            autor={item.autor} 
                            descricao={item.descricaoAutor} 
                            imagem={item.foto} 
                        />
                    </div>
                )}
            </div>
        </section> 
    );
}

export default ComentariosContainer