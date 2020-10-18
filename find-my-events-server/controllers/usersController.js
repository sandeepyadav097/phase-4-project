const users=require('../model/users')
const jwtAuth=require('../utils/jwtauth')
const bcrypt=require('bcrypt')

exports.addUsers = async (req,res) => {
        
    console.log(req.body)
   
   const passsalt=await bcrypt.genSalt(10);

    const hashedPassword=await bcrypt.hash(req.body.password, passsalt)
    
    let newUser={username:req.body.username, password:hashedPassword, type:'admin'}
    let user=new users(newUser)
    
    user.save(user).then((data)=>{
        console.log(data)
        res.json(data)}).catch((err)=>{
            res.json(err)
        })

      
        
}



exports.login = async (req,res) => {
        

    
    let user= await users.findOne({username:req.body.username})
    console.log(user)
   
    if(user){
       if (await bcrypt.compare(req.body.password, user.password)){
    

            var payload={_id:user._id, username:user.username, type:user.type}

            var token=jwtAuth.sign(payload)
            console.log("#############################")
            
            payload.token=token
            console.log(token)
            console.log("#############################")
    
            res.send({payload})
        }
        else{
            console.log("Wrong Password")
            res.sendStatus(403)
        }
    }
    else{
        console.log("not found")
    res.sendStatus(404)

    }


    

      
        
}
