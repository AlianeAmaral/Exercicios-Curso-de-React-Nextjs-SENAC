"use client"

import AreaUsuario from "@/componentes/AreaUsuario";
import APIExerc2 from "@/componentes/Aula3/APITeste2";
import ClientExerc1 from "@/componentes/Aula3/APIClientExerc1";
import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";
import MenuLateral from "@/componentes/MenuLateral";
import Perfil from "@/componentes/Perfil";
import APIClientExerc1 from "@/componentes/Aula3/APIClientExerc1";
import APIMenuExerc1 from "@/componentes/Aula3/APIMenuExerc1";

// function Mensagem({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       {children}
//     </div>
//   );
// }

// EXERCICIO - 2 de Area de Usuario

// function executar() {
//   alert("Sucesso");
// }

// export default function Index() {
//   return (
//     <div>
//       <AreaUsuario
//         titulo="Área do Usuário"
//         botao="Executar Ação"
//         executar={executar}>

//         <p>Bem-vindo ao sistema! Esse pedaço veio do children.</p>
//       </AreaUsuario>

//     </div>
//   )
// }

// EXERCICIO 3 - CARDS E MENU JUNTOS
// function acao() {
//   <div>olá</div>
// }

// export default function Index() {
//   return (
//     <div>
//       <div className="flex justify-start">
//         <div>
//           <MenuLateral />
//         </div>

//         <div className="m-10">
//           <Perfil
//             nome="Alice"
//             email="alice@email.com"
//             detalhes="Ver Detalhes"
//             acessarPerfil={acao}

//           ></Perfil>

//           <Perfil
//             nome="Alice"
//             email="alice@email.com"
//             detalhes="Ver Detalhes"
//             acessarPerfil={acao}

//           ></Perfil>

//           <Perfil
//             nome="Alice"
//             email="alice@email.com"
//             detalhes="Ver Detalhes"
//             acessarPerfil={acao}

//           ></Perfil>
//         </div>
//       </div >
//     </div>
//   )
// }

//EXERCICIO 4 - RENDERIZANDO UMA LISTA QUALQUER

// function Pessoa() {
//     const lista = [

//         {
//             id: 1,
//             nome: "joão",
//             idade: 20
//         },

//         {
//             id: 2,
//             nome: "maria",
//             idade: 17
//         },

//         {
//             id: 3,
//             nome: "larissa",
//             idade: 25
//         }
//     ]

//     return (
//         <div>
//             {lista.map((item) => (
//                 <div key={item.id}>
//                     <p>{item.nome} {item.idade}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default function Index() {
//     return (
//         <div>
//             <Pessoa />
//         </div>
//     );
// }

// VAMOS USAR ESTRUTURA TERNARIA PARA FAZER CONDIÇÃO NO HTML
// qualquer numero que nao seja 0 ou campo vazio, vai dar verdadeiro, 0 ou vazio dá falso

// export default function Index() {

//     const estaLogado = false // você pode colocar true ou false

//     return (
//         <div>
//             {estaLogado ? <h1> Olá, você está logado.</h1> : <div>Não está logado.</div>}
//         </div>
//     );
// }


//COMO FAZER UM CONTADOR QUE AUMENTE A QUANTIDADE DE ITENS QUE VOCÊ ESTÁ ADICIONANDO, CLICANDO NO BOTÃO VAI ADICIONANDO MAIS 1

// export default function Index() {

//     const [contador, setContador] = useState(0)

//     //const estaLogado = false

//     function atualizarContador() {
//         setContador(contador + 1)
//     }

//     return (
//         <div>
//             {contador}
//             <button className="bg-red-300 text-white rounded-sm cursor-pointer" onClick={atualizarContador}> Atualizar</button>
//         </div>
//     )
// }

// ...lista escrevo dessa forma porque estou falando que tudo que tinha antes é para ser considerado + mais o que tem hoje
//o useState é para criar variaveis

// EXERCICIO PARA MOSTRAR O useState com LISTA

// export default function Index() {

//     const [contador, setContador] = useState(0)
//     const [usuario, setUsuario] = useState<usuario>()

//     const [lista, setLista] = useState<[]>() //coloco colchetes porque é lista, só lista usa colchete e está vazio, então é uma lista vazia

//     function atualizarContador() {
//         setContador(contador + 1) //melhor estudar mais o que é esse setContador

//     }

//     return (
//         <div>
//             {contador}

//             <button className="bg-red-300 text-white rounded-sm cursor-pointer" onClick={atualizarContador}> Atualizar</button>
//         </div>
//     )
// }

// EXERCICIO-1 DA AULA 3 QUE CONTINUAMOS NA AULA 4

// export default function Index(){

//     const [contador, setContador] = useState(0)

//     function incrementador(){
//         setContador(contador + 1)
//     }

//     function decrementador(){
//         if (contador <= 0) {
//             setContador(0)
//         }  
//         else {
//             setContador(contador - 1)
//         }
//     }

//     return (
//         <div>
//             <div className="h-screen flex justify-center items-center">
//                     <button className="bg-green-700 text-white cursor-pointer rounded-sm py-4 px-8" onClick={incrementador}> Adicionar</button>
//                     <button className="bg-gray-300 text-black border-2 rounded-sm m-10 px-5 py-3"> {contador}</button> 
//                     <button className="bg-red-700 text-white cursor-pointer rounded-sm py-4 px-9" onClick={decrementador}> Subtrair</button>    
//             </div>
//         </div>
//     )
// }

export default async function Index() {
    return (
       <div>    
            <div className="flex">
                <APIMenuExerc1/>
                <APIClientExerc1/>
            </div>
       </div>
    )
}