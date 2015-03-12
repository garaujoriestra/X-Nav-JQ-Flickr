
$(document).ready(function() {
  $("#boton").click(function(){
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var tag = $("#contenido").val();

    $.getJSON( flickerAPI, {
      tags: tag,
      tagmode: "any",
      format: "json"
    })
      .done(function( data ) {
        $("#images").empty();
        $.each( data.items, function( i, item ) {
          $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        });
      });
  }); 
});



