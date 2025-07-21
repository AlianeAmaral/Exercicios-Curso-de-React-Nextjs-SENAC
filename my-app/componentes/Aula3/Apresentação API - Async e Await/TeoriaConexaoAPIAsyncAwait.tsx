export default async function TeoriaConexaoAPIAsyncAwait(){ // declaramos aqui que ela vai ser assíncrona com async, só com essa palavra será permitido adicionar o "await" ali abaixo.
    
    const resposta = await fetch ("https://jsonplaceholder.typicode.com/users") //experimentar a URL no navegador para saber se está ok.
    const dados = await resposta.json(); // essa linha irá descompactar os dados json. // vai dar um erro de não esperar, então precisa colocar esse await;
    console.log(dados)

    // essa rota vai dar tudo, mas vamos fazer um novo exercício para mostrar como trazer um dado filtrado, isso seria o que mais vamos fazer.
    // no APITeste2 que é o próximo, vamos fazer a tipagem, pois não fizemos aqui, não descompatamos o json.

    return (
        <div>
        
        </div>
    )
}