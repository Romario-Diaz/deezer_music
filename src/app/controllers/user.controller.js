
import { getConnection } from "../../db/connection";

export const getUsersData = async (req, res) => {
    const pool = await getConnection()
    let sql = `select * from users`
    const result = await pool.request().query(sql)
    res.json(result.recordset)
}

export const register = async (req, res) => {

}

export const login = async (req, res) => {
    
}