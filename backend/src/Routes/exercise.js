const express = require("express");
const exercise = express.Router();

const exerciseController = require('../Controller/exercise.controller');

exercise.get('/', exerciseController.getAll);
exercise.get('/id/:id', exerciseController.getById); 
exercise.post('/', exerciseController.create); 
exercise.put('/:id', exerciseController.update);
exercise.delete('/:id', exerciseController.delete); 

module.exports = exercise;