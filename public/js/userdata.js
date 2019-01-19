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


