export default function Loading(){

    // esse código não é utilizado, é só para testar a demora, o atraso na página.
    // como o loading é um arquivo especial, deve estar na pasta app.

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
        </div>
    );
}