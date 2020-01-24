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


exports.toFilter = function(req,res){
    debugger
   try{
       if(req.query.email!='' || req.query.name!='' || req.query.city!=''){
           var email = req.query.email;
           var name = req.query.name;
           var city = req.query.city;
           
           const find = User.find({ name: { $regex: name ,  $options : 'i' } , email: { $regex: email ,  $options : 'i' } , city: { $regex: city ,  $options : 'i' } },(err,doc)=>{
               if(!err){
                   res.status(200).json({status:200,data:doc});
               }
               else{
                   res.status(400).json('error in get:'+err);
               }
           });
       }
       else{
        const find = User.find((err,doc)=>{
            if(!err){
                res.status(200).json({status:200,data:doc});
            }
            else{
                res.status(400).json('error in get:'+err);
            }
        }); 
       }
   }
   catch(e){
   }
}