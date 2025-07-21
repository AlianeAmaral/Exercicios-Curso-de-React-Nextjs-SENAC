export default function Card() {
    return (
        <div>
            <div className="text-purple grid grid-cols-3 justify-items-center p-10 h-130 ">

                <div className="bg-white m-3 p-3 w-100 h-100 rounded-2xl transition ease-in-out duration-800 hover:scale-103 hover:shadow-2xl hover:shadow-blue-300">
                    <p className="font-bold">Card 1</p>
                    <p>Este é o conteúdo do primeiro cartão.</p>
                </div>

                <div className="bg-white m-3 p-3 w-100 h-100 rounded-2xl transition ease-in-out duration-800 hover:scale-103 hover:shadow-2xl hover:shadow-blue-300">
                    <p className="font-bold">Card 2</p>
                    <p>Este é o conteúdo do segundo cartão.</p>
                </div>

                <div className="bg-white m-3 p-3 w-100 h-100 rounded-2xl transition ease-in-out duration-800 hover:scale-103 hover:shadow-2xl hover:shadow-blue-300">
                    <p className="font-bold">Card 3</p>
                    <p>Este é o conteúdo do terceiro cartão.</p>
                </div>

            </div>
        </div>
    );
}