function initMap() {
    var ubicaciones = [
         { lat: -34.596601, lng: -58.450107, nombre: 'Villa Crespo' },
         { lat: -34.610559, lng: -58.412722, nombre: 'Once' }, 
         { lat: -34.588601, lng: -58.403896, nombre: 'Barrio' } 
     ];
    var map = new google.maps.Map(document.getElementById("mapa"), {
        center: { lat: -34.598939, lng: -58.426808 },
        zoom: 12,
      });
    ubicaciones.forEach(function(ubicacion) {
         var marcador = new google.maps.Marker({
         position: { lat: ubicacion.lat, lng: ubicacion.lng },
         map: map,
         title: ubicacion.nombre
         });
     });
}
   
