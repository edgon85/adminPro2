function initMap() {
  var myLatLng = {lat: 14.856817, lng: -91.521390};

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16
  });

  // Create a marker and set its position.
  var image = '/static/img/home/ico.png';
  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: myLatLng,
    title: 'Casa e Imagen'
  });
}

// function initMap() {
//     var map = new google.maps.Map(document.getElementById('googleMap'), {
//       zoom: 16,
//       center: {lat: 14.856817, lng: -91.521390}
//     });
  
//     // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
//     var image = '/static/img/home/ico.png';
//     var beachMarker = new google.maps.Marker({
//       position: {lat: 14.856817, lng: -91.521390},
//       map: map,
//       icon: image
//     });
//   }

  //google.maps.event.addDomListener(window, 'load', initMap);