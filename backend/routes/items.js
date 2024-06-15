const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Добавление нового товара
router.post('/', async (req, res) => {
    const { name, quantity, icon } = req.body;
    const newItem = new Item({ name, quantity, icon });
    try {
        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Обновление товара
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, quantity, isPurchased } = req.body;
    try {
        let item = await Item.findById(id);
        if (!item) return res.status(404).json({ msg: 'Item not found' });

        item.name = name || item.name;
        item.quantity = quantity || item.quantity;
        item.isPurchased = isPurchased !== undefined ? isPurchased : item.isPurchased;

        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Удаление товара
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Item.findByIdAndRemove(id);
        res.json({ msg: 'Item removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
