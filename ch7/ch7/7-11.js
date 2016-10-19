app.login = {
    initialize: function() {
        $('form').on('submit', function(event) {
            event.preventDefault();
            app.login.submit();
        });
    },
    submit: function() {}
};