const express=require('express')
const app=express()

const users=require("./routes/users") 
const events=require("./routes/events") 

const db=require('./utils/dbconfig')
const bodyParser=require('body-parser')
const port = 3001 || process.port.env
const cors=require('cors')

app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({  extended: false }));
app.use(events)
app.use(users)

app.get("/", (req,res) => {
    res.json("Hello")
})

app.listen(port, ()=>{
    console.log("Listening on port"+ port)
})