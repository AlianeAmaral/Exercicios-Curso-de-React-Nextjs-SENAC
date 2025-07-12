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

function acao() {
  <div>olá</div>
}

export default function Index() {
  return (
    <div>
      <div className="flex justify-start">
        <div>
          <MenuLateral />
        </div>

        <div className="m-10">
          <Perfil
            nome="Alice"
            email="alice@email.com"
            detalhes="Ver Detalhes"
            acessarPerfil={acao}

          ></Perfil>

          <Perfil
            nome="Alice"
            email="alice@email.com"
            detalhes="Ver Detalhes"
            acessarPerfil={acao}

          ></Perfil>

          <Perfil
            nome="Alice"
            email="alice@email.com"
            detalhes="Ver Detalhes"
            acessarPerfil={acao}

          ></Perfil>
        </div>
      </div >
    </div>
  )
}