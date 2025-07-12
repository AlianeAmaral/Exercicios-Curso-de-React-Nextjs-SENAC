
export default function MenuLateral() {
    return (
        <div>
            <div className="">
                <div className="bg-purple-200 h-screen space-y-8 w-50 p-10">
                    <div className="font-bold transition ease-in-out duration-500 mt-5 pb-4 cursor-pointer">Menu</div>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Inicio</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Usuários</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Sair</p>
                </div>
            </div>
        </div>
    );
}