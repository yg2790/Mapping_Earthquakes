// Add console.log to see if our code is working
console.log('working');

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the tile layer that will be the background of our map.
let dayNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let nightNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Day: dayNav,
    Night: nightNav
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dayNav]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
dayNav.addTo(map);

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

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/yg2790/Mapping_Earthquakes/main/majorAirports.json";

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data){
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Aiport name: " + feature.properties.name + "</h3>") 
//        }
//     }).addTo(map)
// });

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/yg2790/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data){
    console.log(data);
    L.geoJSON(data,{
        style: myStyle,
        onEachFeature: function(feature,layer) {
            console.log(layer);
            layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: "+ feature.properties.dst + "</h3>")
    }
    }).addTo(map)
});