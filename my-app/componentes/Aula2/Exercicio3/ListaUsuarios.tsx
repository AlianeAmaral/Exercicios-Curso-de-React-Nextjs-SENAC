type props = {
    nome: string
    email: string
    detalhes: string
    acessarPerfil?: () => void
}

export default function Perfil({ nome, email, detalhes, acessarPerfil }: props) {
    return (
        <div className="flex-1">
            <div className="bg-blue-950 text-sm p-5 rounded-sm w-100 m-3 hover:shadow-2xl hover:shadow-blue-200">
                <div>
                    <div className="font-bold text-2xl">{nome}</div>
                    <div className="text-sm pb-5">{email}</div>
                    <button className="bg-pink-500 text-white text-sm rounded-sm cursor-pointer w-30 h-7 transition ease-in-out duration-800 hover:scale-103" onClick={acessarPerfil}>{detalhes}</button>
                </div>
            </div>
        </div >
    );
}
