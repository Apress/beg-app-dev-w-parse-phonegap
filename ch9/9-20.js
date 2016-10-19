var onError = function (error) {
  console.log('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
  bgGeo.finish();
};
