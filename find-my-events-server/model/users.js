const moongoose=require('mongoose')

const UsersSchema=moongoose.Schema({
    username:String,
    password:String,
    type:String
})

module.exports = moongoose.model('Users',UsersSchema)