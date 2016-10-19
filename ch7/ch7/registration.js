app.registration = {

    initialize: function() {
        $('form').on('submit', function(event) {
            event.preventDefault();
            app.registration.submit();
        });
    },

    submit: function() {

        $('button, input').attr('disabled', 'disabled');

        var first_name = $('input[name=first_name]').val();
        var last_name = $('input[name=last_name]').val();
        var email = $('input[name=email]').val();
        var password = $('input[name=password]').val();

        var user = new Parse.User();
        user.set("first_name", first_name);
        user.set("last_name", last_name);
        user.set("username", email);
        user.set("email", email);
        user.set("password", password);

        user.signUp(null, {
            success: function(user) {
                window.location.href = 'contacts.html';
            },
            error: function(user, error) {
                $('button, input').removeAttr('disabled');
            }
        });

    }

}; 