const { default: mongoose } = require('mongoose');
const Item = require('../itemModel.js');

const itemController = {};

itemController.getItems = async (req, res, next) => {
    try{
        const allItems = await Item.find().sort({createdAt: -1});
       res.locals.allItems = allItems;
       return next();
    } catch (error){
        return next({log: 'error found in getItems', message: {err:'error in itemController.getItems'}});
    }
}

itemController.getSingleItem = async  (req, res, next) => {
    const { id } = req.query;
    if(!mongoose.Types.ObjectId.isValid()){
        return res.status(404).json({error: 'Item not found'});
    }
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
    try{
        const item = await Item.create({title, category});
        res.locals.addItem = item;
        return next();
    } catch (error) {
        //maybe add more descrition error
        return next({log: 'error found in getItems', message: {err:'error in itemController.getItems'}});
    }
}

//not working
itemController.updateItem = async (req, res, next) => {
    const {id} = req.params;
    console.log (id);
    if(!mongoose.Types.ObjectId.isValid()){
        return res.status(404).json({error: 'Item not found'});
    }
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
    const {id} = req.query;
    if(!mongoose.Types.ObjectId.isValid()){
        return res.status(404).json({error: 'Item not found'});
    }
    const item = await Item.findByIdAndDelete({_id: id});
    if(!item){
        return res.status(404).json({error: 'Item not found'});
        //maybe redirect to main page
     }
    return next();
}

module.exports = itemController;