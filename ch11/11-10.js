sendMessage: function(parsePhoto) {
    var Message = new MyParseMessage();
    Message.send({
        Receiver: app.conversation.Receiver,
        message_body: !parsePhoto ? $('textarea').val() : null,
        parsePhoto: parsePhoto
    }).then(function() {
        if (!parsePhoto) {
            $('textarea').val('');
        }
    // At this point you should add a script
    // to refresh conversation (messages)
    });
}