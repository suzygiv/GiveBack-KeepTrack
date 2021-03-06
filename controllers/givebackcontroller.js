const db = require("../models");

// Defining methods for the GivebackController
module.exports = {
  findAll: function(req, res) {
    db.Giveback
    .findAll()
    // .find(req.query)
    // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Giveback
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log(req.body)
    db.Giveback
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Giveback
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Giveback
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getChartData: function(req, res) {
    db.Giveback
    .findAll({
      attributes: [
        'category', 
        [db.Sequelize.fn('sum', db.Sequelize.col('amount')), "totalAmount"]
      ], 
      group: ["category"]
    }).then(function (result) { 
      console.log(result)
      res.json(result)
    });
  }
};
