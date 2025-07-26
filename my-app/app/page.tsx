"use client"

import Exercicio1MenuHorizontal from "@/componentes/Aula1/Exercicio1/MenuHorizontal"
import Exercicio2MenuVertical from "@/componentes/Aula1/Exercicio2/MenuVertical"
import TelaLogin from "@/componentes/Aula1/Exercicio3/TelaLogin"
import Exercicio3Login from "@/componentes/Aula1/Exercicio3/TelaLogin"
import BotaoCores from "@/componentes/Aula1/Exercicio4/BotaoCores"
import Exercicio4BotaoCores from "@/componentes/Aula1/Exercicio4/BotaoCores"
import Exerc4 from "@/componentes/Aula1/Exercicio4/BotaoCores"
import Card from "@/componentes/Aula2/Exercicio1/Card"
import Footer from "@/componentes/Aula2/Exercicio1/Footer"
import Header from "@/componentes/Aula2/Exercicio1/Header"
import AreaUsuarioChildren from "@/componentes/Aula2/Exercicio2/AreaUsuarioChildren"
import Perfil from "@/componentes/Aula2/Exercicio3/ListaUsuarios"
import Menu from "@/componentes/Aula2/Exercicio3/Menu"
import UseStateExerc1 from "@/componentes/Aula2/Exercicio4/UseStateExerc1"
import UseStateExerc2 from "@/componentes/Aula2/Exercicio4/UseStateExerc2"
import UseStateExerc3 from "@/componentes/Aula2/Exercicio4/UseStateExerc3"
import ConexaoAPIAsyncAwait from "@/componentes/Aula3/Apresentação API - Async e Await/TeoriaConexaoAPIAsyncAwait"
import ConexaoAPIType from "@/componentes/Aula3/Apresentação API - Async e Await/ConexaoAPIType"
import ListaLojaFake from "@/componentes/Aula3/Exercicio1/ListaLojaFake"
import MenuXXX from "@/componentes/Aula3/Exercicio1/MenuLoja"
import MenuLoja from "@/componentes/Aula3/Exercicio1/MenuLoja"

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

// export default async function Index() {
//     return (
//        <div>    
//             <div className="flex">
//                 <APIMenuExerc1/>
//                 <APIClientExerc1/>
//             </div>
//        </div>
//     )
// }

// export default function Index(){
//     return (
//         <div>
//             <Exercicio4BotaoCores 
//         </div>
//     )
// }

// ############################################### COMO CHAMAR OS COMPONENTES NO PAGE ###############################################

// *********************************************** Aula1 - Exercicio1 - MenuHorizontal ***********************************************
// export default function Index(){
//     return (
//         <div>
//             <Exercicio1MenuHorizontal/>
//         </div>
//     )
// }

// ************************************************ Aula1 - Exercicio2 - MenuVertical ************************************************
// export default function Index(){
//     return (
//         <div>
//             <Exercicio2MenuVertical/>
//         </div>
//     )
// }

// ************************************************** Aula1 - Exercicio3 - TelaLogin **************************************************
// export default function Index(){
//     return (
//         <div>
//             <TelaLogin/>
//         </div>
//     )
// }

// ************************************************** Aula1 - Exercicio4 - BotaoCores **************************************************
// export default function Index(){
//     return (
//         <div className="h-screen flex justify-center items-center">  
//             <div className="space-y-3">
//                 <BotaoCores
//                     color="azul"
//                     titulo="título que desejar"
//                     subtitulo="subtitulo que desejar"
//                 />
//                 <BotaoCores
//                     color="verde"
//                     titulo="título que desejar"
//                     subtitulo="subtitulo que desejar"
//                 />
//                 <BotaoCores
//                     color="vermelho"
//                     titulo="título que desejar"
//                     subtitulo="subtitulo que desejar"
//                 />
//             </div>
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio1 - Header,Card,Footer *********************************************
// export default function Index(){
//     return (
//         <div>
//             <Header/>
//             <Card/>
//             <Footer/>
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio2 - AreaUsuarioChildren *********************************************
// export default function Index(){
//     return (
//         <div>
//             <AreaUsuarioChildren
//                 titulo="Área do Usuário" // pode ser o título que desejar.
//                 children="Bem-vindo ao sistema! Essa parte veio do children."
//                 botao="Executar Ação"
//                 executar={() => alert("alert com sucesso!")}
//             />
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio3 - ListaUsuarios *********************************************
// export default function Index (){
//     return (
//     <div className="flex">
//         <div>
//             <Menu/>
//         </div>

//         <div className="space-y-10 ml-10 mt-5">
//             <Perfil
//                 nome="Alice"
//                 email="alice@email.com"
//                 detalhes="Ver detalhes"
//                 acessarPerfil={() => alert("Acessou o perfil 1.")}
//             />
//             <Perfil
//                 nome="Bruno"
//                 email="bruno@email.com"
//                 detalhes="Ver detalhes"
//                 acessarPerfil={() => alert("Acessou o perfil 2.")}
//             />
//             <Perfil
//                 nome="Carla"
//                 email="carla@email.com"
//                 detalhes="Ver detalhes"
//                 acessarPerfil={() => alert("Acessou o perfil 3.")}
//             />
//         </div>
//     </div>
//     )
// }


// ********************************************* Aula2 - Exercicio4 - UseStateExerc1 *********************************************
// export default function Index(){
//     return (
//         <div>
//             <UseStateExerc1/>
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio4 - UseStateExerc2 *********************************************
// export default function Index(){
//     return (
//         <div>
//             <UseStateExerc2/>
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio4 - UseStateExerc3 *********************************************
// export default function Index(){
//     return (
//         <div>
//             <UseStateExerc3/>
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio4 - UseStateExerc4 *********************************************
// export default function Index(){
//     return (
//         <div>
//             <UseStateExerc4/>
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio4 - UseStateExerc5 *********************************************
// export default function Index(){
//     return (
//         <div>
//             <UseStateExerc5/>
//         </div>
//     )
// }

// ********************************************* Aula2 - Exercicio4 - UseStateExerc6 *********************************************
// export default function Index(){
//     return (
//         <div>
//             <UseStateExerc6/>
//         </div>
//     )
// }

// ***************************************** Aula3 - Apresentação - ConexaoAPIAsyncAwait *****************************************
// export default function Index(){
//     return (
//         <div>
//             <TeoriaConexaoAPIAsyncAwait/>
//         </div>
//     )
// }
// Obs: Foi notado que quando há conexão com alguma API, é necessário atualizar a página para coletar os efeitos, mesmo com o Tailwind Intellisense.

// ******************************************* Aula3 - Apresentação - ConexaoAPIType *********************************************
// export default async function Index(){
//     return (
//         <div>

//             <h1 className="font-bold text-2xl p-5">Lista de usuários que estão vindo direto de outra API da JSON Place Holder: </h1>

//             <div>
//                 <ConexaoAPIType/>
//             </div>
//         </div>
//     )
// }

// ***************************************** Aula3 - Exercicio1 - ListaLojaFake *****************************************

export default function Index(){
    return (
        <div>
            <div className="flex">
                <div>
                    <MenuLoja/>
                </div>

                <div>
                    <ListaLojaFake/>
                </div>
            </div>
        </div>
    )
}

