var map = L.map('map').setView(45.563613, -117.208371, 15);

mapbox_token = 'pk.eyJ1IjoiaG9ncmVmZWsiLCJhIjoiY2pycWZha3FuMW81aDQzbXVxbDV6ZWZraiJ9.Kkt53JWsV-7-kRGVq7zBSw';

var gl = L.mapboxGL({
    accessToken: mapbox_token,
    style: 'assets/style.json',
    attribution: 'Created By <a href="https://github.com/jakobzhao/">Bo Zhao</a> based on the <a href="assets/license.txt">Mapbox basic style</a>'
}).addTo(map);
