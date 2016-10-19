sendMessage: function() {
    var Message = new MyParseMessage();
    Message.send({
        Receiver: app.conversation.Receiver,
        message_body: $('textarea').val()
    }).then(function(Message) {
        $('textarea').val('');
        console.log(Message);
        alert('Message was sent!');
    }).fail(function(error) {
        console.log(error);
        alert('Message was not sent!');
    });
}