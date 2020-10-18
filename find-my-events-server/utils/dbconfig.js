const moongoose=require('mongoose')

moongoose.connect("mongodb://localhost:27017/eventsDB", { useUnifiedTopology: true } ).then((data) =>{
    console.log("Successfully Connected")

}).catch((err) =>{
    console.log(err)
    
})


module.exports=moongoose