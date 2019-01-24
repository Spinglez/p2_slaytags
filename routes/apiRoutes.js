const db = require('../models');
const bestBuy = require('../controllers/bestBuyQuery');
const eBay = require('../controllers/ebayQuery');

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
    bestBuy(req.body.userInput);
    eBay(req.body.userInput);
  });

  app.post('/api/users', function (req, res) {
    db.Users.create(req.body).then(dbUsers => {
      res.json(dbUsers);
    });
  });
};
