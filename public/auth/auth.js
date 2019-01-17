// console.log(document.getElementById('qsLoginBtn'));

document.addEventListener('DOMContentLoaded', function () {

    var idToken;
    var accessToken;
    var expiresAt;

    var webAuth = new auth0.WebAuth({
        domain: 'slaytags.auth0.com',
        clientID: '2YFgHUCs4tlkLxgXBFpr4wMtkrH2jlqL',
        redirectUri: "http://localhost:3000",
        responseType: 'token id_token',
        scope: 'openid',
    });

    var loginBtn = document.getElementById('qsLoginBtn');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("clicked!")
        webAuth.authorize();
    });

    var loginStatus = document.querySelector('.container h4');
    var homeView = document.getElementById('home-view');

    var logoutBtn = document.getElementById('qsLogoutBtn');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        webAuth.authorize();
    });

    function setSession(authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    function logout() {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        displayButtons();
    }

    function isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    function handleAuthentication() {
        webAuth.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.pathname = '/app';
                setSession(authResult);
                loginBtn.style.display = 'none';
                homeView.style.display = 'inline-block';
            } else if (err) {
                homeView.style.display = 'inline-block';
                console.log(err);
                alert(
                    'Error: ' + err.error + '. Check the console for further details.'
                );
            }
            displayButtons();
        });
    }

    function displayButtons() {
        if (isAuthenticated()) {
            location.pathname = '/app';
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
            loginStatus.innerHTML = 'You are logged in!';
        } else {
            loginBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
            loginStatus.innerHTML =
                'You are not logged in! Please log in to continue.';
        }
    }
    handleAuthentication();
});