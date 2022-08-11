
import { urlencoded, json } from 'express'
import express from 'express'
import path from 'path'
import cors from 'cors'
import config from '../config/config_env'

import userRoutes from './routes/user.route' 
import trackRoutes from './routes/tracks.route'

// inizialization
const port = config.port || 8000
const app = express()


// settings
app.set('port', port)

// middlewares
app.use(cors())
app.use(urlencoded({extended : true}))
app.use(json())

// routes
app.use(userRoutes)
app.use(trackRoutes)

// static files
app.use(express.static(path.join(__dirname, '../public')))

export default app