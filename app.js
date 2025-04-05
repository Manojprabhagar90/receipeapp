const express = require('express');
const recipeRoute = require('./routes/recipeRouters');

const app = express();

app.use(express.json());

app.use('/api/v1/recipes',recipeRoute)

module.exports = app;