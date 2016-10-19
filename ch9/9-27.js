Message.save().then(function () {
  Parse.Cloud.run('MessageAddLocationName', {
    id: Message.id
  });
});
