const db = require("../models");
const Puja = db.pujas;
const Op = db.Sequelize.Op;

// Create and Save a new Puja
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const puja = {
    name: req.body.name,
    description: req.body.description,
    language: req.body.language,
    region: req.body.region,
    mode1: req.body.mode1,
    mode2: req.body.mode2,
    mode3: req.body.mode3,
    videos: req.body.videos,
    images: req.body.images,
    history_images: req.body.history_images,
    history_videos: req.body.history_videos
  }

  // Save Puja in the database
  Puja.create(puja)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Puja."
      });
    });
};

// Retrieve all Pujas from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Puja.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pujas."
      });
    });
};

// Find a single Puja with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Puja.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Puja with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Puja with id=" + id
      });
    });
};

// Update a Puja by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Puja.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Puja was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Puja with id=${id}. Maybe Puja was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Puja with id=" + id
      });
    });
};

// Delete a Puja with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Puja.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Puja was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Puja with id=${id}. Maybe Puja was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Puja with id=" + id
      });
    });
};

// Delete all Pujas from the database.
exports.deleteAll = (req, res) => {
  Puja.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Pujas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Pujas."
      });
    });
};

// find all published Puja
// exports.findAllPublished = (req, res) => {
//   Puja.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Pujas."
//       });
//     });
// };
