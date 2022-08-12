
import { Router } from 'express'

const router = Router()

import { 
    getPublicTracks, 
    searchSong, 
    getArtistInfo, 
    getFavoriteTracks, 
    addFavoriteTrack} from '../controllers/tracks.controller'

router.get('/getPublicTracks', getPublicTracks)

router.get('/searchSong/:search', searchSong)

router.get('/getArtistInfo', getArtistInfo)

router.get('/getFavoriteTracks/:id', getFavoriteTracks)

router.post('/addFavoriteTrack', addFavoriteTrack)

export default router