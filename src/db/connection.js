
import sql from "mssql"

const dbCredentials = {
    user: "sa", 
    password: "@Latinvest20",
    server: "DESKTOP-N41Q741", 
    database: "foxbel_music",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbCredentials)
        return pool 
    }catch(error) {
        console.log(error)
    }
}

getConnection()