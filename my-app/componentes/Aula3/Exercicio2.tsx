"use client"

import { useState } from "react"

export default function Exercicio2(){

    let senha = "w%Senha05765" //o let pode ter um valor atribuido, o const joga um valor atraves do useState, só com ele que consegue atribuir valor para uma variável constante.
    const [texto, setTexto] = useState(true) //como que vai começar o useState? zero ou outros valores... o useState permite que a gente faça alternações. Aqui diz que a variável texto já começa como true que está no useState.

        function alternador() {
            setTexto(!texto)
        }

    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                <p className="text-gray-500 border-gray-800 border-2 rounded-sm h-12 w-80 m-3 flex justify-center items-center"> {texto ? senha : "•".repeat(senha.length)}</p>
                <button className="bg-purple-500 text-white rounded-sm px-5 py-3 cursor-pointer" onClick={alternador}> Mostrar</button>
            </div>
        </div>
    )
}

// ao invés de usar o "senha.length", poderia também deixar como null, que deixa vazio assim.