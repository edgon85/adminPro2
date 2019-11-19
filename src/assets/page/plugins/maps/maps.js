function initMap() {
  var myLatLng = { lat: 14.856817, lng: -91.52139 };

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 16
  });

  // Create a marker and set its position.
  var image =
    "https://s3-us-west-1.amazonaws.com/casa-e-imagen/static/img/home/ico.png";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: "Casa e Imagen"
  });
}
