"use client"

// preciso me preocupar do useState não expandir todos ao mesmo tempo, e sim individualmente.
// vou enumerar as mudanças que precisei fazer para o vermais/vermenos funcionar.

import { useState, useEffect } from "react";

type Products = { // os atributos sempre precisam ser iguais aos que estão na API?
    
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,

    rating: {
            rate: number,
            count: number;
    }
}

export default function ListaLojaFake(){ // 3. o async foi retirado.
    
    // const resposta = await fetch ("https://fakestoreapi.com/products") {/* 1. foi pedido para trocar o fetch para um useEffect, substituir tudo pelo que está abaixo.*/}
    // const dados:Products[] = await resposta.json();
    // console.log(dados) 

    // const [expandir, setExpandir] = useState(false)

    // function alternador() {
    //     setTexto(!texto)
    // }

    // 2. estudar como usar o useEffect e as propriedades abaixo, iniciar estudo daqui ...

    // const [dados, setDados] = useState<Products[]>([]);
    // const [expandido, setExpandido] = useState<Set<number>>(new Set());

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then(res => res.json())
    //         .then((data: Products[]) => setDados(data));
    // }, []);

    // function alternador(id: number) {
    //     setExpandido(prev => {
    //         const novoSet = new Set(prev);
    //             if (novoSet.has(id)) {
    //                 novoSet.delete(id);
    //             } else {
    //                 novoSet.add(id);
    //             }

    //             return novoSet;
    //     });
    // }

    // ... até aqui.

    return (
        <div> 
            <div className="flex flex-wrap space-x-3 pt-3 justify-center">
                {dados.map((item) => ( 
                <div key={item.id}>

                    <div className="flex flex-col mt-5"> {/*card total com todos os blocos*/}

                        <div className="bg-white w-90 p-3 rounded-2xl"> {/*card do bloco com texto, corta o que ultrapassa*/}

                            <div className="bg-white flex justify-center flex-col"> {/*inicio do card da imagem*/}
                                <div className="bg-white w-full h-40 flex justify-center items-center">  
                                    <div>
                                        <img className="max-w-45 max-h-35" src={item.image}></img>
                                    </div>
                                </div> {/*fim do card da imagem*/}

                                <div className="bg-white flex justify-start m-2 h-35 overflow-hidden">
                                    <div> {/*inicio do card do texto*/}
                                        <p className="font-bold text-base text-black">{item.title}</p>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <p className="font-bold text-green-500">$ {item.price}</p>
                                        <p className="text-xs text-gray-500">{item.description}</p>
                                    </div> {/*fim do card do texto*/}
                                </div>
                            </div>

                            <div className=" bg-rose-700 rounded-2xl text-center flex justify-center items-center text-white h-7 cursor-pointer" onClick={() => alternador(item.id)}> {/* por que o cursor pointer não funcionou aqui no texto "ver mais", só no bg? mas, adicionei o onClick que deu certo, o item.id vai permitir ver mais somente de 1 item, e não de todos ao mesmo tempo. */}
                                <button className="cursor-pointer text-sm"> {expandido.has(item.id) ? "Ver menos" : "Ver mais"}</button> {/*estudar melhor o funcionamento dessa ternária*/}
                            </div>

                        </div> 
                    </div>
                </div>
                ))}

            </div>
        </div>
    )

}

// percebe-se que o w-full ou h-full é o que permite o conteúdo ficar apenas dentro da div.

// código anterior que não estava dando certo, para comparar:

    // return (
    //     <div className="flex flex-wrap gap-4 justify-start p-4">
    //         {dados.map((item) => ( 
    //             <div key={item.id}>
    //                 <div className="h-120 w-100">
    //                     <div className="w-full h-full">
    //                     <div className="text-black bg-white m-5 p-3 h-125 rounded-2xl transition ease-in-out duration-800 hover:scale-103 hover:shadow-2xl hover:shadow-gray-300">  
                            
    //                         <div className="bg-white flex justify-center items-center">
    //                             <img className="max-w-44" src={item.image}></img>
    //                         </div>
    //                         <p>{item.title}</p>
    //                         <b>{item.price}</b>
    //                         <p>{item.category}</p>
    //                         <p>$ {item.price}</p>
    //                         <div>
    //                             <p className="text-sm">{item.description}</p>
    //                         </div> 
    //                     </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // )