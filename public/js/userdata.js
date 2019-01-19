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

const submitButton = document.getElementById("search");

// console.log(submitButton);

submitButton.addEventListener('click', function () {
  console.log('clicked submit button!');

  const userInput = document.getElementById("search-item").value;

  // imaginary api endpoint
  $.ajax({
    // request to direct to app
    url: '/api/products',
    type: 'POST',
    data: {userInput: userInput}
  }).then(function (response,error) {
    if(error){
      console.log("error is:", error);
    }
    // store data in results
    console.log(response);

  });
})

