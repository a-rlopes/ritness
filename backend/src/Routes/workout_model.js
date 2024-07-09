const express = require("express");
const workoutModel = express.Router();

const workoutModelController = require('../Controller/workout_model.controller');

workoutModel.get('/', workoutModelController.getAll);
workoutModel.get('/:id', workoutModelController.getById); 
workoutModel.post('/', workoutModelController.create); 
workoutModel.put('/:id', workoutModelController.update);
workoutModel.delete('/:id', workoutModelController.delete); 

module.exports = workoutModel;