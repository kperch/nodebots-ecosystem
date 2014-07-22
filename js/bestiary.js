$(function(){
  console.log(window.platforms);

  var wrappedPlatforms = _.where(window.platforms, {'category': 'Wrapped'});
  console.log(wrappedPlatforms);
});
