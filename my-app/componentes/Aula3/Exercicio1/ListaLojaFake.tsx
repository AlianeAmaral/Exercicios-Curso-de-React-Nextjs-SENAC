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
        <div>
            {dados.map((item) => ( 
                <div key={item.id}>
                    <div>
                        <div className="text-black bg-white m-3 p-3 w-100 h-100 rounded-2xl transition ease-in-out duration-800 hover:scale-103 hover:shadow-2xl hover:shadow-blue-300">
                                <img className="max-h-70 max-w-70" src={item.image}></img>
                                <p>{item.title}</p>
                                <b>{item.price}</b>
                                <p>{item.category}</p>
                                <p>$ {item.price}</p>
                                <p>{item.description}</p>
                                <button className="bg-purple-700 text-white p-2 rounded-sm w-60 h-10">Ver mais</button>   
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}