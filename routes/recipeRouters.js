const express = require('express');
const recipeControllers = require('../controllers/recipeControllers');

const recipeRoute = express.Router();

recipeRoute.get('/',recipeControllers.getAllrecipes);
recipeRoute.get('/:id',recipeControllers.getRecipesId);
recipeRoute.post('/',recipeControllers.createRecipes);
recipeRoute.put('/:id',recipeControllers.updateRecipes);
recipeRoute.delete('/:id',recipeControllers.deleteRecipes);

module.exports = recipeRoute;