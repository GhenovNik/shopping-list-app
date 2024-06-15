const express = require('express');
const router = express.Router();
const ShoppingList = require('../models/ShoppingList');

// Создание нового списка покупок
router.post('/', async (req, res) => {
    const { title } = req.body;
    const newList = new ShoppingList({ title });
    try {
        const list = await newList.save();
        res.json(list);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Получение всех списков покупок
router.get('/', async (req, res) => {
    try {
        const lists = await ShoppingList.find().populate('items');
        res.json(lists);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Удаление списка покупок
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await ShoppingList.findByIdAndRemove(id);
        res.json({ msg: 'Shopping list removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
