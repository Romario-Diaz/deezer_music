
import { Router } from 'express'

const router = Router()

import { getUsersData, register, login } from '../controllers/user.controller'

router.get('/getUsersData', getUsersData)

router.post('/register', register)

router.post('/login', login)

export default router