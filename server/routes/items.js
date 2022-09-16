const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');

const router = express.Router();

//GET all item list
router.get('/', (req, res) => {
    res.json({message: 'GET all items'});
})

//GET to add item to the list
router.get('/newitem', (req, res) => {
    res.json({message: 'GET add item to list'});
})

//POST to add item to the list
router.post('/', (req, res) => {
    res.json({message: 'POST add item to list'});
})

//GET to edit (UPDATE) item to the list
router.get('/:id', (req, res) => {
    res.json({message: 'GET edit item of list'});
})

//UPDATE item 
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE item of list'});
})

//DELETE item 
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE item'});
})

module.exports = router;