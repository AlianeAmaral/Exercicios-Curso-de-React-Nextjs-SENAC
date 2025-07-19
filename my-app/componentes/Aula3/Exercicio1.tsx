"use client"

import { useState } from "react"

export default function Exercicio1(){

    const [contador, setContador] = useState(0)

    function incrementador(){
        setContador(contador + 1)
    }

    function decrementador(){
        if (contador <= 0) {
            setContador(0)
        }  
        else {
            setContador(contador - 1)
        }
    }

    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                    <button className="bg-green-700 text-white cursor-pointer rounded-sm py-4 px-8" onClick={incrementador}> Adicionar</button>
                    <button className="bg-gray-300 text-black border-2 rounded-sm m-10 px-5 py-3"> {contador}</button> 
                    <button className="bg-red-700 text-white cursor-pointer rounded-sm py-4 px-9" onClick={decrementador}> Subtrair</button>    
            </div>
        </div>
    )
}