app.contacts = {
    initialize: function() {
        var query = new Parse.Query(MyParseUser);
        // Sort results in ascending order
        // by first and last name
        query.ascending("first_name", "last_name");
        query.find().then(function(users) {
            app.core.render('.container', 'contacts', {
                users: users
            });
        });
    }
};