type props = {
    color: "azul" | "verde" | "vermelho"
    titulo: string
    subtitulo: string
    funcao?: () => void
}

export default function BotaoCores({ color, titulo, subtitulo, funcao }: props) {
    let corBase = "";
    switch (color) {
        case "azul":
            corBase = "bg-blue-500"
            break;
        case "verde":
            corBase = "bg-green-500"
            break;
        case "vermelho":
            corBase = "bg-red-500"
            break;
        default:
            break;
    }

    return (
        <div>
            <button onClick={funcao} className={`${corBase} p-3 rounded-lg cursor-pointer text-white`}> {titulo}</button>
        </div>
    );
}