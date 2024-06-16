const Item = require('../models/itemModel');

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find({ userId: req.user.id });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addItem = async (req, res) => {
    const { name, emoji, quantity } = req.body;
    try {
        const newItem = new Item({
            userId: req.user.id,
            name,
            emoji,
            quantity,
        });
        const item = await newItem.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateItem = async (req, res) => {
    const { name, emoji, quantity } = req.body;
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        if (item.userId.toString() !== req.user.id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        item.name = name || item.name;
        item.emoji = emoji || item.emoji;
        item.quantity = quantity || item.quantity;
        await item.save();
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        if (item.userId.toString() !== req.user.id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        await item.remove();
        res.json({ message: 'Item removed' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
