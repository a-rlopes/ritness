const db = require("../Model/db");
const Exercise = db.exercise;
const Op = db.Sequelize.Op;

// Create and Save a new Exercise
exports.create = (req, res) => {
  const exercise = {
    name: req.body.name,
    description: req.body.description
  };

  Exercise.create(exercise)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Exercise."
      });
    });
};

// Retrieve all Exercises from the database.
exports.getAll = (req, res) => {
  Exercise.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Exercises."
      });
    });
};

// Find a single Exercise with an id
exports.getById = (req, res) => {
  const id = req.params.id;

  Exercise.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Exercise with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Exercise with id=" + id
      });
    });
};

// Update a Exercise by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Exercise.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
          Exercise.findByPk(id)
            .then(data => {
              if (data) {
                res.send(data);
              } else {
                res.status(404).send({
                  message: `Cannot find Exercise with id=${id}.`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Error retrieving Exercise with id=" + id
              });
            });
      } else {
        res.send({
          message: `Cannot update Exercise with id=${id}. Maybe Exercise was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Exercise with id=" + id
      });
    });
};

// Delete a Exercise with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Exercise.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Exercise was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Exercise with id=${id}. Maybe Exercise was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Exercise with id=" + id
      });
    });
};