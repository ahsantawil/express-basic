const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
    const Buah = [
        {name:'Jeruk'},
        {name:'Apel'},
        {name:'Anggur'}
    ]
    res.render('index', {
        name    : 'Ahsan Tawil',
        alamat  : 'Tangerang',
        Umur    : 25,
        Buah : Buah
    })
})
app.get('/:name', (req, res)=> res.send(`Nama Saya: ${req.params.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))