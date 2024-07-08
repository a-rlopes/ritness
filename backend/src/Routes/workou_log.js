const express = require("express");
const workoutLog = express.Router();

const workoutLogController = require('../Controller/workout_log.controller');

workoutLog.get('/', workoutLogController.getAll);
workoutLog.get('/:id', workoutLogController.getById); 
workoutLog.post('/', workoutLogController.create); 
workoutLog.put('/:id', workoutLogController.update);
workoutLog.delete('/:id', workoutLogController.delete); 

module.exports = workoutLog;