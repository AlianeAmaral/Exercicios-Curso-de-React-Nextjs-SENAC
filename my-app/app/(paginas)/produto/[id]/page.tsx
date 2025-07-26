import Link from "next/link";

type userProps = { 
    id: number,
}

export default async function ({params}: {params: Promise <{id:string}>}) {
    
    const {id} = await params;

    const resposta =  await fetch(`https://jsonplaceholder.typicode.com/posts?userIs=${id}`)
    
    return (
        <div>
            <h1> Id: {id} </h1>
            <Link href={"/"}>Teste</Link>
        </div>
    );
}

// por que sempre usarmos a palavra userProps? não poderia ser outro nome?
// por que params? por que promise? por que o id string?