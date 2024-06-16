const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    emoji: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

module.exports = mongoose.model('Item', itemSchema);
