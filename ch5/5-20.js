apiRequest: function (path, scope, callback) {
    facebookConnectPlugin.api("me/permissions/" + scope, null,
// success callback permissions request
        function (response) {
            var missing_permissions = response.data.length > 0 && response.data[0].status == "granted" ? null : [scope];
            facebookConnectPlugin.api(path, missing_permissions,
// success callback for api request
                callback,
// error callback for api request
                myFacebookApp.debugResponse
            );
        },
// error callback for permissions request
        myFacebookApp.debugResponse
    );
}