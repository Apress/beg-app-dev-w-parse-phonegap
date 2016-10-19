app.contacts = {

    initialize: function() {
        app.contacts.load();
    },

    load: function() {

        $(".placeholder").addClass('loading');

        var query = new Parse.Query(MyParseUser);

        // Sorts the results in ascending order by username
        query.ascending("first_name", "last_name");

        query.find().then(function(users) {
            $(".placeholder").removeClass('loading');
            app.core.render('.placeholder', 'contacts', {
                users: users
            });
            app.contacts.searchEvent();
        });
    },

    searchEvent: function() {
        $('input[name=search]').on('keyup', function() {
            $(".searchable").show();
            var search_term = $(this).val().toLowerCase();
            if(!search_term) {
                return;
            }
            $(".searchable:not([data-username*=\"" + search_term + "\"])").hide();
        });
    }

};