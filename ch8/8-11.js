messageHandler: function() {
    $('#submit').on('tap click', function(e) {
        e.preventDefault();
        $("textarea").focus();
        app.conversation.sendMessage();
    });
}