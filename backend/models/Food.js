const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    categoryName: String,
    name: String,
    img: String,
    options: [], // Assuming options can be an array of strings
    description: String,
  });
  
  module.exports = mongoose.model('food_items', FoodSchema);