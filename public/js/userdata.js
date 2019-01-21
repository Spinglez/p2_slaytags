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
      })
  }, 5000);


  const submitButton = document.getElementById("search");

  submitButton.addEventListener('click', function () {
    const userInput = document.getElementById("search-item").value;

    $.ajax({
      // request to direct to app
      url: '/api/products',
      type: 'POST',
      data: { userInput: userInput }
    }).then(function (response, error) {
      if (error) {
        console.log("error is:", error);
      }
    });
  })
}


