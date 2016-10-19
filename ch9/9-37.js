getLocationText: function () {
  if (this.get('location_text')) {
    return 'from ' + this.get('location_text');
  }
  if (this.get('location')) {
    return 'from unkown location (' + Math.round(this.get('location').latitude * 100) / 100 + ',' +
      Math.round(this.get('location').longitude * 100) / 100 + ')';
  }
  return '';
}
