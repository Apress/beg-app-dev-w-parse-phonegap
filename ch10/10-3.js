renderMessages: function() {
    var limit = 5;
    MyParseConversation.getMessages(app.conversation.Receiver,
        limit).then(function(Messages) {
        // Render Messages ...
            $(Messages).each(function(index, Message) {
                app.conversation.Messages[Message.id] = Message;
            });
        });
}