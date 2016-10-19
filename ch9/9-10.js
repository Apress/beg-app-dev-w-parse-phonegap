app.modules.location = {
  isEnabled: function (receiver_id) {
    var key = 'location_' + receiver_id;
    return localStorage.getItem(key);
  },
  toggle: function (receiver_id) {
    var key = 'location_' + receiver_id;
    localStorage.setItem(key, !localStorage.getItem(key));
    return localStorage.getItem(key);
  }
};
