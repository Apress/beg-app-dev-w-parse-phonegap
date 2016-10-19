Parse.User.logIn(email, password, {
    success: function(user) {
        window.location.href = 'logout.html';
    },
// ...
}