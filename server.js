const express = require('express')
const PORT = 3000
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res)=>{
    // res.send(`<h1>Hello, World!!! ${PORT}</h1>`)
    res.sendFile(__dirname + '/pages/index.html')
    // res.json(JSON.stringify({name: 'Ivan'}))
})

app.post('/say-hello.html', (req,res)=> {
    // res.json( req.body )
    // console.log( req.body )
    res.render(__dirname + '/pages/say-hello.html', req.body)
})

app.listen(PORT, () => {
    console.log( `Listening on port ${PORT}` )
})




// http://www.lalafa.com/