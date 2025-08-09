"use client"

import {useRouter} from "next/navigation"
import {useState} from "react"

export default function Formulario(){
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function Submit(evento: React.FormEvent<HTMLFormElement>){ {/*isso é para evitar que aconteça o padrão, que é o formulário ficar resetando */}
        evento.preventDefault()

        const formulario = {
            nome: nome,
            email: email
        }

        try {
            const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(formulario)
        })} 
        
        catch (error) {
            alert("Caiu no catch.")
        }

    }
    
    return (
        <div className="flex justify-center items-center bg-gray-200 m-5 p-10 rounded-sm h-75">
            <form onSubmit={Submit} className="space-y-5"> {/* quando clicar aqui, vai entrar a função submit */}
                <div>
                    <input type="text" placeholder="Digite seu nome" name="nome" className="bg-white p-2 rounded-sm"></input>
                </div>

                <div>
                    <input type="email" placeholder="Digite seu email" name="email" className="bg-white p-2 rounded-sm"></input>
                </div>

                <div className="flex justify-center">
                    <div>
                        <button type="submit" className="bg-teal-400 p-2 rounded-sm px-6 cursor-pointer">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}