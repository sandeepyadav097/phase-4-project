const express= require('express')
const router=express.Router()
const events=require('../model/events')
const eventsController=require('../controllers/eventsController')
const authenticate=require("../middlewares/authenticate")

router.get("/events",authenticate,  eventsController.findAllEvents)

router.post("/events",authenticate,  eventsController.addEvent)

router.put("/events",authenticate,  eventsController.update)

router.delete("/events/:id",authenticate,  eventsController.delete)

router.get("/:criteria/search/:term",authenticate,  eventsController.search)


router.get("/init", (req, res) =>{
    let event1= new events({
        name:'10km Marathon',
        description:'Marathon Sponsred By Vodafone',
        location:'Pune',
        img_url:'https://static01.nyt.com/images/2017/10/17/science/11physed-marathon-photo/11physed-marathon-photo-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        category:'Sports',
        start_date:'2020-10-20',
        end_date:'2020-10-27',
    })


let event2= new events({
        name:'Alan walker India Tour',
        description:'India Tour',
        location:'Delhi',
    img_url:'https://www.tripsavvy.com/thmb/vjZQ3Gzmjh0t7KRdCi3dwQYXFFE=/4101x2734/filters:no_upscale():max_bytes(150000):strip_icc()/loi-krathong-fall-in-thailand-57ba337b5f9b58cdfd1c227d.jpg',
        category:'Music',
        start_date:'2020-10-25',
        end_date:'2020-10-30',
    })


    event1.save(event1,() => {
        console.log("Added")
       // res.json(event1)
    })

    event2.save(event2,() => {
        console.log("Added")
        //res.json(event2)
    })
    res.json("Data initialised")

    
})

module.exports=router