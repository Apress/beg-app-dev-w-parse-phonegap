app.conversationList = {
    initialize: function() {
        var query = new Parse.Query(MyParseConversation);
        query.include('last_message');
        query.include('Partner');
        query.equalTo('Owner', MyParseUser.current());
        query.limit(10);
        query.descending('updatedAt');
        return query.find().then(function(Conversations) {
            app.core.render('.placeholder', 'conversationList', {
                conversations: Conversations
            });
            $('.placeholder').removeClass('loading');
        });
    }
};