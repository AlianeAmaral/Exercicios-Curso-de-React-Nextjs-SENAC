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

    return (
        <div className="flex flex-wrap gap-4 justify-start p-4">
            {dados.map((item) => ( 
                <div key={item.id}>
                    <div className="h-120 w-100">
                        <div className="w-full h-full">
                        <div className="text-black bg-white m-3 p-3 rounded-2xl transition ease-in-out duration-800 hover:scale-103 hover:shadow-2xl hover:shadow-blue-300">  
                            <img className="max-w-40" src={item.image}></img>
                            <p>{item.title}</p>
                            <b>{item.price}</b>
                            <p>{item.category}</p>
                            <p>$ {item.price}</p>
                            <div>
                                <p className="text-sm">{item.description}</p>
                            </div> 
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

// percebe-se que o w-full ou h-full é o que permite o conteúdo ficar apenas dentro da div.