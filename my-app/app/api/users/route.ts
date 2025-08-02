import db from '@/app/api/database';

export async function GET(request: Request){

    try {
        const [rows] = await db.query("SELECT * FROM users")
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        })
    
    }

    catch (error) {
        return new Response(JSON.stringify({erro: error}),
            {status: 500}
        )
    }

    // const users = [
    //     {id:1, name:"Rafael"},
    //     {id:2, name:"Vinicius"}
    // ]
}