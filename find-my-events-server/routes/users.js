const express= require('express')
const router=express.Router()
const users=require('../model/users')
const events=require('../model/users')
const bcrypt=require('bcrypt')
const usersController=require('../controllers/usersController')


router.post('/register', usersController.addUsers)

router.post('/login', usersController.login)

router.get("/init/admin",async (req, res) =>{

const password='admin'
     const passsalt=await bcrypt.genSalt(10);

    const hashedPassword=await bcrypt.hash(password, passsalt)
    
    let admin= new users({
        username:'admin',
        password:hashedPassword,
        type:'admin'
    })

    admin.save(admin,() => {
        console.log("Added")
       res.json(admin)
    })

    



    
})
module.exports=router