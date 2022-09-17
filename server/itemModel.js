const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  // picture: {},
  title: {type: String, required: true, unique: true},
  // description: {type: String},
  category: {type: String},
  // createdAt: { type: Date, default: Date.now },
},{ timestamps: true});



module.exports = mongoose.model('Item', itemSchema);
