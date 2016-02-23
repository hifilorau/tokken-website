$(function() {
// app.press = function () {

    // var items = [
    //       {
    //          name:"BBC",
    //          url:"www.tokken.com",
    //          logo:''
    //       },
    //       {
    //          name:"NY Times",
    //          url:"www.nytimes.com",
    //          logo: ''
    //
    //      }
    //   ];

 $.ajax({
     url: "../datafiles/press-items.json",
     async: false,
     dataType: "json",
     success: function(json) {
         console.log(json);
         items = json;
     }});

     var template = $("#press-list-item-template").html();
     $("#press-list").html(_.template(template,{items:items}));

// };

});
