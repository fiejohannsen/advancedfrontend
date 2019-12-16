"use strict";

// Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoibGFlcmtlbGFuZ2UiLCJhIjoiY2p0aWJwbTVjMGpuMTN5bno5eXI2OHZ6cCJ9.M1Fc8ANdg2nEM6YOtvH1_g";


let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 13.43,
  center: [10.2153, 56.1634]
});

let geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [10.2161, 56.1638]
    },
    properties: {
      title: 'FIX & FINITO',
      description: 'SKOVVEJEN 7<br> AARHUS C'
    }
  }]
};
// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  let el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
        offset: 25
      }) // add popups
      .setHTML('<h3><b>' + marker.properties.title + '</b></h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});