import db from '@/app/api/database';

export async function GET(){ {/* estamos usando get aqui só para devolver o texto e mostrar, exportando uma função assíncrona do tipo get, estamos usando o async para esperar a consulta primeiro do banco para poder continuar*/}

//ESSE AQUI: foi escrito pelo código:

//     const usuarios = [
//         {id:1, name:"ally"},
//         {id:2, name:"yoshi"}
//     ]

//     return new Response(JSON.stringify(usuarios))
// }


// ESSE AQUI: os dados foram exportados da base de dados local:

    try {
        const [rows] = await db.query<any>("SELECT * FROM usuarios");

        //se a lista retornar vazia ainda vai dar true, para garantir mesmo colocamos o length, para funcionar temos que adicionar o <any> ali em cima, ele reclama porque não sabe o que vem, o any vai dizer que pode vir qualquer coisa.
        if(rows.length > 0){
            return new Response(JSON.stringify(rows), {
                status: 200,
                headers: {'Content-Type':'application/json'}
        })}

        else{
            return new Response(JSON.stringify({erro: "Usuário não encontrado."}))
        }

    }
    
    catch (error) {
        return new Response(JSON.stringify({erro: error}), {
        status: 500
        });

    }
}