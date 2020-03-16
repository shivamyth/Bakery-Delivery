const mongoose = require('mongoose');


const deliverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
    },
    order: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

const Deliver = mongoose.model('Deliver', deliverSchema);
module.exports = Deliver;