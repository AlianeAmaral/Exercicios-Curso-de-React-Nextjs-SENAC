"use client"

import { usuariosProps } from "@/app/tipos"
import {useRouter} from "next/navigation"
import {useState} from "react"

export default function Formulario({id, nome="", email=""}: usuariosProps) {

    const [usuarioId, setUsuarioId] = useState(id)
    const [usuarioNome, setUsuarioNome] = useState(nome)
    const [usuarioEmail, setUsuarioEmail] = useState(email)
    // const [senha, setUsuarioSenha] = useState("") - temos que mudar sempre aqui do cadastro, não os parâmetros do editar.
    const rota = useRouter ();

    async function Submit(evento: React.FormEvent<HTMLFormElement>){ {/*isso é para evitar que aconteça o padrão, que é o formulário ficar resetando */}
        evento.preventDefault()

        const formulario = {
            id: usuarioId,
            nome: usuarioNome,
            email: usuarioEmail
        }

        try {
            const metodo = usuarioId ? "PUT" : "POST"

            const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`, {
            method: metodo,
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(formulario)
        })

            const usuario : usuariosProps[] = await resposta.json()

            if (usuario) {
                rota.push("/");
                alert("Deu certo")
            }
            else {
                alert("Deu errado")
            }

        } 
        
        catch (error) {
            return new Response (JSON.stringify({error: error}))
        }

    }

    async function Deletar(){
        await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: usuarioId})
        })
    }
    
    return (
        <div className="flex">
        <div className="flex bg-gray-200 m-5 p-10 rounded-sm h-75">
            <form onSubmit={Submit} className="space-y-5"> {/* quando clicar aqui, vai entrar a função submit */}
                <div>
                    <input value={usuarioNome} onChange={(e) => setUsuarioNome(e.target.value)} type="text" placeholder="Digite seu nome" name="nome" className="bg-white p-2 rounded-sm"></input>
                </div>

                <div>
                    <input value={usuarioEmail} onChange={(e) => setUsuarioEmail(e.target.value)} type="email" placeholder="Digite seu email" name="email" className="bg-white p-2 rounded-sm"></input>
                </div>

                <div className="flex justify-center space-x-3">
                    <div>
                        <button type="submit" className="bg-teal-400 p-2 rounded-sm px-6 cursor-pointer">Salvar</button>
                    </div>
                    <div>
                        {usuarioId && <button className="bg-red-400 p-2 rounded-sm px-6 cursor-pointer" onClick={Deletar}>Excluir</button>}
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}