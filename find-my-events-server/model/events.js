
const mongoose = require('mongoose')

const eventsSchema = mongoose.Schema({
	name: String,
    location: String,
    description: String,
    category:String,
    start_date:Date,
    end_date:Date,
    img_url:{type:String, default:'https://images.squarespace-cdn.com/content/5a6a3accace864ab451088b7/1531509323885-OSE9DXRRQWJS55U3ZKUP/Electrobeach-legrand-festival-musique-electronique-France-Barcares-Pyrenees-Orientales_0_1398_933.jpg?content-type=image%2Fjpeg'}

});

module.exports = mongoose.model('Events', eventsSchema);