// in this file, we would use the database to access the data posted from our ajax calls in bestBuy.js to render the right data
const db = require('../models');

module.exports = function (app) {
  // Load home index page
  app.get('/', function (req, res) {
    res.render('index', {
      msg: 'Welcome!'
    });
  });

  // Load home results page
  app.get('/app', function (req, res) {
    res.render('app', {
      // add handlebars attributes here

    });
  });

  // Load wishlist page
  app.get('/wishlist', function (req, res) {
    res.render('wishlist', {
      // add handlebars attributes here
    });
  });

  // Load history page
  app.get('/history', function (req, res) {
    res.render('wishlist', {
      // add handlebars attributes here
    });
  });


  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404');
  });
};
