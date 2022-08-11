import app from './src/app/app'

app.listen(app.get('port'), (err) => {
    if(err) {
        console.log(`there was an error launching the server : ${err}`)
    }else {
        console.log(`server running on port : ${app.get('port')}`)
    }
})