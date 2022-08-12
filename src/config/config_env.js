import {config} from 'dotenv'
config()

export default {
    port: process.env.PORT || 3000,



    
    USER: String(process.env.USER),
    PASSWORD: String(process.env.PASSWORD),
    SERVER: String(process.env.SERVER),
    DATABASE: String(process.env.DATABASE)
}