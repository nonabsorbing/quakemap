// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";


// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  createFeatures(data.features);
});


//this function to run an onEachFeature? 
function createFeatures(earthquakeData) {
  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
        var thisFeature = earthquakeData; 
        console.log(thisFeature);
//         L.circle([thisFeature.geometry.coordinates[0], thisFeature.geometry.coordinates[1]], 
// {
//               stroke: true,
//               fillOpacity: 0.75,
//               color: "white",        
//               fillColor: "red",
//               radius: thisFeature.properties.mag * 10000
//             }).
layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" 
     
)}


  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

// //this function to run a for loop? 
// function createFeatures2(earthquakeData){
//   var eachEarthquake = []; 
  
//     for (var i = 0; i < earthquakeData.length; i++) 
//     {
      
//   //     var thisFeature = earthquakeData[i]; 
//   //     var magnitude = thisFeature.properties.mag
  
//   //     eachEarthquake.push(
//   //       L.circle([thisFeature.geometry.coordinates[0], thisFeature.geometry.coordinates[1]], 
//   //         {
//   //         stroke: true,
//   //         fillOpacity: 0.75,
//   //         color: "white",        
//   //         fillColor: getColor(thisFeature.properties.mag),
//   //         radius: thisFeature.properties.mag * 10000
//   //       }).bindPopup("<h3>" +  thisFeature.properties.place +
//   //       "</h3><hr><p>" + thisFeature.properties.time +  
//   //       "</h3><hr><p>"  +  thisFeature.properties.mag +"</p>")
//   //       .addTo(myMap)
//   //     );
//     }
    
//     var earthquakes = L.geoJSON(earthquakeData, {
//       onEachFeature: onEachFeature
//     });
  
//     // Sending our earthquakes layer to the createMap function
//     createMap(earthquakes);
// }




function createMap(earthquakes) {

  // Define darkmap layers
  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Dark Map": darkmap
  };



  // Create overlay object to hold our overlay layer
  // var overlayMaps = {
  //   Earthquakes: earthquakes
  // };




  // Create our map, giving it the darkmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [darkmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps).addTo(myMap);

  L.circle([45, -93],  
            {
            stroke: true,
            fillOpacity: 0.75,
            color: "white", 
            radius: 100000})        
    //         fillColor: getColor(thisFeature.properties.mag),

    //       }).bindPopup("<h3>" +  thisFeature.properties.place +
    //       "</h3><hr><p>" + thisFeature.properties.time +  
    //       "</h3><hr><p>"  +  thisFeature.properties.mag +"</p>")
          .addTo(myMap);
}
