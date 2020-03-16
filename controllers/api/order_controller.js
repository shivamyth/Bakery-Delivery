const Order = require('../../models/orders');
const Deliver = require('../../models/delivery');
const startDeliver = require('./deliver_controller');

module.exports.create = async function(req, res){
  
  try{

    let deliveryBoy = await Deliver.findOne({available:true})
    
    let order = await Order.create({
      address: req.body.address,
      items:req.body.items,
      totalCost: req.body.totalCost,
      user: req.body.user,
      status: deliveryBoy?1:0
  });
  order.save();
      if(deliveryBoy){
       await  Deliver.findByIdAndUpdate(deliveryBoy._id,{$set:{user:req.body.user,order:order._id,available:false}})
       }
    
    let response ={
      message:deliveryBoy?"Your Order is Accepted and Out For Delivery":"No Delivery Guys are free",
      
  }
  if(deliveryBoy){
    response.deliveryBoy= deliveryBoy
    response.order = order
  }
  
       return res.json(deliveryBoy?200:404,response);
        

  }catch(err){
    console.log(err)
      return res.json(500,{
        message:"Internal Server Error"
      });
  }

};