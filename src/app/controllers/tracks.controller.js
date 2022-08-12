import { getConnection } from '../../db/connection';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const deezer = "https://api.deezer.com/"

export const getPublicTracks = async (req, res) => {
    fetch(`${deezer}search?q=artist:"eminem"`).then((response) => {
            return response.json()
        }).then((result) => {
            res.json(result)
        })
}

export const searchSong = async (req, res) => {
    const { search } = req.params

    fetch(`${deezer}search?q=track:"${search}"`).then((response) => {
        return response.json()
    }).then((result1) => {
        res.json(result1.data)
        // if (result1.data.length !== 0) {
            
        // }else{
            // console.log("entra aqui ?")
            // fetch(`${deezer}artist:"${search}"`).then((response) => {
            //     return response.json()
            // }).then((result2) => {
            //     res.json(result2)
            // })
        // }
    })
}

export const getArtistInfo = async(req, res) => {
    fetch(`${deezer}artist/13`).then((response) => {
        return response.json()
    }).then((result) => {
        res.json(result)
    })
}

export const getFavoriteTracks = async(req, res) => {
    const { id } = req.params
    const pool = await getConnection()
    let sql = `exec dbo.getFavoriteSongs ${parseInt(id)};`
    const result = await pool.request().query(sql)
    res.json(result.recordset)
}

export const addFavoriteTrack = async(req, res) => {
    console.log(req.body)
    const { title, album_cover, preview, artist_name, album_name, id_user } = req.body
    const pool = await getConnection()
    let sql = `exec dbo.addFavorite '${title}', '${album_cover}', '${preview}', '${artist_name}', '${album_name}',  ${id_user};`

    const result = await pool.request().query(sql)
    res.json(result.recordset)
}




// const rev = ReverseMd5({
//     lettersUpper: false,
//     lettersLower: true,
//     numbers: true,
//     special: false,
//     whitespace: false,
//     maxLen: 50
// })