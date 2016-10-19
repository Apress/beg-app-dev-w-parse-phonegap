app.logout = {
    initialize: function() {

        $('#username').text(Parse.User.current().get('first_name'));

        $('#logout-button').on('click', function(event) {
            event.preventDefault();
            Parse.User.logOut();
            window.location.href = 'index.html';
        });
    }

};