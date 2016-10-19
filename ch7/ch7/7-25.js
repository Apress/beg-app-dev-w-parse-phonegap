accessControl: function() {
// user is logged in and accessing a public view
    if (MyParseUser.current() && config.public_access) {
        window.location.href = 'logout.html';
        return;
    }
    // user is not logged in and trying to access protected view
    if (!MyParseUser.current() && !config.public_access) {
        window.location.href = 'login.html';
        return;
    }
    // Do not add navbar for logged out users
    if (!MyParseUser.current()) {
        return;
    }
    // Add Navbar
    $.ajax({
        url: "navbar.html",
        async: false
    }).done(function(source) {
        var template = Handlebars.compile(source);
        $('body').prepend(template(config)).addClass('has-navbar');
    });
}