const express = require('express')
const app = express()
const bcrypt = require('bcrypt')


const users = [
    {
        "id":"1",
        "accountName":"Player1",
        "accountImageUrl":"assets/player1.png",
        "accountLevel":1,
        "accountExperience":0
    }
]

app.get('/users',(req,res)=>{
    res.json(users)
})


app.post('/users',(req,res)=>{
    try{
        const salt = bcrypt.genSalt()
        const hashedPassword = bcrypt.hashSync(req.body.accountImageUrl, salt)
        console.log(salt)
        console.log(hashedPassword)

        const user = {name: req.body.accountName, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    }catch (e){
        res.status(500).send()
    }
})

app.listen(3000,()=>{
    console.log('Listening to port 3000');
})