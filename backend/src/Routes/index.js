const routes = require('express').Router();
const exercise = require('./exercise');

routes.use('/exercise', exercise);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
