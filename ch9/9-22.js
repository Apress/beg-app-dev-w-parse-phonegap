window.navigator.geolocation.getCurrentPosition(function (location) {
  bgGeo.configure(onSuccess, onError, options);
  bgGeo.start();
});
