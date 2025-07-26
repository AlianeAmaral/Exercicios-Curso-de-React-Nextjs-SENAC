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

export default async function ListaLojaFake(){ 
    
    const resposta = await fetch ("https://fakestoreapi.com/products")
    const dados:Products[] = await resposta.json();
    console.log(dados) 

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

    return (
        <div> 
            <div className="flex flex-wrap space-x-10">
                {dados.map((item) => ( 
                <div key={item.id}>

                    <div className="flex flex-col mt-5 border-green-300 border-4 rounded-sm"> {/*card total com todos os blocos*/}

                        <div className="bg-orange-700 h-80"> {/*card do bloco com texto*/}

                            <div className="bg-black flex justify-center flex-col w-70"> {/*inicio do card da imagem*/}

                                <div className="bg-purple-400 w-full h-40 w-50 flex justify-center items-center">
                                    
                                    <div>
                                        <img className="max-w-45 max-h-35" src={item.image}></img>
                                    </div>

                                </div> {/*fim do card da imagem*/}

                                <div className="bg-red-500 h-80 flex justify-start m-2">

                                    <div> {/*inicio do card do texto*/}

                                        <p>{item.title}</p>
                                        <b>{item.price}</b>
                                        <p>{item.category}</p>
                                        <p>$ {item.price}</p>

                                    </div> {/*fim do card do texto*/}

                                </div>
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