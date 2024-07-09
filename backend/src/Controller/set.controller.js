const db = require("../Model/db");
const Set = db.set;
const Op = db.Sequelize.Op;

// Create and Save a new Set
exports.create = (req, res) => {
  const set = {
    weight: req.body.weight,
    n: req.body.n,
    load: req.body.weight * req.body.n,
    workout_log_id: req.body.workoutLog,
    exercise_id : req.body.exercise
  };

  Set.create(set)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Set."
      });
    });
};

// Retrieve all Sets from the database.
exports.getAll = (req, res) => {
  Set.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sets."
      });
    });
};

// Find a single Set with an id
exports.getById = (req, res) => {
  const id = req.params.id;

  Set.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Set with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Set with id=" + id
      });
    });
};

// Update a Set by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Set.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Set was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Set with id=${id}. Maybe Set was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Set with id=" + id
      });
    });
};

// Delete a Set with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Set.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Set was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Set with id=${id}. Maybe Set was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Set with id=" + id
      });
    });
};