isOwner: function() {
    return this.get('sender').id == MyParseUser.current().id;
},
getCssClass: function() {
    return this.isOwner() ? 'alert-info pull-right' : 'alert-warning';
}