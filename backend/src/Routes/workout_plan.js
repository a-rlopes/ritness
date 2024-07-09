const express = require("express");
const workoutPlan = express.Router();

const workoutPlanController = require('../Controller/workout_plan.controller');

workoutPlan.get('/', workoutPlanController.getAll);
workoutPlan.get('/:id', workoutPlanController.getById); 
workoutPlan.post('/', workoutPlanController.create); 
workoutPlan.put('/:id', workoutPlanController.update);
workoutPlan.delete('/:id', workoutPlanController.delete); 

module.exports = workoutPlan;