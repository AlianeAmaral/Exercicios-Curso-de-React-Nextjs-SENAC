export default function MenuHorizontal (){
    return (
        <div>
            <header className="bg-black text-white flex justify-start space-x-15 p-7 font-serif">
                <div className="hover:text-gray-600 transition ease-in-out duration-500 hover:scale-104 cursor-pointer">Início</div>
                <div className="hover:text-gray-600 transition ease-in-out duration-500 hover:scale-104 cursor-pointer">Sobre</div>
                <div className="hover:text-gray-600 transition ease-in-out duration-500 hover:scale-104 cursor-pointer">Contato</div>
            </header>
        </div>
    );
}