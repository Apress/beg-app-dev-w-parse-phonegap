var ParseImage = require("parse-image");
Parse.Cloud.beforeSave("Message", function(request, response) {
    var Message = request.object;
});