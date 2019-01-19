if (window.location.pathname === '/app') {
  setTimeout(function () {

    if (typeof localStorage === "undefined" || localStorage === null) {
      var LocalStorage = require('node-localstorage').LocalStorage;
      localStorage = new LocalStorage('./scratch');
    }
    const userData = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      accessToken: localStorage.getItem('access_token')
    }
    $.post("/api/users", userData)
      .then(function (result) {
        console.log(result);
      })
  }, 5000);
}

const submitButton = $("#search");


submitButton.on('click', function () {
  console.log('clicked submit button!');
  
  const userInput = submitButton.val().trim();

  queryURL = 'https://api.bestbuy.com/v1/products(name=' + userInput + '*)?show=sku,name,salePrice&apiKey=' + keys.parsed.BESTBUY_KEY;
  // imaginary api endpoint
  $.ajax({
    // request to direct to app
    url: '/api/products',
    type: 'POST',
    data: queryURL
  }).then(function (response) {
    // store data in results
    console.log(response);

  });
})

