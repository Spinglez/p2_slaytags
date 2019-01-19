// This is where we would define the buttons
const keys = require('../keys');
let $submitBtn = $('#submit');

// Function for creating a new list row for a best buy product
function createProductRow(product) {
  var newTr = $('<tr>');
  newTr.data('product', product);
  newTr.append('<td>' + product.name + '</td>');
  newTr.append('<td>' + product.sku + '</td>');
  newTr.append('<td>' + product.price + '</td>');
  newTr.append('<td>' + product.customerReviewAverage + '</td>');
  newTr.append('<td>' + product.customerReviewCount + '</td>');
  return newTr;
}

// Function for retrieving products and getting them ready to be rendered to the page
function getProducts() {
  return $.ajax({
    // request to direct to app
    url: '/api/products',
    type: 'GET'
  }).then(function (response) {
    // store data in results
    let results = response.data;

    let rowsToAdd = [];
    for (let i = 0; i < results.length; i++) {
      rowsToAdd.push(createAuthorRow(results[i]));
    }
    // add rows through to handlebars
    //  ...
    nameInput.val('');
  });
}


// Add event listeners to the submit button
$submitBtn.on('click', getProducts());
