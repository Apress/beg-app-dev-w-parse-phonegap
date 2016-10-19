window.MyParseUser = Parse.User.extend({
    getPicture: function() {
        return this.get('picture') ?
            this.get('picture') : 'http://placehold.it/50x50';
    }
});