// app.press = function () {
$(document).ready(function() {
    console.log('yolo');

 $.ajax({
     url: "../datafiles/press-items.json",
     async: false,
     dataType: "json",
     success: function(json) {
         console.log(json);
         items = json.data;
         console.log(items.data);
     }});


  var projectListItem = $('#press-item-data').html();
  var template = _.template(projectListItem)({
    items: items
  });

  $('#press-list').html(template);

});
