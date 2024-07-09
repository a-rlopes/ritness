const db = require("../Model/db");
const WorkoutPlan = db.workoutPlan;
const Op = db.Sequelize.Op;

// Create and Save a new WorkoutPlan
exports.create = (req, res) => {
  const workoutPlan = {
    name: req.body.name,
    description: req.body.description,
  };

  WorkoutPlan.create(workoutPlan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WorkoutPlan."
      });
    });
};

// Retrieve all WorkoutPlans from the database.
exports.getAll = (req, res) => {
  WorkoutPlan.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving WorkoutPlans."
      });
    });
};

// Find a single WorkoutPlan with an id
exports.getById = (req, res) => {
  const id = req.params.id;

  WorkoutPlan.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find WorkoutPlan with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving WorkoutPlan with id=" + id
      });
    });
};

// Update a WorkoutPlan by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  WorkoutPlan.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorkoutPlan was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update WorkoutPlan with id=${id}. Maybe WorkoutPlan was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating WorkoutPlan with id=" + id
      });
    });
};

// Delete a WorkoutPlan with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  WorkoutPlan.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorkoutPlan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete WorkoutPlan with id=${id}. Maybe WorkoutPlan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete WorkoutPlan with id=" + id
      });
    });
};