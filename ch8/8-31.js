getOrCreate: function (Owner, Partner) {
    var query = new Parse.Query(MyParseConversation);
    query.equalTo('Owner', Owner);
    query.equalTo('Partner', Partner);
    return query.first().then(function (Conversation) {
        if (Conversation) {
            return Conversation;
        }
        Conversation = new MyParseConversation();
        Conversation.set('Owner', Owner);
        Conversation.set('Partner', Partner);
        return Conversation.save();
    });
}