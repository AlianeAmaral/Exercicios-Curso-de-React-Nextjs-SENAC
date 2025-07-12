export default function MenuHorizontal (){
    return (
        <div>
            <div className="bg-gradient-to-b black to to-gray-920 text-white flex justify-end space-x-15 p-7 font-serif">
                <div className="hover:text-red-800 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">Inicial</div>
                <div className="hover:text-red-800 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">Sobre</div>
                <div className="hover:text-red-800 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">Contato</div>
            </div>

            <div className="list-image">
                <div
                    className="bg-no-repeat bg-bottom bg-center bg-cover text-white text-center py-20 px-4"
                    style={{ backgroundImage: "url('/background-1.jpg')" }}
                />
                    <p className="text-center text-4xl pt-8 pb-3 font-balgruf">Guia de Receitas de Skyrim</p>
                    <p className="text-center text-2xl pb-7 font-dovahkiin">Manual do Dragonborn</p>
                    
                <div className="max-w-4xl mx-auto">
                    <p className="p-4 rounded"></p>
                </div>
            </div>
        </div>
    );
}