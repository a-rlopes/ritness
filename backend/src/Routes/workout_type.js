const express = require("express");
const workoutType = express.Router();

const workoutTypeController = require('../Controller/workout_type.controller');

workoutType.get('/', workoutTypeController.getAll);
workoutType.get('/:id', workoutTypeController.getById); 
workoutType.post('/', workoutTypeController.create); 
workoutType.put('/:id', workoutTypeController.update);
workoutType.delete('/:id', workoutTypeController.delete); 

module.exports = workoutType;