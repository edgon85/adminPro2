$(document).ready(function() {

  

  $("#imagen a img").click(function(event) {
    event.preventDefault();
    var urlImage = $(this).attr("src");
    var urlBackground = "url('" + urlImage + "')";

    $(".caja-fondo").css("background-image", urlBackground);
    // $(".caja-fondo img").attr("src", "/static/img/casa/principal.png");
  });
});
