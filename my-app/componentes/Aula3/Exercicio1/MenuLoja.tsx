export default function MenuLoja() {
    return (
        <div>
            <div>
                <div className=" bg-gray-800 text-white space-y-8 pl-10 pt-5 h-screen w-55">
                    <div className="font-bold transition ease-in-out duration-500 mt-5 pb-2 cursor-pointer">Menu</div>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Inicio</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Produtos</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Categorias</p>
                    <p className="hover:text-teal-500 hover:scale-3d transition ease-in-out duration-500 cursor-pointer">Contato</p>
                </div>
            </div>
        </div>
    );
}