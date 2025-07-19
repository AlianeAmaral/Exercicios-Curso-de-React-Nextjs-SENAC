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

export default async function APIClientExerc1(){ 
    
    const resposta = await fetch ("https://fakestoreapi.com/products")
    const dados:Products[] = await resposta.json();
    console.log(dados) 

    return (
        <div>
            {dados.map((item) => ( 
                <div key={item.id}>
                    <ul className="">
                        <li>
                            <img className="max-h-70 max-w-70" src={item.image}></img>
                            <p>{item.title}</p>
                            <b>{item.price}</b>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            <button className="bg-purple-700 text-white">Ver mais</button>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}