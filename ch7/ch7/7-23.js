accessControl: function () {
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
}