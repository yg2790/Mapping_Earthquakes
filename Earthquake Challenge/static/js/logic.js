// Add console.log to see if our code is working
console.log('working');

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    'Streets': streets,
    'Satellite Streets': satelliteStreets
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

let earthquakes = new L.layerGroup();

let overlays = {
  Earthquakes: earthquakes
}

let legend =  L.control({
  position: 'bottomright'
})

const magnitudes = [0, 1, 2, 3, 4, 5];
const colors = [
  "#98ee00",
  "#d4ee00",
  "#eecc00",
  "#ee9c00",
  "#ea822c",
  "#ea2c2c"
];

legend.onAdd = function() {
  let div = L.DomUtil.create('div', 'info legend');
  for (var i = 0; i < magnitudes.length; i++){
    console.log(colors[i]);
    div.innerHTML += 
      "<i style= 'background: " + colors[i] + "'></i>" + magnitudes[i] + (magnitudes[i+1] ? "&ndash;" + magnitudes[i+1] + "<br>" : "+");
  }
  return div;
};

legend.addTo(map)

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);

// // Then we add our 'graymap' tile layer to the map.
// satelliteStreets.addTo(map);

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

// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/yg2790/Mapping_Earthquakes/main/torontoRoutes.json";

// // Create a style for the lines.
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data){
//     console.log(data);
//     L.geoJSON(data,{
//         style: myStyle,
//         onEachFeature: function(feature,layer) {
//             console.log(layer);
//             layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: "+ feature.properties.dst + "</h3>")
//     }
//     }).addTo(map)
// });

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/yg2790/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data){
//     console.log(data);
//     L.geoJSON(data,{
//         color: 'blue',
//         weight: 1,
//         fillColor: '#ffffa1',
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>")
//         }
//     }).addTo(map)
// })

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
  if (magnitude > 5) {
    return "#ea2c2c";
  }
  if (magnitude > 4) {
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
}

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}



// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data,{
      pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng)
      },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(earthquakes)

  // add earthquakes to map
  earthquakes.addTo(map);
});

