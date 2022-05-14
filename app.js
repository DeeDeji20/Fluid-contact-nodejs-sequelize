const express = require("express");

const { sequelize, User } = require('./models')

const app = express()
app.use(express.json())

app.post('/user', async(req, res) =>{
    const {username, password, email} = req.body

    try{
        const user = await User.create({username, password, email}) 
        
        return res.json(user)
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})

//Get all users
app.get('/users', async(req, res) =>{
    try{
        const users = await User.findAll()

        return res.json(users)
    }catch(err){
        console.log(err);
        return res.status(500).json({error: "Something went wrong"})
    }
})

app.listen({port:3000}, async ()=>{
    console.log('Server upon http://localhost3000');
    await sequelize.authenticate()
    console.log('Database connected!');
})