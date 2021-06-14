const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()
app.use(bodyParser.json())

const users = [
    {
        id: 1623665717778,
        fName: "Ivan",
        lName: "Ivanov",
        age: 36,
        profession: "WEB Developer"
    }
]

// get all records -> get('/users/')
// create new record -> post('/users/')
// edit record by id -> put('/users/id')
// show record by id -> get('/users/id')
// delete record by id -> delete('/users/id')

app.get('/users/', (req, res) => {
    res.json(users)
})

app.post('/users/', (req,res) => {
    const user = req.body
    const newUser = {
        id: Date.now(),
        fName: user.fullName.split(' ')[0],
        lName: user.fullName.split(' ')[1],
        age: user.age,
        profession: user.profession
    }
    users.push(newUser)
    res.json( users[users.length - 1] )
})

app.get('/users/:id', (req, res) => {
    const idx = users.findIndex(u => u.id === +req.params.id)
    if (idx === -1) {
        res.json({error: 'User not found'})
        return
    }
    res.json(users[idx])
})

app.put('/users/:id', (req,res)=>{
    const idx = users.findIndex(u => u.id === +req.params.id)
    if (idx === -1) {
        res.json({error: 'User not found'})
        return
    }
    users[idx] = {...users[idx], ...req.body}
    res.json(users[idx])
})

app.delete( '/users/:id', (req, res) => {
    const idx = users.findIndex(u => u.id === +req.params.id)
    if (idx === -1) {
        res.json({error: 'User not found'})
        return
    }
    const user = users.splice(idx,1)
    res.json(user)
})




app.listen(PORT, () => {
    console.log( `Starting in ${PORT}` )
})