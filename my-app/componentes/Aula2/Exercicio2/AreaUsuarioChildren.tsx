type props = {
    titulo: string
    children: React.ReactNode
    botao: string
    executar: () => void
}

export default function AreaUsuarioChildren({ titulo, children, botao, executar }: props) {
    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                <div className="bg-gray-100 text-black w-120 rounded-sm text-center">

                    <p className="font-bold m-5">{titulo}</p>

                    <div className="text-sm pb-5">{children}</div>

                    <div className="flex justify-center m-3">
                        <button className="bg-pink-400 text-white rounded-sm cursor-pointer w-50 h-10 transition ease-in-out duration-800 hover:scale-103" onClick={executar}> {botao}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}