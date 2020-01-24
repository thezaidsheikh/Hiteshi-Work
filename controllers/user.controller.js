const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.createUser = function(req,res){
    debugger
    
   try{
    console.log(req.body);
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.city = req.body.city;
    user.phone = req.body.phone;
    user.dateOfBirth = req.body.dateOfBirth;
    
    user.save((err,doc)=>{
        if(!err){
            res.status(200).json({status:200,msg:"Inserted successfully"})
        }
        else{
            res.status(400).json('Error in insertion :'+err)
        }
    })
   }
   catch(e){
    res.send(e)
   }
 
}

exports.allUser = function(req,res){
    try{

    const find = User.find((err,doc)=>{
            if(!err){
                res.status(200).json({status:200,data:doc});
            }
            else{
                res.status(400).json('error in get:'+err);
            }
        });   
    }
    catch(e){
        res.send(e)
    }
   

    
}

exports.getByCity = function(req,res){
    debugger
    try{
        var city = req.query.city;
        const find = User.find({"city":city},(err,doc)=>{
            if(!err){
                res.status(200).json({status:200,data:doc});
            }
            else{
                res.status(400).json('error in get:'+err);
            }
        });
    }
    catch(e){

    }
  
   
}

exports.getByName = function(req,res){
    debugger
    try{
        if(req.query.name!=null){
            var name = req.query.name
            
            const find = User.find({ name: { $regex: name , $options : 'i' } },(err,doc)=>{
                if(!err){
                    res.status(200).json({status:200,data:doc});
                }
                else{
                    res.status(400).json('error in get:'+err);
                }
            });
        }
        else{
            return res.send('not be null');
        }
    }
    catch(e){
    }
 }

 exports.getByEmail = function(req,res){
     debugger
    try{
        if(req.query.email!=null){
            var email = req.query.email
            
            const find = User.find({ email: { $regex: email ,  $options : 'i' } },(err,doc)=>{
                if(!err){
                    res.status(200).json({status:200,data:doc});
                }
                else{
                    res.status(400).json('error in get:'+err);
                }
            });
        }
        else{
            return res.send('not be null');
        }
    }
    catch(e){
    }
 }