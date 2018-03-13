$(document).ready(function () {
    var mymap = L.map('mymap').setView([28.05259082333986, 84.1552734375], 7);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibnVsbGxwb2ludGVyIiwiYSI6ImNqZWUwcTN6ZzEyajEzM283NWhicWFiaW4ifQ.sPJ6IpoUvwa3oDWgclG6cw'
    }).addTo(mymap);


    var geojsonFeature = [{
        "type": "Feature",
        "properties": {
            "name": "Coors Field",
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [85.3756, 27.7307]
        }
    },

        {
            "type": "Feature",
            "properties": {
                "name": "Moors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [85.4759, 27.7309]
            }
        }


    ]

//        var json = require('./nepal.json');
    var selected

    // Create new geojson layer
    new L.GeoJSON(geojsonFeature, {
        // Set default style
        'style': function () {
            return {
                'color': 'yellow',
            }
        }
    }).on('click', function (e) {
        // Check for selected
        if (selected) {
            // Reset selected to default style
            e.target.resetStyle(selected)
        }
        // Assign new selected
        selected = e.layer
        // Bring selected to front
   //     selected.bringToFront()
        // Style selected
        selected.bindPopup('hello');
    }).addTo(mymap);

//from geojson file adding all its properties to layer group

   /* var layerGroup = L.geoJSON(population, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<h1>' + feature.properties.name + '</h1><p>Population: ' + feature.properties.total + '</p>' + '<p>Female: ' + feature.properties.female + '</p>');
            layer.setStyle({backgroundColor: 'red'});

        }
    }).addTo(mymap);*/
    var layerGroup = L.geoJSON(population, {
        onEachFeature: function (feature, layer) {
           layer.bindPopup('<h1>' + feature.properties.name + '</h1><p>Population: ' + feature.properties.total + '</p>' + '<p>Female: ' + feature.properties.female + '</p>');
        layer.on('click', function (e) {
                // Check for selected

                // Style selected
            layer.setStyle({
                fillColor:'green',
                fillOpacity: 0.8,
                weight: 0.5
            });
            layer.bringToFront();
            var heroStyle={
                fillColor:'green',
                fillOpacity: 0.8,
                weight: 0.5
            };


           // layer.setStyle(heroStyle);
            }).addTo(mymap);

        }
    });
   /* layerGroup.setStyle({
        fillColor:'',
        fillOpacity: 0.8,
        weight: 0.5
    });*/
    layerGroup.addTo(mymap);






    /*

            var district=L.geoJson(population).addTo(mymap).bindPopup(function (layer) {
                return layer.feature.properties.DISTRICT;

            });

            L.geoJson(population).addTo(mymap).bindPopup(function (layer) {
                return layer.feature.properties.total;

            });

            var types = ['name','district','total']; // etc.
            // add an empty layer control to the map
            var layerControl = L.control.layers().addTo(mymap);

            // iterate over types, filter by that type, and format the layer for that feature type
            types.forEach(function(type) {
                var layer = L.geoJson(dtr_points, {
                    filter: function(feature, layer) {
                        return feature.properties == type;
                    },
                    onEachFeature: function(feature, layer) {
                        var link_url = "<a href='" + feature.properties.Link + "' target='_blank'>" + feature.properties.Name + "</a>"
                        layer.bindPopup(link_url);
                        // I don't see any L.icons in your example, but following what you have:
                        layer.setIcon(type);
                    }
                }
                // all done with the layer, add it to the control
                layerControl.addOverlay(layer, type);

            });




    */


//For api calls
    /*     xhr = new XMLHttpRequest();
        xhr.open('GET', 'nepal.geojson');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                L.geoJSON(JSON.parse(xhr.responseText)).addTo(mymap);
            }
        };
        xhr.send();*/


});

