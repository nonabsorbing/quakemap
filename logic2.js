// basemap layer 

var baseMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.dark",
        accessToken: API_KEY
      });

//************************************** */

// Endpoint Url - 
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";

// //************************************** */


// // get the data 

// d3.json(queryUrl, function(data) {
//   console.log(data);  //send the data.features object to the createFeatures function
//   // createFeatures(data.features);

// });

//   Create our map, giving it the darkmap and earthquakes layers to display on load

var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [baseMap
    // , earthquakes
  ]
});


//************************************** */

// get color of bubble to pas into circle

// function getColor(magnitude) {
//   var color = "";
  

//   if (magnitude > 5.0) {
//     color = "red";}
//   else if (magnitude > 4) {
//     color = "orange";}
//   else {
//     color = "yellow";}

//   return color;
// }


//************************************** */

L.circle([45.52, -122.69], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.75,
  radius: 500000
}).addTo(myMap);


//   Create our map, giving it the darkmap and earthquakes layers to display on load

// var myMap = L.map("map", {
//   center: [37.09, -95.71],
//   zoom: 5,
//   layers: [baseMap
//     // , earthquakes
//   ]
// });



// // Create features

// function createFeatures(earthquakeData) {

//   var eachEarthquake = []; 
  
//   for (var i = 0; i < earthquakeData.length; i++) {
    
//     var thisFeature = earthquakeData[i]; 
//     var magnitude = thisFeature.properties.mag

//     eachEarthquake.push(
//       L.circle([thisFeature.geometry.coordinates[0], thisFeature.geometry.coordinates[1]], 
//         {
//         stroke: true,
//         fillOpacity: 0.75,
//         color: "white",        
//         fillColor: getColor(thisFeature.properties.mag),
//         radius: thisFeature.properties.mag * 10000
//       }).bindPopup("<h3>" +  thisFeature.properties.place +
//       "</h3><hr><p>" + thisFeature.properties.time +  
//       "</h3><hr><p>"  +  thisFeature.properties.mag +"</p>")
//       .addTo(myMap)
//     );
//     }


//   function onEachFeature(feature, layer) {
//     layer.bindPopup;
//   }

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    createFeatures: createFeatures
  });

//   // Sending our earthquakes layer to the createMap function
//   createMap(earthquakes);
// }

// function createMap(earthquakes) {

//  //   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Dark Map": baseMap
//   };

// //   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };



  // Create a layer control
  // Pass in our baseMaps and overlayMaps
//   // Add the layer control to the map

//  L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
// //   }).addTo(myMap);
// }
