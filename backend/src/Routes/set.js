const express = require("express");
const set = express.Router();

const setController = require('../Controller/set.controller');

set.get('/', setController.getAll);
set.get('/:id', setController.getById); 
set.post('/', setController.create); 
set.put('/:id', setController.update);
set.delete('/:id', setController.delete); 

module.exports = set;