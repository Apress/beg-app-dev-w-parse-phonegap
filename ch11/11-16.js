var MyParseMessage = Parse.Object.extend('Message', {
    //...
    getThumbnail: function() {
        return this.get('thumbnail') ? '<img src="' + this.get('thumbnail').url() + '" alt="" class="img-thumbnail" />' : '';
    //...
});