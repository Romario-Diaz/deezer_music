
import sql from "mssql"
import config_env from "../config/config_env"

const dbCredentials = {
    user: config_env.USER, 
    password: config_env.PASSWORD,
    server: config_env.SERVER, 
    database: config_env.DATABASE,
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