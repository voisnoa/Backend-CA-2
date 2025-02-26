const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.configDotenv()

app.use(express.json)

const user = [
    { id : 1, email : "abc@gmail.com" , password : "john"},
    { id : 2, email : "alice@gmail.com" , password : "alice"},
    { id : 3, email : "boris@gmail.com" , password : "boris"}
];

app.put('/', async (req,res) =>{
    const {id , email , password} = req.body;
    if (!email){
        return res.status(404).json({error: "email can not be empty." })
    }
})  

app.delete('/', (req,res)=>{
    const  {email} = req.body 
    if(!email){
        return res.status(404).json({error: "email can not be empty"})
    }
})

app.listen(process.env.PORT, () =>console.log(`the server is running on https://localhost:${process.env.PORT}`))

