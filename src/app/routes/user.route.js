
import { Router } from 'express'

const router = Router()

import { getUsersData, isLogged, closeSession, getCurrentId, register, login } from '../controllers/user.controller'

router.get('/getUsersData/:id', getUsersData)

router.get('/isLogged/:id', isLogged)

router.get('/closeSession/:id', closeSession)

router.get('/getCurrentId', getCurrentId)

router.post('/register', register)

router.post('/login', login)

export default router