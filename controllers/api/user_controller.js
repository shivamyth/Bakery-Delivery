const User = require('../../models/users');

module.exports.create = function(req,res){
    User.findOne({phone:req.body.phone}, function(err,user){
        if(err){
            console.log('********', err);
                    return res.json(500, {
                        message: "Finding mein error hai"
                    })
        }
        if(!user){
            User.create(req.body, function(err,user){
                return res.json(200, {
                    message: "Registered",
                    body:user
                });
            });
        }else{
            return res.json(200, {
                message: "Registered",
                body:user
            });
        }
    });
}
