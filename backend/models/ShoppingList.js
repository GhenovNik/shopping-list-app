const mongoose = require('mongoose');

const ShoppingListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ShoppingList', ShoppingListSchema);
