if (!window.cordova) {
    window.fbAsyncInit = function() {
        Parse.FacebookUtils.init({
            appId: '{facebook-app-id}', // Facebook App ID
            cookie: true, // enable cookies to allow Parse to access the session
            version: '1.0'
        });
    };
}