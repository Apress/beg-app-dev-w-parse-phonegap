toggleKeyboardAccessoryBar: function() {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    $$('body').tap(function(e) {
        if (!$(e.target).is("input,textarea")) {
            cordova.plugins.Keyboard.close();
        }
    });
}