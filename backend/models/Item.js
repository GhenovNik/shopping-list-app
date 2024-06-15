const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    isPurchased: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Item', ItemSchema);
