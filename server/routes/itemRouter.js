const express = require('express');

const { ModuleFilenameHelpers } = require('webpack');
const { default: mongoose } = require('mongoose');
const itemController = require('../controllers/itemController');
const router = express.Router();

//GET all items
router.get('/', itemController.getItems, (req, res) => {
    res.status(200).json(res.locals.allItems);
});

//GET single item
router.get('/:id', itemController.getSingleItem, (req, res) => {
    res.status(200).json(res.locals.singleItem);
});

//GET to add item to the list
router.get('/newitem', (req, res) => {
    res.json({message: 'GET add item to list'});
})

//POST to add item to the list
router.post('/', itemController.addItem, (req, res) => {
    res.status(200).json(res.locals.addItem);
})

//GET to edit (UPDATE) item to the list
router.get('/:id', (req, res) => {
    res.json({message: 'GET edit item of list'});
})

//UPDATE item 
router.patch('/:id', itemController.updateItem, async (req, res) => {
    res.status(200).json({message: 'Item info updated'});
})

//DELETE item 
router.delete('/:id', itemController.delete, (req, res) => {
     res.status(200).json({message: 'Item deleted'});
});

module.exports = router;