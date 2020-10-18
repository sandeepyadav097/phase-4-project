const events=require('../model/events')

exports.findAllEvents = (req,res) => {
        
        events.find().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
      
        
}

exports.addEvent = (req,res) => {
        console.log(req.body)
  
        let event= new events(req.body)
    
        event.save(event,() => {
            console.log("Added")
            res.json(event)
        })
    
}


exports.search= (req, res) => {
    console.log(req.params.term, req.params.criteria)

    let query={}
    if( req.params.criteria=='name'){
        query.name={ "$regex": req.params.term, "$options": "i" }
    }
    else if(req.params.criteria=='category'){
        query.category={ "$regex": req.params.term, "$options": "i" }

    }
    else if(req.params.criteria=='location'){
        query.location={ "$regex": req.params.term, "$options": "i" }

    }
        else if(req.params.criteria=='start_date'){
        query.start_date= { $gte:req.params.term } 
        
    } else if(req.params.criteria=='end_date'){
        query.end_date= { $lt:req.params.term } 
        
    }
    console.log(query)
     events.find( query).then((data) => {
         console.log(data)
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
      
    
}

exports.update = (req,res) =>{
	console.log(req.body)
	events.update( { _id:req.body._id  }, req.body).then((result) =>{
		console.log(result, "updated")
		res.json(result);
	}).catch((err) => {
		console.log(err.message)
		res.status(500).send({
			message: err.message
		});
	})
}


exports.delete = (req, res) => {
	
	events.deleteOne({'_id':req.params.id}).
	then((result) => {
		res.json("Deleted");
	}).catch((error) =>{
		res.json(error)
	})
}