// No image attached to the message object
if (!Message.get("Image")) {
    response.success();
    return;
}
// The photo wasn't modified
if (!Message.dirty("Image")) {
    response.success();
    return;
}