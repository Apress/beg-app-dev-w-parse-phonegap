var MyParseConversation = Parse.Object.extend('Conversation', {
        // Instance Methods (currently empty)
}, {
    getMessages: function(Receiver, limit) {
        // Query messages sent by current user
        var senderQuery = new Parse.Query(MyParseMessage);
        senderQuery.equalTo("Receiver", Receiver);
        senderQuery.equalTo("Sender", MyParseUser.current());
        // Query messages sent by other user
        var receiverQuery = new Parse.Query(MyParseMessage);
        receiverQuery.equalTo("Receiver", MyParseUser.current());
        receiverQuery.equalTo("Sender", Receiver);
        // Combined Query with OR condition
        var messageQuery = Parse.Query.or(senderQuery, receiverQuery);
        // Limit the result
        messageQuery.limit(limit);
        // Show newer messages first
        messageQuery.descending('createdAt');
        // Pass result to render function
        return messageQuery.find();
    }
});