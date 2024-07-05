const express = require("express");
const router = express.Router();

const exerciseController = require('../Controller/exercise.controller');

router.get('/', exerciseController.getAll);
router.get('/id/:id', exerciseController.getById); 
router.post('/', exerciseController.create); 
router.put('/:id', exerciseController.update);
router.delete('/:id', exerciseController.delete); 

module.exports.exerciseRoutes = router;
