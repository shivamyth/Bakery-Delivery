const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    items: {
        type: 'Array',
        require: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    status: {
        type:Number,   //0 for pending 1 for assigned 2 for delivered
        required:true
    }
}, {
    timestamps: true
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;