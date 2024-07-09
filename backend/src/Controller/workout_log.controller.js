const db = require("../Model/db");
const WorkoutLog = db.workoutLog;
const Op = db.Sequelize.Op;

// Create and Save a new WorkoutLog
exports.create = (req, res) => {
  const workoutLog = {
    date: req.body.date ? req.body.date : Date.now(),
    note: req.body.note,
    workout_model_id: req.body.workoutModel,
    load: 0
  };

  WorkoutLog.create(workoutLog)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WorkoutLog."
      });
    });
};

// Retrieve all WorkoutLogs from the database.
exports.getAll = (req, res) => {
  WorkoutLog.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving WorkoutLogs."
      });
    });
};

// Find a single WorkoutLog with an id
exports.getById = (req, res) => {
  const id = req.params.id;

  WorkoutLog.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find WorkoutLog with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving WorkoutLog with id=" + id
      });
    });
};

// Update a WorkoutLog by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  WorkoutLog.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorkoutLog was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update WorkoutLog with id=${id}. Maybe WorkoutLog was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating WorkoutLog with id=" + id
      });
    });
};

// Delete a WorkoutLog with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  WorkoutLog.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "WorkoutLog was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete WorkoutLog with id=${id}. Maybe WorkoutLog was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete WorkoutLog with id=" + id
      });
    });
};