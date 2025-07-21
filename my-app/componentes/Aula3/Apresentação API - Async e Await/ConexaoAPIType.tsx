type userProps = {
    id: number,
    name: string,
    username: string,
    email: string
}

export default async function ConexaoAPIType(){ // se o componente for async, no page.tsx precisa ser async (assíncrono) também.
    
    const resposta = await fetch ("https://jsonplaceholder.typicode.com/users")
    const dados:userProps[] = await resposta.json(); // uma lista do tipo userProps
    console.log(dados) 

    // agora que tipamos ele, podemos seguir e fazer mostrar uma lista na tela.

    return (
        <div>
            {dados.map((item) => ( // importante sber como mostrar uma lista na tela, é essa estrutura com o item por onde vai começar a apresentação.
                <div key={item.id}>
                    <ul className="m-3 p-5 border-2 border-gray-300 rounded-2xl w-200">
                        <li>
                            <h1><b>ID: </b>{item.id}</h1>
                            <p><b>Nome: </b>{item.name}</p>
                            <p><b>Username: </b>{item.username}</p>
                            <p><b>E-mail: </b>{item.email}</p>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}