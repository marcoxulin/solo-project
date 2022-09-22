const mongoose = require('mongoose');
const Item = require('../itemModel.js');

const itemController = {};

itemController.getItems = async (req, res, next) => {
    try{
        const allItems = await Item.find().sort({createdAt: -1});
       res.locals.allItems = allItems;
       return next();
    } catch (error){
        return next({log: 'error found in getItems '+ error, message: {err:'Error: ' + error}});
    }
}

itemController.getSingleItem = async  (req, res, next) => {
    const { id } = req.query;
    console.log(id);
    // if(!mongoose.Types.ObjectId.isValid()){
    //     return res.status(404).json({error: 'Item not found'});
    // }
    const item = await Item.findById(id);
    if(!item){
       return res.status(404).json({error: 'Item not found'});
       //maybe redirect to main page
    }
    res.locals.singleItem = item;
    return next();
}

itemController.addItem = async (req, res, next) => {
    const {title, category} = req.body;
    if(!title){
        return res.status(400).json({error: 'Please fill the title box'});
    }
    try{
        const item = await Item.create({title: title, category: category});
        res.locals.addItem = item;
        return next();
    } catch (error) {
        //maybe add more descrition error
        return next({log: 'error found in addItem: ' + error, message: {err: 'Error: '+ error}});
    }
}

itemController.updateItem = async (req, res, next) => {
    const {id} = req.params;
    console.log (id);
    // if(!mongoose.Types.ObjectId.isValid()){
    //     return res.status(404).json({error: 'Item not found'});
    // }
    const item = await Item.findOneAndUpdate({_id: id}, 
        {...req.body}
        );
    if(!item){
       return res.status(404).json({error: 'Item not found'});
       //maybe redirect to main page
    }
    res.locals.updateItem = item;
    return next();
}

itemController.delete = async (req, res, next) => {
    const { id } = req.params;
    console.log (id);
    // if(!mongoose.Types.ObjectId.isValid()){
    //     return res.status(404).json({error: 'Not valid id'});
    // }
    const item = await Item.findOneAndDelete({_id: id});
    if(!item){
        return res.status(404).json({error: 'Item not found'});
        //maybe redirect to main page
     }
    return next();
}

module.exports = itemController;