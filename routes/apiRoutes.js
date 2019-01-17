var db = require('../models');

module.exports = function (app) {
  app.get('/api/products', function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Products.findAll({
      include: [db.Post]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  app.get('/api/products/:id', function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Products.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  app.post('/api/products', function (req, res) {
    db.Products.create(req.body).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });
};
