const db = require("../Model/db");
const WorkoutModel = db.workoutModel;
const Op = db.Sequelize.Op;

// Create and Save a new WorkoutModel
exports.create = (req, res) => {
  const workoutModel = {
    name: req.body.name,
    weekday: req.body.weekday,
    workout_plan_id: req.body.workoutPlan,
    workout_type_id: req.body.workoutType
  };

  WorkoutModel.create(workoutModel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WorkoutModel."
      });
    });
};

// Retrieve all WorkoutModels from the database.
exports.getAll = (req, res) => {
  WorkoutModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving WorkoutModels."
      });
    });
};

// Find a single WorkoutModel with an id
exports.getById = (req, res) => {
  const id = req.params.id;

  WorkoutModel.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find WorkoutModel with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving WorkoutModel with id=" + id
      });
    });
};

// Update a WorkoutModel by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  WorkoutModel.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorkoutModel was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update WorkoutModel with id=${id}. Maybe WorkoutModel was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating WorkoutModel with id=" + id
      });
    });
};

// Delete a WorkoutModel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  WorkoutModel.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorkoutModel was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete WorkoutModel with id=${id}. Maybe WorkoutModel was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete WorkoutModel with id=" + id
      });
    });
};