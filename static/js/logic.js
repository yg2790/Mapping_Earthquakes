// Add console.log to see if our code is working
console.log('working');

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// // Add marker to map for Los Angeles California
// // var marker = L.marker([34.0522, -118.2437]).addTo(map);

// // L.circleMarker([34.0522, -118.2437],{
// //     radius: 300,
// //     color: 'black',
// //     fillColor: '#ffffa1'
// // }).addTo(map);

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color:'orange',
//         weight: 4,
//         fillColor: '#fed8b1'
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>" )
//     .addTo(map);
// });

// // Coordinates for each point to be used in the line.
// // Coordinates for each point to be used in the polyline.
// let line = [
//     [37.6152, -122.3900],
//     [30.1941, -97.6711],
//     [43.6777, -79.6248],
//     [40.6418, -73.7810]
//   ];
//   // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     dashArray: (10,10),
//     opacity: 0.5
//   }).addTo(map);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // var geojsonFeature = {
// //     "type": "Feature",
// //     "properties": {
// //         "name" : "name of field",
// //         "amenity": "type of geographic location",
// //         "popupContent": "message"
// //     },
// //     "geometry": {
// //         "type": "Point/line/polygon",
// //         "coordinates": 'geocoordinate'
// //     }
// // };

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Airport Name: " + feature.properties.name + "</h3>");
//     }
// }).addTo(map);

// // ("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>" )


// // L.geoJson(data, {
// //     pointToLayer: function(feature, latlng) {
// //       return L.marker(latlng);
// //      }
// // });

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo
})