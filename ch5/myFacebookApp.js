var myFacebookApp = {
    init: function() { 
        facebookConnectPlugin.getLoginStatus(
            myFacebookApp.handleLoginResponse,
            myFacebookApp.debugResponse
        ); 

    }, 
    login: function() {
        facebookConnectPlugin.login(["public_profile"],
            myFacebookApp.handleLoginResponse,
            myFacebookApp.debugResponse
        );
    },
    getPublishingPermissions: function() {
        facebookConnectPlugin.login(["publish_actions"], 
            myFacebookApp.handleLoginResponse,
            myFacebookApp.debugResponse
        );
    },
    logout: function() {
        facebookConnectPlugin.logout(
            myFacebookApp.switchToView.loggedout, 
            myFacebookApp.switchToView.loggedin
        );
    },
    handleLoginResponse: function(response) {
        if (response.status == "connected") { 
            myFacebookApp.switchToView.loggedin();
        } else {
            myFacebookApp.switchToView.loggedout();
        }
    },
    switchToView: {
        loggedin: function() {
            $(".loggedin").show();
            $(".loggedout").hide();
        },
        loggedout: function() {
            $(".loggedin").hide();
            $(".loggedout").show();
        }
    },
    debugResponse: function(response) {
        console.log("response", response);
        alert("Error: " + JSON.stringify(response));
    },
    showDialog: function() {
        facebookConnectPlugin.showDialog({
                method: "feed",
                link: "https://www.parse.com/",
                caption: "Add a message ..."
            },
            // success callback
            myFacebookApp.debugResponse,
            // error callback
            myFacebookApp.debugResponse
        );
    },
    getEmailAddress: function() {
        facebookConnectPlugin.api("/me/?fields=id,email", ["email"],
            // success callback
            myFacebookApp.debugResponse,
            // error callback
            myFacebookApp.debugResponse
        );
    },
    getUserPhotos: function() {
        myFacebookApp.apiRequest("me/photos", "user_photos", function(response) {
            var source = $("#photos-template").html();
            var template = Handlebars.compile(source);
            var html = template({
                photos: response
            });
            $(".panel-body").html(html); 
        });
    },
    postToFeed: function() { 
        facebookConnectPlugin.login(["publish_actions"],
            function(response) {
                if (response.status != "connected") { 
                    return false;
                }  
                $.ajax({
                  type: "POST",
                  url: "https://graph.facebook.com/me/feed",
                  data: {
                    access_token: response.authResponse.accessToken,
                    message: "Hello World!", 
                    link: "http://blog.parse.com/"
                  },
                  success: function(response) {
                    console.log(response);
                  },
                  dataType: "json"
                }); 
            },
            myFacebookApp.debugResponse
        );  
    },
    uploadFile: function() { 
        facebookConnectPlugin.login(["publish_actions"],
            function(response) { 

                var options = new FileUploadOptions();
                options.fileKey = "source";
                options.chunkedMode = false;
                options.httpMethod = "POST";
                
                var params = {};
                params.access_token = response.authResponse.accessToken;
                params.message = "Hello World!";
                
                options.params = params;

                var filePath = cordova.file.applicationDirectory + "/www/img/my_photo.jpg";
                
                var ft = new FileTransfer();
                ft.upload(filePath, encodeURI("https://graph.facebook.com/me/photos"), myFacebookApp.onUploadSuccess, myFacebookApp.onUploadFail, options);
            },
            myFacebookApp.debugResponse
        );  
    },
    onUploadSuccess: function(uploadResponse) {
        console.log(uploadResponse);
        var response = JSON.parse(uploadResponse.response);
        console.log(response);
    },
    onUploadFail: function(response) {
        myFacebookApp.debugResponse(response);
    },
    apiRequest: function(path, scope, callback) {
        facebookConnectPlugin.api("me/permissions/" + scope, null,
            // success callback permissions request
            function(response) { 
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
};