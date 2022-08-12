
import { getConnection } from "../../db/connection";

export const getUsersData = async (req, res) => {
    const { id } = req.params
    const pool = await getConnection()
    let sql = `select users_name from dbo.users where id = ${id}`
    const result = await pool.request().query(sql)
    res.json(result.recordset)
}

export const register = async (req, res) => {
    const { nameUser, lastname, cellphoneNumber, gender, email, password } = req.body
    // const cellphone = parseInt(cellphoneNumber)

    console.log("el genero de manolito es : ", req.body)

    const pool = await getConnection()
    let sql = `exec dbo.Register '${nameUser}', '${lastname}', ${cellphoneNumber}, '${gender}', '${email}', '${password}';`

    const result = await pool.request().query(sql)
    res.json(result.recordset)
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const pool = await getConnection()      
    let sql = `exec dbo.Login '${email}', '${password}'`   
 
    const result = await pool.request().query(sql)
    res.json(result.recordset)
}









export const isLogged = async(req, res) => {

    const { id } = req.params
    let parsetId = parseInt(id)
    const pool = await getConnection()      
    let sql = `select is_logged from dbo.users where id = ${parsetId}`   
 
    const result = await pool.request().query(sql)
    res.json(result.recordset)
}

export const closeSession = async(req, res) => {
    const { id } = req.params
    let idParsed = parseInt(id)
    const pool = await getConnection()      
    let sql = `update dbo.users set is_logged = 0 where id = ${idParsed};`   
 
    const result = await pool.request().query(sql)
    res.json(result.recordset)
}

export const getCurrentId = async(req, res) => {
    const pool = await getConnection()      
    let sql = `select max(id) as idx from dbo.users;`   
 
    const result = await pool.request().query(sql)
    res.json(result.recordset)
}