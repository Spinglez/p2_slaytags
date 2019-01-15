// This is where we would define the buttons
let $exampleText = $('#example-text');
let $exampleDescription = $('#example-description');
let $submitBtn = $('#submit');
let $exampleList = $('#example-list');
var productInput = $("#product-name");

// hey guys, didn't create an ORM example (API object) like the project starter, but it's not necessary.

// on submit of product request
function addWalmartProducts() {
    // will format query URL more appropriatly later (needs to handle multiple words)
    // Christian or anyone else on this page, replace this queryURL with the Walmart one.
    queryURL = "https://API.bestbuy.com/v1/products(search=oven)?format=json&show=sku,name,salePrice&APIKey=Acdwbgr1I88E0lx380wiezkr";
    // imaginary api endpoint
    return $.ajax({
      // request to direct to app
      url: queryURL,
      type: 'GET'
    }).then(function (response) {
      // store data in results
      var results = response.data;
      console.log(results)

      // store this data in the database here
      // ...

    })
}
// Function for creating a new list row for a best buy product
function createProductRow(product) {
  var newTr = $("<tr>");
  newTr.data("product", product);
  newTr.append("<td>" + product.name + "</td>");
  newTr.append("<td>" + product.sku + "</td>");
  newTr.append("<td>" + product.price + "</td>");
  newTr.append("<td>" + product.customerReviewAverage + "</td>");
  newTr.append("<td>" + product.customerReviewCount + "</td>");
  return newTr;
}

  // Function for retrieving products and getting them ready to be rendered to the page
  function getProducts() {
    return $.ajax({
      // request to direct to app
      url: "/api/products",
      type: 'GET'
    }).then(function (response) {
      // store data in results
      var results = response.data;

      var rowsToAdd = [];
      for (var i = 0; i < results.length; i++) {
        rowsToAdd.push(createAuthorRow(results[i]));
      }
      // add rows through to handlebars
      //  ...
      nameInput.val("");
    });
  }


// Add event listeners to the submit button
$submitBtn.on('click', getProducts());