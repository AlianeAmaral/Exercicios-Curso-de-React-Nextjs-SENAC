type props = {
    nome: string
    email: string
    detalhes: string
    acessarPerfil: () => void
}

export default function Perfil({ nome, email, detalhes, acessarPerfil }: props) {
    return (
        <div className="flex-1">
            <div className="bg-teal-500 text-sm p-5 rounded-sm w-70 m-3 shadow-2xl shadow-gray-400">
                <div>
                    <div className="font-bold text-2xl">{nome}</div>
                    <div className="text-sm pb-5">{email}</div>
                    <button className="bg-gray-700 text-white text-sm p-2 rounded-sm" onClick={acessarPerfil}>{detalhes}</button>
                </div>
            </div>
        </div >
    );
}
