import {
    data,
    markerData
}
from "./objects.js";
console.log("reading borders");
// make a for loop for this.


var borders = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "popupContent": data.Kingdom1.Name
        },

        "geometry": {
            "type": "Polygon",
            "coordinates": data.Kingdom1.borders
        },
        "style": {
            //all SVG styles allowed
            "fill": "red",
            "stroke-width": "3",
            "fill-opacity": 0.6
        },
    }, {
        "type": "Feature",
        "properties": {
            "popupContent": "na"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": data.Kingdom2.borders,
        }
    }, {
        "type": "Feature",
        "properties": {
            "popupContent": "na"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": data.Kingdom3.borders,
        },
    }, {
        "type": "Feature",
        "properties": {
            "popupContent": "<p>Dronem</p>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": data.Kingdom4.borders
        }
    }, {
        "type": "Feature",
        "properties": {
            "popupContent": "<p>Dronem</p>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": data.Kingdom5.borders
        }
    }, {
        "type": "Feature",
        "properties": {
            "popupContent": "<p>Dronem</p>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": data.Kingdom6.borders
        }
    }]
};

console.log("borders.js is working");

module.exports = {
    borders
};