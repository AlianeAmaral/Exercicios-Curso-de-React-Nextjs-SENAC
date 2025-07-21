
export default function Menu() {
    return (
        <div>
            <div className="">
                <div className="bg-blue-950 text-white h-screen space-y-8 w-50 pl-7 pt-5">
                    <div className="font-bold transition ease-in-out duration-500 mt-5 pb-2 cursor-pointer">Menu</div>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Inicio</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Usuários</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Sair</p>
                </div>
            </div>
        </div>
    );
}