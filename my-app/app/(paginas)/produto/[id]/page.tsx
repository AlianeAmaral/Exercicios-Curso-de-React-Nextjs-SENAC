// import Link from "next/link";

// type productsProps = { // os atributos sempre precisam ser iguais aos que estão na API?
    
//     id: number,
//     title: string,
//     price: number,
//     description: string,
//     category: string,
//     image: string,

//     rating: {
//             rate: number,
//             count: number;
//     }
// }

export default async function DetalhesProduto ({params}: {params: Promise <{id:string}>}) {

    const {id} = await params;

    await new Promise((resolve) => setTimeout(resolve, 4000));
    const resposta = await fetch(`https://fakestoreapi.com/products/{id}`) 
    const {dados} = await resposta.json(); // tirei a lista []; o key é porque usávamos maps;

    return (
            <div>
                <p>{dados.title}</p>
            </div>
    );
}

// cod. professor:
// export default async function DetalhesProduto({params}: {params: Promise<{id: string}>}){
//     const {id} = await params
//     return (
//         <div>
//             <h1>ID: {id}</h1>
//         </div>
//     )
// }

// por que sempre usarmos a palavra userProps? não poderia ser outro nome?
// por que params? por que promise? por que o id string?