"use client"

import AreaUsuario from "@/componentes/AreaUsuario";
import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";
import MenuLateral from "@/componentes/MenuLateral";
import Perfil from "@/componentes/Perfil";

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

