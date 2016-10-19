if(window.cordova) {
    navigator.notification.alert('Message was sent!', function() {}, 'TheMessenger', 'OK!');
} else {
    alert('Message was sent!');
}