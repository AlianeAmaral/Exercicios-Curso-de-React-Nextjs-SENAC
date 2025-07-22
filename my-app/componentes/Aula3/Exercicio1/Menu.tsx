export default function Menu() {
    return (
        <div>
            <div className="">
                <div className=" bg-red-200 text-white space-y-8 pl-7 pt-5 flex min-h-screen">
                    <div className="font-bold transition ease-in-out duration-500 mt-5 pb-2 cursor-pointer">Menu</div>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Inicio</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Usuários</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Sair</p>
                </div>
            </div>
        </div>
    );
}