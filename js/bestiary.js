$(function(){
  var platformTypes = ['Wrapped', 'Native', 'Computer', 'Hybrid'],
      entryTemplate = Handlebars.compile($('#entry-template').html()),
      platformTemplate = Handlebars.compile($('#category-template').html());

  platformTypes.forEach(function(platformType){
    $('#entries').append(platformTemplate({
      Type: platformType
    }));

    var platformsForThisType = _.where(window.platforms, {
      category: platformType
    });

    platformsForThisType.forEach(function(platform){
      platform.pros = [];
      platform.cons = [];

      _.forEach(platform.attributes, function(attributeValue, attribute){
        if(attributeValue){
          platform.pros.push(window.nodebot_attributes[attribute].pros)
        } else {
          platform.cons.push(window.nodebot_attributes[attribute].cons)
        }
      });

      platform.pros = _.flatten(platform.pros);
      platform.cons = _.flatten(platform.cons);

      $('#' + platformType + '-nodebots-list').append(entryTemplate(platform));
    });
  })
});
