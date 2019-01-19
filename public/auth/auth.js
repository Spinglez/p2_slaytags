document.addEventListener('DOMContentLoaded', function () {
    var idToken;
    var accessToken;
    var expiresAt;

    var webAuth = new auth0.WebAuth({
        domain: 'slaytags.auth0.com',
        clientID: '2YFgHUCs4tlkLxgXBFpr4wMtkrH2jlqL',
        redirectUri: "http://localhost:3000/app",
        responseType: 'token id_token',
        scope: 'openid profile',
    });
    var loginStatus = document.querySelector('.container h4');
    
    console.log(location.pathname);
    if(location.pathname === "/"){
        var loginBtn = document.getElementById('qsLoginBtn');
        loginBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("clicked!")
            webAuth.authorize();
        });
    }
    else if(location.pathname === "/app"){
        var logoutBtn = document.getElementById('qsLogoutBtn');
        logoutBtn.addEventListener('click', logout);
    }

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
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        window.location.pathname = "/";
        console.log('logged out!')
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
                localStorage.setItem('firstName', authResult.idTokenPayload.given_name);
                localStorage.setItem('lastName', authResult.idTokenPayload.family_name);
                window.location.pathname = '/app';
                setSession(authResult);
            } else if (err) {
                console.log(err);
            }
            displayButtons();
        });
    }

    function displayButtons() {
        if (isAuthenticated()) {
            logoutBtn.style.display = 'inline-block';            
        } else {
            loginBtn.style.display = 'inline-block';
        }
    }
    handleAuthentication();
});