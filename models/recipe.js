const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: { type: String },
    quantity: { type: String }
  });

const RecipeSchema = new mongoose.Schema({
    name:String,
    ingredients:[IngredientSchema],
    steps:[String],
    cooking_time:String,
    servings:Number,
    cuisine:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Recipe',RecipeSchema,'recipes')