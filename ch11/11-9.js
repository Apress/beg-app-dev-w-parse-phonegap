navigator.notification.confirm("Do you want to send this picture?", function() {
    app.conversation.sendMessage(parsePhoto);
    $('form').removeClass('uploading');
}, "Confirmation", ['OK', 'Cancel']);