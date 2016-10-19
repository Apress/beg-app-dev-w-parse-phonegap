renderMessages: function () {
    var limit = 5;
    MyParseConversation.getMessages(
        app.conversation.Receiver, limit
    ).then(function (Messages) {
            app.core.render('.placeholder', 'conversation', {
                // Use reverse() to place old messages on the top
                messages: Messages.reverse()
            });
            $('.placeholder').removeClass('loading');
        });
}