
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const deezer = "https://api.deezer.com/search?q="

export const getPublicTracks = async (req, res) => {
    fetch(`${deezer}artist:"eminem"`).then((response) => {
            return response.json()
        }).then((result) => {
            res.json(result)
        })
}

export const searchSong = async (req, res) => {
    const { search } = req.params

    fetch(`${deezer}track:"${search}"`).then((response) => {
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






// const rev = ReverseMd5({
//     lettersUpper: false,
//     lettersLower: true,
//     numbers: true,
//     special: false,
//     whitespace: false,
//     maxLen: 50
// })