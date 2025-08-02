import db from '@/app/api/database';

export async function GET(request: Request){

    const [rows] = await db.query("SELECT * FROM users")

    // const users = [
    //     {id:1, name:"Rafael"},
    //     {id:2, name:"Vinicius"}
    // ]

    return new Response(JSON.stringify(rows), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}