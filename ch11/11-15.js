Parse.Cloud.httpRequest({
    // Get the url value of the 'Image' property on the Message object
    url: Message.get("Image").url()
}).then(function (response) {
    // Use the parse-image Cloud Module and create a new image
    var image = new Image();
    // Set the data of the image using the response object
    return image.setData(response.buffer);
}).then(function (image) {
    // The argument 'image' refers to returned object from the previous function
    // Select an arbitrary width value
    var width = 400;
    // Calculate our altered image's ratio using actual data from the image
    var ratio = (image.width() / image.height());
    // Based on the ratio, calculate a height
    var height = Math.round(width / ratio);
    /* Add a new property (ThumbnailSize) to the Message object containing
     the details of the thumbnail*/
    Message.set("ThumbnailSize", {
        width: width,
        height: height,
        ratio: ratio
    });
    // Resize the image using the parse-image module's 'scale' function
    return image.scale({
        width: width,
        height: height
    });
}).then(function (image) {
    // 'image' refers to returned object from the previous function (now resized)
    // Make sure it's a JPEG to save disk space and bandwidth
    return image.setFormat("JPEG");
}).then(function (image) {
    // Get the image data in a Buffer
    return image.data();
}).then(function (buffer) {
    // Save the image into a new file
    var base64 = buffer.toString("base64");
    // Create a new file containing the image data
    var resized = new Parse.File("thumbnail.jpg", {
        base64: base64
    });
    // Return the saved and resized image
}).then(function (resized) {
    // Attach the image file to the original object.
    Message.set("thumbnail", resized);
}).then(function (result) {
    // That's it, success!
    response.success();
}, function (error) {
    response.error(error);
});