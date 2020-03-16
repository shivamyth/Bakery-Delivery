const Deliver = require('../../models/delivery');
const Order = require('../../models/orders');


module.exports.createdeliveryGuy = async function(req,res){
    let deliveryGuy = await Deliver.create({
        name: req.body.name,
        available:req.body.available
    });
    return res.json(200,{
        message:"New Delivery Guy is added",
        deliveryGuy:deliveryGuy
    });
}


module.exports.deliveryDone = async function(req,res){
    var id = req.params.id;
    let pendingOrder= await Order.findOneAndUpdate({status:0},{$set:{status:1}})
    let qry ={}
    let response ={
        message:`Your Food is Delivered ${pendingOrder?'New order assigned':''}`
    }
    if(pendingOrder){
        response.pendingOrder= pendingOrder
        qry= {$set:{user:pendingOrder.user,order:pendingOrder._id}}
    }else{
        qry ={$set:{available : true},$unset:{order:1,user:1}}

    }
    Deliver.findByIdAndUpdate(id,qry, function(err,delguy){
        Order.findByIdAndUpdate(delguy.order,{$set:{status:2}},function(err,order){
            console.log(order)
            if(order){
                response.message=`Your Food is Delivered ${pendingOrder?'New order assigned':''}`

            }else{
                response.message="Currently you don't have order"
            }
            
            return res.json(200,response)
        });
    });
    
    
};