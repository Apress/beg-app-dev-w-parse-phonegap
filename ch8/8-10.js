getReceiverName: function() {
    var query = new Parse.Query(MyParseUser);
    return query.get(app.conversation.Receiver.id).then(function(Receiver) {
        app.conversation.Receiver = Receiver;
        $('.navbar-brand').text('Conversation with '
            + Receiver.get('first_name'));
    });
}