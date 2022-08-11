
import { Router } from 'express'

const router = Router()

import { getPublicTracks, searchSong } from '../controllers/tracks.controller'

router.get('/getPublicTracks', getPublicTracks)

router.get('/searchSong/:search', searchSong)

export default router