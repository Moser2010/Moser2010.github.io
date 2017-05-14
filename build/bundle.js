/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _leaflet = __webpack_require__(1);

var L = _interopRequireWildcard(_leaflet);

__webpack_require__(3);

var _objects = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mymap = L.map('map', {
    zoomControl: false,
    attributionControl: false
}).setView([0, 0], 2); /*Add a git remote in the Cloud9 console. Should look like this (replace the git url with your repo url):
                       
                       git remote add origin git@github.com:C9Support/testPush.git 
                       Add files and commit them:
                       
                       git add . 
                       git commit -m "First commit"
                       Push to github:
                       
                       git push -u origin master
                       */

L.tileLayer('/Transer_folder/tiles/tiles/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 4,
    continuousWorld: false,
    noWrap: true,
    bounds: bounds
}).addTo(mymap);
L.control.zoom({
    position: 'topleft'
}).addTo(mymap);

//Layers defined
var Capitol = L.layerGroup([]);
var Citadel = L.layerGroup([]);
var Docs = L.layerGroup([]);
var Dragon = L.layerGroup([]);
var OrcTown = L.layerGroup([]);
var Outpost = L.layerGroup([]);
var Ruins = L.layerGroup([]);
var DungeonTower = L.layerGroup([]);
var MilitaryBase = L.layerGroup([]);
var City = L.layerGroup([]);
var Village = L.layerGroup([]);
var Farms = L.layerGroup([]);
var Temple = L.layerGroup([]);
var OrcCitadel = L.layerGroup([]);
var Town = L.layerGroup([]);

var portalGroup = L.layerGroup([]);
var markers = L.layerGroup([Town, OrcCitadel, Temple, Farms, Village, City, MilitaryBase, DungeonTower, Ruins, Outpost, Dragon, Docs, Citadel, Capitol]).addTo(mymap);

var baseLayers = {
    "Markers": markers

};
var overlays = {
    "Capitol": Capitol,
    "City": City,
    "Town": Town,
    "Village": Village,
    "Temple": Temple,
    "Docs": Docs,
    "Farms": Farms,
    "Citadel": Citadel,
    "Dragons": Dragon,
    "Outpost": Outpost,
    "Ruins": Ruins,
    "Dungeon Tower": DungeonTower,
    "Millitary Tower": MilitaryBase,
    "Orc Citadel": OrcCitadel,
    "Portal": portalGroup,
    "Orc Town": OrcTown

};
L.control.layers(baseLayers, overlays, {
    position: "topleft"
}).addTo(mymap);

//Map boundries
var corner1 = L.latLng(85, 200),
    corner2 = L.latLng(-85, -200),
    bounds = L.latLngBounds(corner1, corner2);
mymap.setMaxBounds(bounds);

//svg icon defined
var capitol = L.icon({
    iconUrl: '/Transer_folder/Markers/Capitol_city.svg',
    iconSize: [85, 85],
    iconAnchor: [42.5, 42.5],
    popupAnchor: [0, 0]
});
var citadel = L.icon({
    iconUrl: '/Transer_folder/Markers/Citadel.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var docs = L.icon({
    iconUrl: '/Transer_folder/Markers/Docs.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0]
});
var dragon = L.icon({
    iconUrl: '/Transer_folder/Markers/dragon.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var orcTown = L.icon({
    iconUrl: '/Transer_folder/Markers/Orc_town.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var outpost = L.icon({
    iconUrl: '/Transer_folder/Markers/Outpost.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var ruins = L.icon({
    iconUrl: '/Transer_folder/Markers/ruins.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var tower = L.icon({
    iconUrl: '/Transer_folder/Markers/tower.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var tower2 = L.icon({
    iconUrl: '/Transer_folder/Markers/Tower2.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var town = L.icon({
    iconUrl: '/Transer_folder/Markers/Town.svg',
    iconSize: [60, 60],
    iconAnchor: [30, 30],
    popupAnchor: [0, 0]
});
var town2 = L.icon({
    iconUrl: '/Transer_folder/Markers/town2.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var village = L.icon({
    iconUrl: '/Transer_folder/Markers/village.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var windmill = L.icon({
    iconUrl: '/Transer_folder/Markers/windmill.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var temple = L.icon({
    iconUrl: '/Transer_folder/Markers/temple.svg',
    iconSize: [60, 60],
    iconAnchor: [30, 30],
    popupAnchor: [0, 0]
});
var orc_citadel = L.icon({
    iconUrl: '/Transer_folder/Markers/orc-citadel.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var portal = L.icon({
    iconUrl: '/Transer_folder/Markers/Portal.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var popup = L.popup();

function addMarkers() {
    _objects.markerData.Markers.forEach(function () {
        var _loop = function _loop(m) {
            var i = 0;
            switch (m) {
                case 'Capitol':
                    _objects.markerData.Markers[0]["Capitol"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Capitol"][i]["Cordidinates"], {
                            icon: capitol,
                            riseOnHover: true
                        }).bindPopup(_objects.markerData.Markers[0]["Capitol"][i]["Name"]);
                        Capitol.addLayer(newMarker);

                        i++;
                    });
                    break;
                case 'City':
                    _objects.markerData.Markers[0]["City"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["City"][i]["Cordidinates"], {
                            icon: town2,
                            riseOnHover: true
                        }).bindPopup(_objects.markerData.Markers[0]["City"][i]["Name"]);
                        City.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Docs':
                    _objects.markerData.Markers[0]["Docs"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Docs"][i]["Cordidinates"], {
                            icon: docs
                        }).bindPopup(_objects.markerData.Markers[0]["Docs"][i]["Name"]);
                        Docs.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Dragon':

                    _objects.markerData.Markers[0]["Dragon"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Dragon"][i]["Cordidinates"], {
                            icon: dragon
                        }).bindPopup(_objects.markerData.Markers[0]["Dragon"][i]["Name"]);
                        Dragon.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Dungeon Tower':
                    _objects.markerData.Markers[0]["Dungeon Tower"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Dungeon Tower"][i]["Cordidinates"], {
                            icon: tower2
                        }).bindPopup(_objects.markerData.Markers[0]["Dungeon Tower"][i]["Name"]);
                        DungeonTower.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Military Tower':
                    _objects.markerData.Markers[0]["Military Tower"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Military Tower"][i]["Cordidinates"], {
                            icon: tower
                        }).bindPopup(_objects.markerData.Markers[0]["Military Tower"][i]["Name"]);
                        MilitaryBase.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Orc Capitol':
                    _objects.markerData.Markers[0]["Orc Capitol"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Orc Capitol"][i]["Cordidinates"], {
                            icon: orc_citadel
                        }).bindPopup(_objects.markerData.Markers[0]["Orc Capitol"][i]["Name"]);
                        OrcCitadel.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Outpost':
                    _objects.markerData.Markers[0]["Outpost"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Outpost"][i]["Cordidinates"], {
                            icon: outpost
                        }).bindPopup(_objects.markerData.Markers[0]["Outpost"][i]["Name"]);
                        Outpost.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Ruins':
                    _objects.markerData.Markers[0]["Ruins"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Ruins"][i]["Cordidinates"], {
                            icon: ruins
                        }).bindPopup(_objects.markerData.Markers[0]["Ruins"][i]["Name"]);
                        Ruins.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Temple':
                    _objects.markerData.Markers[0]["Temple"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Temple"][i]["Cordidinates"], {
                            icon: temple
                        }).bindPopup(_objects.markerData.Markers[0]["Temple"][i]["Name"]);
                        Temple.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Town':
                    _objects.markerData.Markers[0]["Town"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Town"][i]["Cordidinates"], {
                            icon: town,
                            riseOnHover: true
                        }).bindPopup(_objects.markerData.Markers[0]["Town"][i]["Name"]);
                        Town.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Village':
                    _objects.markerData.Markers[0]["Village"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Village"][i]["Cordidinates"], {
                            icon: village,
                            riseOnHover: true
                        }).bindPopup(_objects.markerData.Markers[0]["Village"][i]["Name"]);
                        Village.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Windmill':
                    _objects.markerData.Markers[0]["Windmill"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Windmill"][i]["Cordidinates"], {
                            icon: windmill
                        }).bindPopup(_objects.markerData.Markers[0]["Windmill"][i]["Name"]);
                        Farms.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Citadel':
                    _objects.markerData.Markers[0]["Citadel"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Citadel"][i]["Cordidinates"], {
                            icon: citadel
                        }).bindPopup(_objects.markerData.Markers[0]["Citadel"][i]["Name"]);
                        Citadel.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Portal':
                    _objects.markerData.Markers[0]["Portal"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Portal"][i]["Cordidinates"], {
                            icon: portal,
                            riseOnHover: true
                        }).bindPopup(_objects.markerData.Markers[0]["Portal"][i]["Name"]);
                        portalGroup.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Orc Town':
                    _objects.markerData.Markers[0]["Orc Town"].forEach(function () {
                        var newMarker = L.marker(_objects.markerData.Markers[0]["Orc Town"][i]["Cordidinates"], {
                            icon: orcTown,
                            riseOnHover: true
                        }).bindPopup(_objects.markerData.Markers[0]["Orc Town"][i]["Name"]);
                        OrcTown.addLayer(newMarker);
                        i++;
                    });
                    break;
            }
        };

        for (var m in _objects.markerData.Markers[0]) {
            _loop(m);
        }
    });
}
addMarkers();
var mBar = document.getElementById('markerInfo');
var mBarState = false;
var mMarker = document.getElementsByClassName("leaflet-marker-icon");
var menu = document.getElementById("sidebar");
var map = document.getElementById("map");
var mButton = document.getElementById("hide-sidebar");
var mBarTitle = document.getElementsByClassName('title');
var exitBTN = document.getElementsByClassName('exit');
var worldHistoryContent = document.getElementsByClassName('worldHistory');
var section = document.getElementsByTagName('section');
var images = document.getElementById('image');

var modalContent = document.getElementsByClassName('modal-content');
var oModal = document.getElementsByClassName("openModal");
var cModal = document.getElementsByClassName("closeModal");
var mySlides = document.getElementsByClassName("slides");
var special = document.getElementById("religionSpecial");
var description = document.getElementById('description');
var races = document.getElementById('races');
var ruler = document.getElementById('ruler');
var government = document.getElementById('government');
var religion = document.getElementById('religion');
var history = document.getElementById('history');
var events = document.getElementById('events');
var ammenaties = document.getElementById('ammenaties');
var jobs = document.getElementById('jobs');
var navHist = document.getElementsByClassName('HIST');
var navKC = document.getElementsByClassName('KC');
var navLogo = document.getElementById('logo');
var navHome = document.getElementById('home');
var historySection = document.getElementById("worldHistory");
var kingdomsAndBorders = document.getElementById('kingdomsAndBorders');
var column = document.getElementById('column');
var localImg = document.getElementsByClassName('localImages');
var kingdomHistory = document.getElementsByClassName("kingdomHistory");
var accordianImage = document.getElementsByClassName("accordianImage");
var panelThumbImg = document.getElementsByClassName('panelThumbImg');
var kingdomGov = document.getElementsByClassName('kingdomGov');
var kingdomLE = document.getElementsByClassName('kingdomLE');
var kingdomReligion = document.getElementsByClassName('kingdomReligion');
var kingdomMajorCharactersName = document.getElementsByClassName('kingdomMajorCharactersName');
var majorCharacterImage = document.getElementsByClassName("majorCharacterImage");
var kingdomMajorCharactersTitle = document.getElementsByClassName('kingdomMajorCharactersTitle');
var kingdomMajorCharactersDescription = document.getElementsByClassName('kingdomMajorCharactersDescription');
var markerItemTitle = document.getElementsByClassName('markerItemTitle');
var navMHome = document.getElementById("mHome");

var i = 0;
var eleNum = 0;
for (var b in _objects.markerData.KingdomData[0]) {

    kingdomHistory[i].innerHTML = _objects.markerData.KingdomData[0][b]["History"];
    accordianImage[i].src = _objects.markerData.KingdomData[0][b]["Crest"];
    panelThumbImg[i].src = _objects.markerData.KingdomData[0][b]["Crest"];
    kingdomGov[i].innerHTML = _objects.markerData.KingdomData[0][b]["Government"];
    kingdomLE[i].innerHTML = _objects.markerData.KingdomData[0][b]["Law Enforcement"];
    kingdomReligion[i].innerHTML = _objects.markerData.KingdomData[0][b]["Religion"];
    for (var c = 0; c < _objects.markerData.KingdomData[0][b]['Major Characters'].length; c++) {
        majorCharacterImage[eleNum].src = _objects.markerData.KingdomData[0][b]['Major Characters'][c]["Image"];
        kingdomMajorCharactersName[eleNum].innerHTML = "<strong>Name:</strong> " + _objects.markerData.KingdomData[0][b]['Major Characters'][c]["Name"];
        kingdomMajorCharactersTitle[eleNum].innerHTML = "<strong>Title:</strong> " + _objects.markerData.KingdomData[0][b]['Major Characters'][c]["Title"];
        kingdomMajorCharactersDescription[eleNum].innerHTML = "<strong>Description:</strong> " + _objects.markerData.KingdomData[0][b]['Major Characters'][c]["Description"];

        eleNum++;
    }
    i++;
}

for (var _i = 0; _i < navHist.length; _i++) {
    navHist[_i].addEventListener('click', rotate);
    navKC[_i].addEventListener('click', rotate);
    navHome.addEventListener('click', rotate);
};

oModal[0].addEventListener('click', openModal);
cModal[0].addEventListener('click', closeModal);
worldHistoryContent[0].innerHTML = _objects.markerData["World History"];
mymap.addEventListener('click', function () {
    mBarState = false;
    mBar.style.display = 'none';
});

exitBTN[0].addEventListener('click', removeSlideImages);
Array.from(mMarker).forEach(function (element) {
    element.addEventListener('click', onMarkerClick);
});
/*
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);
*/
function rotate(navElement) {
    if (navElement.target.classList.contains("HIST")) {
        var audio = document.getElementById("audio");
        audio.volume = 0.1;
        audio.autoplay = true;
        audio.load();
        map.style.height = "0vh";
        historySection.style.height = "100vh";
        kingdomsAndBorders.style.height = "0vh";
        historySection.className += " padding-top";
        kingdomsAndBorders.classList.remove("padding-top");
        historySection.style.overflow = "auto";
    } else if (navElement.target.classList.contains("KC")) {
        var audio = document.getElementById("audio");
        audio.autoplay = false;
        audio.load();
        map.style.height = "0vh";
        historySection.style.height = "0vh";
        kingdomsAndBorders.style.height = "100vh";
        kingdomsAndBorders.style.overflow = "auto";
        kingdomsAndBorders.className += " padding-top";
        historySection.classList.remove("padding-top");
    } else if (navElement.target.id == navHome.id) {
        var audio = document.getElementById("audio");
        audio.autoplay = false;
        audio.load();
        map.style.height = "100vh";
        historySection.style.height = "0vh";
        kingdomsAndBorders.style.height = "0vh";
        kingdomsAndBorders.classList.remove("padding-top");
        historySection.classList.remove("padding-top");
        kingdomsAndBorders.style.overflow = "hidden";
    }
}

function onMarkerClick(e) {
    mBarState = true;
    while (localImg.length > 0) {
        column.removeChild(localImg[0]);
    }
    if (mBarState == true) {
        mBar.style.display = "block";
    } else {
        mBarState = false;
        mBar.style.display = 'none';
    }
}
//This whole thing needs to be redone to make it more dynamic. 
mymap.on('popupopen', function (e) {

    var marker = e.popup._content;
    var i = void 0;

    for (var c in _objects.markerData.Markers[0]) {
        console.log("start first for loop");
        for (i = 0; i < _objects.markerData.Markers[0][c].length; i++) {
            var _b = _objects.markerData.Markers[0][c][i]["Name"];
            var obj = _objects.markerData.Markers[0][c][i];
            //These two arrays and the html elements are order specific. If you change the order you have to change it everywhere.
            var k = [];
            var jsonArray = [];
            //let jsonArray = [obj["Races"], obj["Ruler"], obj["Description"], obj["Government"], obj["Religion and Gods"], obj["History"], obj["Ammenaties"], obj["Local Events"], obj["Local Jobs"]];
            var domArray = [races, ruler, description, government, religion, special, history, ammenaties, events, jobs];
            var d = 0;
            var q = 0;
            if (marker == _b) {
                for (var r in obj) {
                    switch (r.toLowerCase()) {
                        case 'icon':

                            break;
                        case 'cordidinates':
                            break;
                        case 'name':

                            break;
                        case 'images':
                            // code
                            break;

                        default:
                            k.push(r);
                            jsonArray.push(obj[r]);

                    }
                    q++;
                }
                console.log(k);

                mBarTitle[0].innerHTML = _b;
                while (d < domArray.length) {
                    var s = 0;
                    for (var s = 0; s < k.length; s++) {
                        console.log(k.length + "   " + domArray.length);
                        if (k[s].toLowerCase() == domArray[d].id && jsonArray[d] != undefined) {

                            switch (k[s]) {
                                case 'Religion':
                                    domArray[d].style.display = "block";
                                    domArray[d].innerHTML = jsonArray[s]["special"];
                                    domArray[5].innerHTML = jsonArray[s]["Gods"];
                                    markerItemTitle[d].style.display = "block";
                                    break;
                                case undefined:
                                    domArray[d].style.display = "none";
                                    markerItemTitle[d].style.display = "none";
                                    break;
                                default:
                                    domArray[d].style.display = "block";
                                    domArray[d].innerHTML = jsonArray[s];
                                    markerItemTitle[d].style.display = "block";
                            }
                            break;
                        } else {
                            domArray[d].style.display = "none";
                            markerItemTitle[d].style.display = "none";
                        }
                    }
                    d++;
                }
                images.src = _objects.markerData.Markers[0][c][i]["Images"][0]['Main Image'];
                images.style.width = '100%';
                mySlides[0].src = _objects.markerData.Markers[0][c][i]["Images"][1]['Regional Images'][0];
                sliderImages(c, i);
            }
        }
    }
});

function sliderImages(c, i) {
    for (var h = 0; h < _objects.markerData.Markers[0][c][i]["Images"][1]['Regional Images'].length; h++) {
        var img = document.createElement('img');
        var li = document.createElement('li');
        li.className = "flex-item localImages";
        img.src = _objects.markerData.Markers[0][c][i]["Images"][1]['Regional Images'][h];
        img.className = "demo";
        img.addEventListener('click', changeSlide);
        column.appendChild(li);
        li.appendChild(img);
    }
}

function removeSlideImages() {
    mBarState = false;
    mBar.style.display = 'none';
};

function changeSlide(e) {
    for (var c in _objects.markerData.Markers[0]) {
        for (var _i2 = 0; _i2 < _objects.markerData.Markers[0][c].length; _i2++) {
            if (_objects.markerData.Markers[0][c][_i2]["Images"] != undefined) {
                for (var h = 0; h < _objects.markerData.Markers[0][c][_i2]["Images"][1]['Regional Images'].length; h++) {
                    if (e.target.src == _objects.markerData.Markers[0][c][_i2]["Images"][1]['Regional Images'][h]) {
                        mySlides[0].src = _objects.markerData.Markers[0][c][_i2]["Images"][1]['Regional Images'][h];
                    }
                }
            }
        }
    }
};

function openModal() {
    document.getElementById('myModal').style.display = "block";
    mBar.style.overflow = "hidden";
    document.getElementsByTagName('nav')[0].style.display = "none";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementsByTagName('nav')[0].style.display = "block";
    mBar.style.overflow = "auto";
    while (localImg.length > 0) {
        column.removeChild(localImg[0]);
    }
}
var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    };
}

console.log("everything is working");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Leaflet 1.0.3+ed36a04, a JS library for interactive maps. http://leafletjs.com
 (c) 2010-2016 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
!function (t, e, i) {
  function n() {
    var e = t.L;
    o.noConflict = function () {
      return t.L = e, this;
    }, t.L = o;
  }
  var o = {
    version: "1.0.3+ed36a04"
  };
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = o : "function" == "function" && __webpack_require__(16) && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), "undefined" != typeof t && n(), o.Util = {
    extend: function extend(t) {
      var e, i, n, o;
      for (i = 1, n = arguments.length; i < n; i++) {
        o = arguments[i];
        for (e in o) {
          t[e] = o[e];
        }
      }
      return t;
    },
    create: Object.create || function () {
      function t() {}
      return function (e) {
        return t.prototype = e, new t();
      };
    }(),
    bind: function bind(t, e) {
      var i = Array.prototype.slice;
      if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function () {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    },
    stamp: function stamp(t) {
      return t._leaflet_id = t._leaflet_id || ++o.Util.lastId, t._leaflet_id;
    },
    lastId: 0,
    throttle: function throttle(t, e, i) {
      var n, o, s, r;
      return r = function r() {
        n = !1, o && (s.apply(i, o), o = !1);
      }, s = function s() {
        n ? o = arguments : (t.apply(i, arguments), setTimeout(r, e), n = !0);
      };
    },
    wrapNum: function wrapNum(t, e, i) {
      var n = e[1],
          o = e[0],
          s = n - o;
      return t === n && i ? t : ((t - o) % s + s) % s + o;
    },
    falseFn: function falseFn() {
      return !1;
    },
    formatNum: function formatNum(t, e) {
      var i = Math.pow(10, e || 5);
      return Math.round(t * i) / i;
    },
    trim: function trim(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    },
    splitWords: function splitWords(t) {
      return o.Util.trim(t).split(/\s+/);
    },
    setOptions: function setOptions(t, e) {
      t.hasOwnProperty("options") || (t.options = t.options ? o.Util.create(t.options) : {});
      for (var i in e) {
        t.options[i] = e[i];
      }return t.options;
    },
    getParamString: function getParamString(t, e, i) {
      var n = [];
      for (var o in t) {
        n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
      }return (e && e.indexOf("?") !== -1 ? "&" : "?") + n.join("&");
    },
    template: function template(t, e) {
      return t.replace(o.Util.templateRe, function (t, n) {
        var o = e[n];
        if (o === i) throw new Error("No value provided for variable " + t);
        return "function" == typeof o && (o = o(e)), o;
      });
    },
    templateRe: /\{ *([\w_\-]+) *\}/g,
    isArray: Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    },
    indexOf: function indexOf(t, e) {
      for (var i = 0; i < t.length; i++) {
        if (t[i] === e) return i;
      }return -1;
    },
    emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  }, function () {
    function e(e) {
      return t["webkit" + e] || t["moz" + e] || t["ms" + e];
    }

    function i(e) {
      var i = +new Date(),
          o = Math.max(0, 16 - (i - n));
      return n = i + o, t.setTimeout(e, o);
    }
    var n = 0,
        s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
        r = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
      t.clearTimeout(e);
    };
    o.Util.requestAnimFrame = function (e, n, r) {
      return r && s === i ? void e.call(n) : s.call(t, o.bind(e, n));
    }, o.Util.cancelAnimFrame = function (e) {
      e && r.call(t, e);
    };
  }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {}, o.Class.extend = function (t) {
    var e = function e() {
      this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    },
        i = e.__super__ = this.prototype,
        n = o.Util.create(i);
    n.constructor = e, e.prototype = n;
    for (var s in this) {
      this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
    }return t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = o.Util.extend(o.Util.create(n.options), t.options)), o.extend(n, t), n._initHooks = [], n.callInitHooks = function () {
      if (!this._initHooksCalled) {
        i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
        for (var t = 0, e = n._initHooks.length; t < e; t++) {
          n._initHooks[t].call(this);
        }
      }
    }, e;
  }, o.Class.include = function (t) {
    return o.extend(this.prototype, t), this;
  }, o.Class.mergeOptions = function (t) {
    return o.extend(this.prototype.options, t), this;
  }, o.Class.addInitHook = function (t) {
    var e = Array.prototype.slice.call(arguments, 1),
        i = "function" == typeof t ? t : function () {
      this[t].apply(this, e);
    };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
  }, o.Evented = o.Class.extend({
    on: function on(t, e, i) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var n in t) {
        this._on(n, t[n], e);
      } else {
        t = o.Util.splitWords(t);
        for (var s = 0, r = t.length; s < r; s++) {
          this._on(t[s], e, i);
        }
      }
      return this;
    },
    off: function off(t, e, i) {
      if (t) {
        if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var n in t) {
          this._off(n, t[n], e);
        } else {
          t = o.Util.splitWords(t);
          for (var s = 0, r = t.length; s < r; s++) {
            this._off(t[s], e, i);
          }
        }
      } else delete this._events;
      return this;
    },
    _on: function _on(t, e, n) {
      this._events = this._events || {};
      var o = this._events[t];
      o || (o = [], this._events[t] = o), n === this && (n = i);
      for (var s = {
        fn: e,
        ctx: n
      }, r = o, a = 0, h = r.length; a < h; a++) {
        if (r[a].fn === e && r[a].ctx === n) return;
      }r.push(s);
    },
    _off: function _off(t, e, n) {
      var s, r, a;
      if (this._events && (s = this._events[t])) {
        if (!e) {
          for (r = 0, a = s.length; r < a; r++) {
            s[r].fn = o.Util.falseFn;
          }return void delete this._events[t];
        }
        if (n === this && (n = i), s) for (r = 0, a = s.length; r < a; r++) {
          var h = s[r];
          if (h.ctx === n && h.fn === e) return h.fn = o.Util.falseFn, this._firingCount && (this._events[t] = s = s.slice()), void s.splice(r, 1);
        }
      }
    },
    fire: function fire(t, e, i) {
      if (!this.listens(t, i)) return this;
      var n = o.Util.extend({}, e, {
        type: t,
        target: this
      });
      if (this._events) {
        var s = this._events[t];
        if (s) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];
            h.fn.call(h.ctx || this, n);
          }
          this._firingCount--;
        }
      }
      return i && this._propagateEvent(n), this;
    },
    listens: function listens(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) return !0;
      if (e) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, e)) return !0;
      }return !1;
    },
    once: function once(t, e, i) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (var n in t) {
          this.once(n, t[n], e);
        }return this;
      }
      var s = o.bind(function () {
        this.off(t, e, i).off(t, s, i);
      }, this);
      return this.on(t, e, i).on(t, s, i);
    },
    addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[o.stamp(t)] = t, this;
    },
    removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[o.stamp(t)], this;
    },
    _propagateEvent: function _propagateEvent(t) {
      for (var e in this._eventParents) {
        this._eventParents[e].fire(t.type, o.extend({
          layer: t.target
        }, t), !0);
      }
    }
  });
  var s = o.Evented.prototype;
  s.addEventListener = s.on, s.removeEventListener = s.clearAllEventListeners = s.off, s.addOneTimeEventListener = s.once, s.fireEvent = s.fire, s.hasEventListeners = s.listens, o.Mixin = {
    Events: s
  }, function () {
    var i = navigator.userAgent.toLowerCase(),
        n = e.documentElement,
        s = "ActiveXObject" in t,
        r = i.indexOf("webkit") !== -1,
        a = i.indexOf("phantom") !== -1,
        h = i.search("android [23]") !== -1,
        l = i.indexOf("chrome") !== -1,
        u = i.indexOf("gecko") !== -1 && !r && !t.opera && !s,
        c = 0 === navigator.platform.indexOf("Win"),
        d = "undefined" != typeof orientation || i.indexOf("mobile") !== -1,
        _ = !t.PointerEvent && t.MSPointerEvent,
        m = t.PointerEvent || _,
        p = s && "transition" in n.style,
        f = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix() && !h,
        g = "MozPerspective" in n.style,
        v = "OTransition" in n.style,
        y = !t.L_NO_TOUCH && (m || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch);
    o.Browser = {
      ie: s,
      ielt9: s && !e.addEventListener,
      edge: "msLaunchUri" in navigator && !("documentMode" in e),
      webkit: r,
      gecko: u,
      android: i.indexOf("android") !== -1,
      android23: h,
      chrome: l,
      safari: !l && i.indexOf("safari") !== -1,
      win: c,
      ie3d: p,
      webkit3d: f,
      gecko3d: g,
      opera12: v,
      any3d: !t.L_DISABLE_3D && (p || f || g) && !v && !a,
      mobile: d,
      mobileWebkit: d && r,
      mobileWebkit3d: d && f,
      mobileOpera: d && t.opera,
      mobileGecko: d && u,
      touch: !!y,
      msPointer: !!_,
      pointer: !!m,
      retina: (t.devicePixelRatio || t.screen.deviceXDPI / t.screen.logicalXDPI) > 1
    };
  }(), o.Point = function (t, e, i) {
    this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
  }, o.Point.prototype = {
    clone: function clone() {
      return new o.Point(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(o.point(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(o.point(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new o.Point(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new o.Point(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      t = o.point(t);
      var e = t.x - this.x,
          i = t.y - this.y;
      return Math.sqrt(e * e + i * i);
    },
    equals: function equals(t) {
      return t = o.point(t), t.x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")";
    }
  }, o.point = function (t, e, n) {
    return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "x" in t && "y" in t ? new o.Point(t.x, t.y) : new o.Point(t, e, n);
  }, o.Bounds = function (t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) {
      this.extend(i[n]);
    }
  }, o.Bounds.prototype = {
    extend: function extend(t) {
      return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    },
    getCenter: function getCenter(t) {
      return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return new o.Point(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return new o.Point(this.max.x, this.min.y);
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var e, i;
      return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = o.bounds(t);
      var e = this.min,
          i = this.max,
          n = t.min,
          s = t.max,
          r = s.x >= e.x && n.x <= i.x,
          a = s.y >= e.y && n.y <= i.y;
      return r && a;
    },
    overlaps: function overlaps(t) {
      t = o.bounds(t);
      var e = this.min,
          i = this.max,
          n = t.min,
          s = t.max,
          r = s.x > e.x && n.x < i.x,
          a = s.y > e.y && n.y < i.y;
      return r && a;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    }
  }, o.bounds = function (t, e) {
    return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e);
  }, o.Transformation = function (t, e, i, n) {
    this._a = t, this._b = e, this._c = i, this._d = n;
  }, o.Transformation.prototype = {
    transform: function transform(t, e) {
      return this._transform(t.clone(), e);
    },
    _transform: function _transform(t, e) {
      return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, e) {
      return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
    }
  }, o.DomUtil = {
    get: function get(t) {
      return "string" == typeof t ? e.getElementById(t) : t;
    },
    getStyle: function getStyle(t, i) {
      var n = t.style[i] || t.currentStyle && t.currentStyle[i];
      if ((!n || "auto" === n) && e.defaultView) {
        var o = e.defaultView.getComputedStyle(t, null);
        n = o ? o[i] : null;
      }
      return "auto" === n ? null : n;
    },
    create: function create(t, i, n) {
      var o = e.createElement(t);
      return o.className = i || "", n && n.appendChild(o), o;
    },
    remove: function remove(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    },
    empty: function empty(t) {
      for (; t.firstChild;) {
        t.removeChild(t.firstChild);
      }
    },
    toFront: function toFront(t) {
      t.parentNode.appendChild(t);
    },
    toBack: function toBack(t) {
      var e = t.parentNode;
      e.insertBefore(t, e.firstChild);
    },
    hasClass: function hasClass(t, e) {
      if (t.classList !== i) return t.classList.contains(e);
      var n = o.DomUtil.getClass(t);
      return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
    },
    addClass: function addClass(t, e) {
      if (t.classList !== i) for (var n = o.Util.splitWords(e), s = 0, r = n.length; s < r; s++) {
        t.classList.add(n[s]);
      } else if (!o.DomUtil.hasClass(t, e)) {
        var a = o.DomUtil.getClass(t);
        o.DomUtil.setClass(t, (a ? a + " " : "") + e);
      }
    },
    removeClass: function removeClass(t, e) {
      t.classList !== i ? t.classList.remove(e) : o.DomUtil.setClass(t, o.Util.trim((" " + o.DomUtil.getClass(t) + " ").replace(" " + e + " ", " ")));
    },
    setClass: function setClass(t, e) {
      t.className.baseVal === i ? t.className = e : t.className.baseVal = e;
    },
    getClass: function getClass(t) {
      return t.className.baseVal === i ? t.className : t.className.baseVal;
    },
    setOpacity: function setOpacity(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && o.DomUtil._setOpacityIE(t, e);
    },
    _setOpacityIE: function _setOpacityIE(t, e) {
      var i = !1,
          n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch (t) {
        if (1 === e) return;
      }
      e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
    },
    testProp: function testProp(t) {
      for (var i = e.documentElement.style, n = 0; n < t.length; n++) {
        if (t[n] in i) return t[n];
      }return !1;
    },
    setTransform: function setTransform(t, e, i) {
      var n = e || new o.Point(0, 0);
      t.style[o.DomUtil.TRANSFORM] = (o.Browser.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + Math.round(n.x) + "px," + Math.round(n.y) + "px,0)") + (i ? " scale(" + i + ")" : "");
    },
    setPosition: function setPosition(t, e) {
      t._leaflet_pos = e, o.Browser.any3d ? o.DomUtil.setTransform(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    },
    getPosition: function getPosition(t) {
      return t._leaflet_pos || new o.Point(0, 0);
    }
  }, function () {
    o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
    var i = o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    if (o.DomUtil.TRANSITION_END = "webkitTransition" === i || "OTransition" === i ? i + "End" : "transitionend", "onselectstart" in e) o.DomUtil.disableTextSelection = function () {
      o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault);
    }, o.DomUtil.enableTextSelection = function () {
      o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault);
    };else {
      var n = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
      o.DomUtil.disableTextSelection = function () {
        if (n) {
          var t = e.documentElement.style;
          this._userSelect = t[n], t[n] = "none";
        }
      }, o.DomUtil.enableTextSelection = function () {
        n && (e.documentElement.style[n] = this._userSelect, delete this._userSelect);
      };
    }
    o.DomUtil.disableImageDrag = function () {
      o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault);
    }, o.DomUtil.enableImageDrag = function () {
      o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault);
    }, o.DomUtil.preventOutline = function (e) {
      for (; e.tabIndex === -1;) {
        e = e.parentNode;
      }e && e.style && (o.DomUtil.restoreOutline(), this._outlineElement = e, this._outlineStyle = e.style.outline, e.style.outline = "none", o.DomEvent.on(t, "keydown", o.DomUtil.restoreOutline, this));
    }, o.DomUtil.restoreOutline = function () {
      this._outlineElement && (this._outlineElement.style.outline = this._outlineStyle, delete this._outlineElement, delete this._outlineStyle, o.DomEvent.off(t, "keydown", o.DomUtil.restoreOutline, this));
    };
  }(), o.LatLng = function (t, e, n) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
    this.lat = +t, this.lng = +e, n !== i && (this.alt = +n);
  }, o.LatLng.prototype = {
    equals: function equals(t, e) {
      if (!t) return !1;
      t = o.latLng(t);
      var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
      return n <= (e === i ? 1e-9 : e);
    },
    toString: function toString(t) {
      return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")";
    },
    distanceTo: function distanceTo(t) {
      return o.CRS.Earth.distance(this, o.latLng(t));
    },
    wrap: function wrap() {
      return o.CRS.Earth.wrapLatLng(this);
    },
    toBounds: function toBounds(t) {
      var e = 180 * t / 40075017,
          i = e / Math.cos(Math.PI / 180 * this.lat);
      return o.latLngBounds([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
    },
    clone: function clone() {
      return new o.LatLng(this.lat, this.lng, this.alt);
    }
  }, o.latLng = function (t, e, n) {
    return t instanceof o.LatLng ? t : o.Util.isArray(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new o.LatLng(t[0], t[1], t[2]) : 2 === t.length ? new o.LatLng(t[0], t[1]) : null : t === i || null === t ? t : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === i ? null : new o.LatLng(t, e, n);
  }, o.LatLngBounds = function (t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) {
      this.extend(i[n]);
    }
  }, o.LatLngBounds.prototype = {
    extend: function extend(t) {
      var e,
          i,
          n = this._southWest,
          s = this._northEast;
      if (t instanceof o.LatLng) e = t, i = t;else {
        if (!(t instanceof o.LatLngBounds)) return t ? this.extend(o.latLng(t) || o.latLngBounds(t)) : this;
        if (e = t._southWest, i = t._northEast, !e || !i) return this;
      }
      return n || s ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), s.lat = Math.max(i.lat, s.lat), s.lng = Math.max(i.lng, s.lng)) : (this._southWest = new o.LatLng(e.lat, e.lng), this._northEast = new o.LatLng(i.lat, i.lng)), this;
    },
    pad: function pad(t) {
      var e = this._southWest,
          i = this._northEast,
          n = Math.abs(e.lat - i.lat) * t,
          s = Math.abs(e.lng - i.lng) * t;
      return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s));
    },
    getCenter: function getCenter() {
      return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new o.LatLng(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new o.LatLng(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = "number" == typeof t[0] || t instanceof o.LatLng || "lat" in t ? o.latLng(t) : o.latLngBounds(t);
      var e,
          i,
          n = this._southWest,
          s = this._northEast;
      return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng;
    },
    intersects: function intersects(t) {
      t = o.latLngBounds(t);
      var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          s = t.getNorthEast(),
          r = s.lat >= e.lat && n.lat <= i.lat,
          a = s.lng >= e.lng && n.lng <= i.lng;
      return r && a;
    },
    overlaps: function overlaps(t) {
      t = o.latLngBounds(t);
      var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          s = t.getNorthEast(),
          r = s.lat > e.lat && n.lat < i.lat,
          a = s.lng > e.lng && n.lng < i.lng;
      return r && a;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t) {
      return !!t && (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  }, o.latLngBounds = function (t, e) {
    return t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e);
  }, o.Projection = {}, o.Projection.LonLat = {
    project: function project(t) {
      return new o.Point(t.lng, t.lat);
    },
    unproject: function unproject(t) {
      return new o.LatLng(t.y, t.x);
    },
    bounds: o.bounds([-180, -90], [180, 90])
  }, o.Projection.SphericalMercator = {
    R: 6378137,
    MAX_LATITUDE: 85.0511287798,
    project: function project(t) {
      var e = Math.PI / 180,
          i = this.MAX_LATITUDE,
          n = Math.max(Math.min(i, t.lat), -i),
          s = Math.sin(n * e);
      return new o.Point(this.R * t.lng * e, this.R * Math.log((1 + s) / (1 - s)) / 2);
    },
    unproject: function unproject(t) {
      var e = 180 / Math.PI;
      return new o.LatLng((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
    },
    bounds: function () {
      var t = 6378137 * Math.PI;
      return o.bounds([-t, -t], [t, t]);
    }()
  }, o.CRS = {
    latLngToPoint: function latLngToPoint(t, e) {
      var i = this.projection.project(t),
          n = this.scale(e);
      return this.transformation._transform(i, n);
    },
    pointToLatLng: function pointToLatLng(t, e) {
      var i = this.scale(e),
          n = this.transformation.untransform(t, i);
      return this.projection.unproject(n);
    },
    project: function project(t) {
      return this.projection.project(t);
    },
    unproject: function unproject(t) {
      return this.projection.unproject(t);
    },
    scale: function scale(t) {
      return 256 * Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    },
    getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;
      var e = this.projection.bounds,
          i = this.scale(t),
          n = this.transformation.transform(e.min, i),
          s = this.transformation.transform(e.max, i);
      return o.bounds(n, s);
    },
    infinite: !1,
    wrapLatLng: function wrapLatLng(t) {
      var e = this.wrapLng ? o.Util.wrapNum(t.lng, this.wrapLng, !0) : t.lng,
          i = this.wrapLat ? o.Util.wrapNum(t.lat, this.wrapLat, !0) : t.lat,
          n = t.alt;
      return o.latLng(i, e, n);
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      var e = t.getCenter(),
          i = this.wrapLatLng(e),
          n = e.lat - i.lat,
          s = e.lng - i.lng;
      if (0 === n && 0 === s) return t;
      var r = t.getSouthWest(),
          a = t.getNorthEast(),
          h = o.latLng({
        lat: r.lat - n,
        lng: r.lng - s
      }),
          l = o.latLng({
        lat: a.lat - n,
        lng: a.lng - s
      });
      return new o.LatLngBounds(h, l);
    }
  }, o.CRS.Simple = o.extend({}, o.CRS, {
    projection: o.Projection.LonLat,
    transformation: new o.Transformation(1, 0, -1, 0),
    scale: function scale(t) {
      return Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    },
    distance: function distance(t, e) {
      var i = e.lng - t.lng,
          n = e.lat - t.lat;
      return Math.sqrt(i * i + n * n);
    },
    infinite: !0
  }), o.CRS.Earth = o.extend({}, o.CRS, {
    wrapLng: [-180, 180],
    R: 6371e3,
    distance: function distance(t, e) {
      var i = Math.PI / 180,
          n = t.lat * i,
          o = e.lat * i,
          s = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((e.lng - t.lng) * i);
      return this.R * Math.acos(Math.min(s, 1));
    }
  }), o.CRS.EPSG3857 = o.extend({}, o.CRS.Earth, {
    code: "EPSG:3857",
    projection: o.Projection.SphericalMercator,
    transformation: function () {
      var t = .5 / (Math.PI * o.Projection.SphericalMercator.R);
      return new o.Transformation(t, .5, -t, .5);
    }()
  }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
    code: "EPSG:900913"
  }), o.CRS.EPSG4326 = o.extend({}, o.CRS.Earth, {
    code: "EPSG:4326",
    projection: o.Projection.LonLat,
    transformation: new o.Transformation(1 / 180, 1, -1 / 180, .5)
  }), o.Map = o.Evented.extend({
    options: {
      crs: o.CRS.EPSG3857,
      center: i,
      zoom: i,
      minZoom: i,
      maxZoom: i,
      layers: [],
      maxBounds: i,
      renderer: i,
      zoomAnimation: !0,
      zoomAnimationThreshold: 4,
      fadeAnimation: !0,
      markerZoomAnimation: !0,
      transform3DLimit: 8388608,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: !0
    },
    initialize: function initialize(t, e) {
      e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== i && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {
        reset: !0
      }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), o.DomEvent.on(this._proxy, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    },
    setView: function setView(t, e, n) {
      if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && n !== !0) {
        n.animate !== i && (n.zoom = o.extend({
          animate: n.animate
        }, n.zoom), n.pan = o.extend({
          animate: n.animate,
          duration: n.duration
        }, n.pan));
        var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
        if (s) return clearTimeout(this._sizeTimer), this;
      }
      return this._resetView(t, e), this;
    },
    setZoom: function setZoom(t, e) {
      return this._loaded ? this.setView(this.getCenter(), t, {
        zoom: e
      }) : (this._zoom = t, this);
    },
    zoomIn: function zoomIn(t, e) {
      return t = t || (o.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
    },
    zoomOut: function zoomOut(t, e) {
      return t = t || (o.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
    },
    setZoomAround: function setZoomAround(t, e, i) {
      var n = this.getZoomScale(e),
          s = this.getSize().divideBy(2),
          r = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
          a = r.subtract(s).multiplyBy(1 - 1 / n),
          h = this.containerPointToLatLng(s.add(a));
      return this.setView(h, e, {
        zoom: i
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(t, e) {
      e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
      var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
          n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
          s = this.getBoundsZoom(t, !1, i.add(n));
      s = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, s) : s;
      var r = n.subtract(i).divideBy(2),
          a = this.project(t.getSouthWest(), s),
          h = this.project(t.getNorthEast(), s),
          l = this.unproject(a.add(h).divideBy(2).add(r), s);
      return {
        center: l,
        zoom: s
      };
    },
    fitBounds: function fitBounds(t, e) {
      if (t = o.latLngBounds(t), !t.isValid()) throw new Error("Bounds are not valid.");
      var i = this._getBoundsCenterZoom(t, e);
      return this.setView(i.center, i.zoom, e);
    },
    fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    },
    panTo: function panTo(t, e) {
      return this.setView(t, this._zoom, {
        pan: e
      });
    },
    panBy: function panBy(t, e) {
      if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
      if (e.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
      if (this._panAnim || (this._panAnim = new o.PosAnimation(), this._panAnim.on({
        step: this._onPanTransitionStep,
        end: this._onPanTransitionEnd
      }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
        o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
        var i = this._getMapPanePos().subtract(t).round();
        this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity);
      } else this._rawPanBy(t), this.fire("move").fire("moveend");
      return this;
    },
    flyTo: function flyTo(t, e, n) {
      function s(t) {
        var e = t ? -1 : 1,
            i = t ? v : g,
            n = v * v - g * g + e * L * L * y * y,
            o = 2 * i * L * y,
            s = n / o,
            r = Math.sqrt(s * s + 1) - s,
            a = r < 1e-9 ? -18 : Math.log(r);
        return a;
      }

      function r(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }

      function a(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }

      function h(t) {
        return r(t) / a(t);
      }

      function l(t) {
        return g * (a(x) / a(x + P * t));
      }

      function u(t) {
        return g * (a(x) * h(x + P * t) - r(x)) / L;
      }

      function c(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }

      function d() {
        var i = (Date.now() - w) / T,
            n = c(i) * b;
        i <= 1 ? (this._flyToFrame = o.Util.requestAnimFrame(d, this), this._move(this.unproject(_.add(m.subtract(_).multiplyBy(u(n) / y)), f), this.getScaleZoom(g / l(n), f), {
          flyTo: !0
        })) : this._move(t, e)._moveEnd(!0);
      }
      if (n = n || {}, n.animate === !1 || !o.Browser.any3d) return this.setView(t, e, n);
      this._stop();
      var _ = this.project(this.getCenter()),
          m = this.project(t),
          p = this.getSize(),
          f = this._zoom;
      t = o.latLng(t), e = e === i ? f : e;
      var g = Math.max(p.x, p.y),
          v = g * this.getZoomScale(f, e),
          y = m.distanceTo(_) || 1,
          P = 1.42,
          L = P * P,
          x = s(0),
          w = Date.now(),
          b = (s(1) - x) / P,
          T = n.duration ? 1e3 * n.duration : 1e3 * b * .8;
      return this._moveStart(!0), d.call(this), this;
    },
    flyToBounds: function flyToBounds(t, e) {
      var i = this._getBoundsCenterZoom(t, e);
      return this.flyTo(i.center, i.zoom, e);
    },
    setMaxBounds: function setMaxBounds(t) {
      return t = o.latLngBounds(t), t.isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    },
    setMinZoom: function setMinZoom(t) {
      return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this;
    },
    setMaxZoom: function setMaxZoom(t) {
      return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this;
    },
    panInsideBounds: function panInsideBounds(t, e) {
      this._enforcingBounds = !0;
      var i = this.getCenter(),
          n = this._limitCenter(i, this._zoom, o.latLngBounds(t));
      return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
    },
    invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;
      t = o.extend({
        animate: !1,
        pan: !0
      }, t === !0 ? {
        animate: !0
      } : t);
      var e = this.getSize();
      this._sizeChanged = !0, this._lastCenter = null;
      var i = this.getSize(),
          n = e.divideBy(2).round(),
          s = i.divideBy(2).round(),
          r = n.subtract(s);
      return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
        oldSize: e,
        newSize: i
      })) : this;
    },
    stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    },
    locate: function locate(t) {
      if (t = this._locateOptions = o.extend({
        timeout: 1e4,
        watch: !1
      }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;
      var e = o.bind(this._handleGeolocationResponse, this),
          i = o.bind(this._handleGeolocationError, this);
      return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
    },
    stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    },
    _handleGeolocationError: function _handleGeolocationError(t) {
      var e = t.code,
          i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
      this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: e,
        message: "Geolocation error: " + i + "."
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      var e = t.coords.latitude,
          i = t.coords.longitude,
          n = new o.LatLng(e, i),
          s = n.toBounds(t.coords.accuracy),
          r = this._locateOptions;
      if (r.setView) {
        var a = this.getBoundsZoom(s);
        this.setView(n, r.maxZoom ? Math.min(a, r.maxZoom) : a);
      }
      var h = {
        latlng: n,
        bounds: s,
        timestamp: t.timestamp
      };
      for (var l in t.coords) {
        "number" == typeof t.coords[l] && (h[l] = t.coords[l]);
      }this.fire("locationfound", h);
    },
    addHandler: function addHandler(t, e) {
      if (!e) return this;
      var i = this[t] = new e(this);
      return this._handlers.push(i), this.options[t] && i.enable(), this;
    },
    remove: function remove() {
      if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
      try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = i, this._containerId = i;
      }
      o.DomUtil.remove(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");
      for (var t in this._layers) {
        this._layers[t].remove();
      }return this;
    },
    createPane: function createPane(t, e) {
      var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
          n = o.DomUtil.create("div", i, e || this._mapPane);
      return t && (this._panes[t] = n), n;
    },
    getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function getZoom() {
      return this._zoom;
    },
    getBounds: function getBounds() {
      var t = this.getPixelBounds(),
          e = this.unproject(t.getBottomLeft()),
          i = this.unproject(t.getTopRight());
      return new o.LatLngBounds(e, i);
    },
    getMinZoom: function getMinZoom() {
      return this.options.minZoom === i ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    getMaxZoom: function getMaxZoom() {
      return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    },
    getBoundsZoom: function getBoundsZoom(t, e, i) {
      t = o.latLngBounds(t), i = o.point(i || [0, 0]);
      var n = this.getZoom() || 0,
          s = this.getMinZoom(),
          r = this.getMaxZoom(),
          a = t.getNorthWest(),
          h = t.getSouthEast(),
          l = this.getSize().subtract(i),
          u = o.bounds(this.project(h, n), this.project(a, n)).getSize(),
          c = o.Browser.any3d ? this.options.zoomSnap : 1,
          d = Math.min(l.x / u.x, l.y / u.y);
      return n = this.getScaleZoom(d, n), c && (n = Math.round(n / (c / 100)) * (c / 100), n = e ? Math.ceil(n / c) * c : Math.floor(n / c) * c), Math.max(s, Math.min(r, n));
    },
    getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new o.Point(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    },
    getPixelBounds: function getPixelBounds(t, e) {
      var i = this._getTopLeftPoint(t, e);
      return new o.Bounds(i, i.add(this.getSize()));
    },
    getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    },
    getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(t === i ? this.getZoom() : t);
    },
    getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    },
    getPanes: function getPanes() {
      return this._panes;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    getZoomScale: function getZoomScale(t, e) {
      var n = this.options.crs;
      return e = e === i ? this._zoom : e, n.scale(t) / n.scale(e);
    },
    getScaleZoom: function getScaleZoom(t, e) {
      var n = this.options.crs;
      e = e === i ? this._zoom : e;
      var o = n.zoom(t * n.scale(e));
      return isNaN(o) ? 1 / 0 : o;
    },
    project: function project(t, e) {
      return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e);
    },
    unproject: function unproject(t, e) {
      return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e);
    },
    layerPointToLatLng: function layerPointToLatLng(t) {
      var e = o.point(t).add(this.getPixelOrigin());
      return this.unproject(e);
    },
    latLngToLayerPoint: function latLngToLayerPoint(t) {
      var e = this.project(o.latLng(t))._round();
      return e._subtract(this.getPixelOrigin());
    },
    wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(o.latLng(t));
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(o.latLngBounds(t));
    },
    distance: function distance(t, e) {
      return this.options.crs.distance(o.latLng(t), o.latLng(e));
    },
    containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return o.point(t).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return o.point(t).add(this._getMapPanePos());
    },
    containerPointToLatLng: function containerPointToLatLng(t) {
      var e = this.containerPointToLayerPoint(o.point(t));
      return this.layerPointToLatLng(e);
    },
    latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)));
    },
    mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return o.DomEvent.getMousePosition(t, this._container);
    },
    mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    },
    mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    },
    _initContainer: function _initContainer(t) {
      var e = this._container = o.DomUtil.get(t);
      if (!e) throw new Error("Map container not found.");
      if (e._leaflet_id) throw new Error("Map container is already initialized.");
      o.DomEvent.addListener(e, "scroll", this._onScroll, this), this._containerId = o.Util.stamp(e);
    },
    _initLayout: function _initLayout() {
      var t = this._container;
      this._fadeAnimated = this.options.fadeAnimation && o.Browser.any3d, o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (o.Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
      var e = o.DomUtil.getStyle(t, "position");
      "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    },
    _initPanes: function _initPanes() {
      var t = this._panes = {};
      this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, "leaflet-zoom-hide"), o.DomUtil.addClass(t.shadowPane, "leaflet-zoom-hide"));
    },
    _resetView: function _resetView(t, e) {
      o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0));
      var i = !this._loaded;
      this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
      var n = this._zoom !== e;
      this._moveStart(n)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load");
    },
    _moveStart: function _moveStart(t) {
      return t && this.fire("zoomstart"), this.fire("movestart");
    },
    _move: function _move(t, e, n) {
      e === i && (e = this._zoom);
      var o = this._zoom !== e;
      return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (o || n && n.pinch) && this.fire("zoom", n), this.fire("move", n);
    },
    _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    },
    _stop: function _stop() {
      return o.Util.cancelAnimFrame(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    },
    _rawPanBy: function _rawPanBy(t) {
      o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    },
    _initEvents: function _initEvents(e) {
      if (o.DomEvent) {
        this._targets = {}, this._targets[o.stamp(this._container)] = this;
        var i = e ? "off" : "on";
        o.DomEvent[i](this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && o.DomEvent[i](t, "resize", this._onResize, this), o.Browser.any3d && this.options.transform3DLimit && this[i]("moveend", this._onMoveEnd);
      }
    },
    _onResize: function _onResize() {
      o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
        this.invalidateSize({
          debounceMoveend: !0
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();
      Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    },
    _findEventTargets: function _findEventTargets(t, e) {
      for (var i, n = [], s = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, a = !1; r;) {
        if (i = this._targets[o.stamp(r)], i && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
          a = !0;
          break;
        }
        if (i && i.listens(e, !0)) {
          if (s && !o.DomEvent._isExternalTarget(r, t)) break;
          if (n.push(i), s) break;
        }
        if (r === this._container) break;
        r = r.parentNode;
      }
      return n.length || a || s || !o.DomEvent._isExternalTarget(r, t) || (n = [this]), n;
    },
    _handleDOMEvent: function _handleDOMEvent(t) {
      if (this._loaded && !o.DomEvent._skipped(t)) {
        var e = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
        "mousedown" === e && o.DomUtil.preventOutline(t.target || t.srcElement), this._fireDOMEvent(t, e);
      }
    },
    _fireDOMEvent: function _fireDOMEvent(t, e, i) {
      if ("click" === t.type) {
        var n = o.Util.extend({}, t);
        n.type = "preclick", this._fireDOMEvent(n, n.type, i);
      }
      if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e)), i.length)) {
        var s = i[0];
        "contextmenu" === e && s.listens(e, !0) && o.DomEvent.preventDefault(t);
        var r = {
          originalEvent: t
        };
        if ("keypress" !== t.type) {
          var a = s instanceof o.Marker;
          r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint);
        }
        for (var h = 0; h < i.length; h++) {
          if (i[h].fire(e, r, !0), r.originalEvent._stopped || i[h].options.nonBubblingEvents && o.Util.indexOf(i[h].options.nonBubblingEvents, e) !== -1) return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(t) {
      return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var t = 0, e = this._handlers.length; t < e; t++) {
        this._handlers[t].disable();
      }
    },
    whenReady: function whenReady(t, e) {
      return this._loaded ? t.call(e || this, {
        target: this
      }) : this.on("load", t, e), this;
    },
    _getMapPanePos: function _getMapPanePos() {
      return o.DomUtil.getPosition(this._mapPane) || new o.Point(0, 0);
    },
    _moved: function _moved() {
      var t = this._getMapPanePos();
      return t && !t.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(t, e) {
      var n = t && e !== i ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
      return n.subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(t, e) {
      var i = this.getSize()._divideBy(2);
      return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, e, i) {
      var n = this._getNewPixelOrigin(i, e);
      return this.project(t, e)._subtract(n);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, e, i) {
      var n = this._getNewPixelOrigin(i, e);
      return o.bounds([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)]);
    },
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    },
    _limitCenter: function _limitCenter(t, e, i) {
      if (!i) return t;
      var n = this.project(t, e),
          s = this.getSize().divideBy(2),
          r = new o.Bounds(n.subtract(s), n.add(s)),
          a = this._getBoundsOffset(r, i, e);
      return a.round().equals([0, 0]) ? t : this.unproject(n.add(a), e);
    },
    _limitOffset: function _limitOffset(t, e) {
      if (!e) return t;
      var i = this.getPixelBounds(),
          n = new o.Bounds(i.min.add(t), i.max.add(t));
      return t.add(this._getBoundsOffset(n, e));
    },
    _getBoundsOffset: function _getBoundsOffset(t, e, i) {
      var n = o.bounds(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
          s = n.min.subtract(t.min),
          r = n.max.subtract(t.max),
          a = this._rebound(s.x, -r.x),
          h = this._rebound(s.y, -r.y);
      return new o.Point(a, h);
    },
    _rebound: function _rebound(t, e) {
      return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
    },
    _limitZoom: function _limitZoom(t) {
      var e = this.getMinZoom(),
          i = this.getMaxZoom(),
          n = o.Browser.any3d ? this.options.zoomSnap : 1;
      return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    },
    _tryAnimatedPan: function _tryAnimatedPan(t, e) {
      var i = this._getCenterOffset(t)._floor();
      return !((e && e.animate) !== !0 && !this.getSize().contains(i)) && (this.panBy(i, e), !0);
    },
    _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = o.DomUtil.create("div", "leaflet-proxy leaflet-zoom-animated");
      this._panes.mapPane.appendChild(t), this.on("zoomanim", function (e) {
        var i = o.DomUtil.TRANSFORM,
            n = t.style[i];
        o.DomUtil.setTransform(t, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === t.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", function () {
        var e = this.getCenter(),
            i = this.getZoom();
        o.DomUtil.setTransform(t, this.project(e, i), this.getZoomScale(i, 1));
      }, this);
    },
    _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(t, e, i) {
      if (this._animatingZoom) return !0;
      if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
      var n = this.getZoomScale(e),
          s = this._getCenterOffset(t)._divideBy(1 - 1 / n);
      return !(i.animate !== !0 && !this.getSize().contains(s)) && (o.Util.requestAnimFrame(function () {
        this._moveStart(!0)._animateZoom(t, e, !0);
      }, this), !0);
    },
    _animateZoom: function _animateZoom(t, e, i, n) {
      i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
        center: t,
        zoom: e,
        noUpdate: n
      }), setTimeout(o.bind(this._onZoomTransitionEnd, this), 250);
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), o.Util.requestAnimFrame(function () {
        this._moveEnd(!0);
      }, this));
    }
  }), o.map = function (t, e) {
    return new o.Map(t, e);
  }, o.Layer = o.Evented.extend({
    options: {
      pane: "overlayPane",
      nonBubblingEvents: [],
      attribution: null
    },
    addTo: function addTo(t) {
      return t.addLayer(this), this;
    },
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[o.stamp(t)] = this, this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[o.stamp(t)], this;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(t) {
      var e = t.target;
      if (e.hasLayer(this)) {
        if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
          var i = this.getEvents();
          e.on(i, this), this.once("remove", function () {
            e.off(i, this);
          }, this);
        }
        this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
          layer: this
        });
      }
    }
  }), o.Map.include({
    addLayer: function addLayer(t) {
      var e = o.stamp(t);
      return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
    },
    removeLayer: function removeLayer(t) {
      var e = o.stamp(t);
      return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
        layer: t
      }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && o.stamp(t) in this._layers;
    },
    eachLayer: function eachLayer(t, e) {
      for (var i in this._layers) {
        t.call(e, this._layers[i]);
      }return this;
    },
    _addLayers: function _addLayers(t) {
      t = t ? o.Util.isArray(t) ? t : [t] : [];
      for (var e = 0, i = t.length; e < i; e++) {
        this.addLayer(t[e]);
      }
    },
    _addZoomLimit: function _addZoomLimit(t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[o.stamp(t)] = t, this._updateZoomLevels());
    },
    _removeZoomLimit: function _removeZoomLimit(t) {
      var e = o.stamp(t);
      this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var t = 1 / 0,
          e = -(1 / 0),
          n = this._getZoomSpan();
      for (var o in this._zoomBoundLayers) {
        var s = this._zoomBoundLayers[o].options;
        t = s.minZoom === i ? t : Math.min(t, s.minZoom), e = s.maxZoom === i ? e : Math.max(e, s.maxZoom);
      }
      this._layersMaxZoom = e === -(1 / 0) ? i : e, this._layersMinZoom = t === 1 / 0 ? i : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === i && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === i && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    }
  });
  var r = "_leaflet_events";
  o.DomEvent = {
    on: function on(t, e, i, n) {
      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var s in e) {
        this._on(t, s, e[s], i);
      } else {
        e = o.Util.splitWords(e);
        for (var r = 0, a = e.length; r < a; r++) {
          this._on(t, e[r], i, n);
        }
      }
      return this;
    },
    off: function off(t, e, i, n) {
      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var s in e) {
        this._off(t, s, e[s], i);
      } else {
        e = o.Util.splitWords(e);
        for (var r = 0, a = e.length; r < a; r++) {
          this._off(t, e[r], i, n);
        }
      }
      return this;
    },
    _on: function _on(e, i, n, s) {
      var a = i + o.stamp(n) + (s ? "_" + o.stamp(s) : "");
      if (e[r] && e[r][a]) return this;
      var h = function h(i) {
        return n.call(s || e, i || t.event);
      },
          l = h;
      return o.Browser.pointer && 0 === i.indexOf("touch") ? this.addPointerListener(e, i, h, a) : !o.Browser.touch || "dblclick" !== i || !this.addDoubleTapListener || o.Browser.pointer && o.Browser.chrome ? "addEventListener" in e ? "mousewheel" === i ? e.addEventListener("onwheel" in e ? "wheel" : "mousewheel", h, !1) : "mouseenter" === i || "mouseleave" === i ? (h = function h(i) {
        i = i || t.event, o.DomEvent._isExternalTarget(e, i) && l(i);
      }, e.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", h, !1)) : ("click" === i && o.Browser.android && (h = function h(t) {
        return o.DomEvent._filterClick(t, l);
      }), e.addEventListener(i, h, !1)) : "attachEvent" in e && e.attachEvent("on" + i, h) : this.addDoubleTapListener(e, h, a), e[r] = e[r] || {}, e[r][a] = h, this;
    },
    _off: function _off(t, e, i, n) {
      var s = e + o.stamp(i) + (n ? "_" + o.stamp(n) : ""),
          a = t[r] && t[r][s];
      return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, s) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, s) : "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[r][s] = null, this) : this;
    },
    stopPropagation: function stopPropagation(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, o.DomEvent._skipped(t), this;
    },
    disableScrollPropagation: function disableScrollPropagation(t) {
      return o.DomEvent.on(t, "mousewheel", o.DomEvent.stopPropagation);
    },
    disableClickPropagation: function disableClickPropagation(t) {
      var e = o.DomEvent.stopPropagation;
      return o.DomEvent.on(t, o.Draggable.START.join(" "), e), o.DomEvent.on(t, {
        click: o.DomEvent._fakeStop,
        dblclick: e
      });
    },
    preventDefault: function preventDefault(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    },
    stop: function stop(t) {
      return o.DomEvent.preventDefault(t).stopPropagation(t);
    },
    getMousePosition: function getMousePosition(t, e) {
      if (!e) return new o.Point(t.clientX, t.clientY);
      var i = e.getBoundingClientRect();
      return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop);
    },
    _wheelPxFactor: o.Browser.win && o.Browser.chrome ? 2 : o.Browser.gecko ? t.devicePixelRatio : 1,
    getWheelDelta: function getWheelDelta(t) {
      return o.Browser.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / o.DomEvent._wheelPxFactor : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
    },
    _skipEvents: {},
    _fakeStop: function _fakeStop(t) {
      o.DomEvent._skipEvents[t.type] = !0;
    },
    _skipped: function _skipped(t) {
      var e = this._skipEvents[t.type];
      return this._skipEvents[t.type] = !1, e;
    },
    _isExternalTarget: function _isExternalTarget(t, e) {
      var i = e.relatedTarget;
      if (!i) return !0;
      try {
        for (; i && i !== t;) {
          i = i.parentNode;
        }
      } catch (t) {
        return !1;
      }
      return i !== t;
    },
    _filterClick: function _filterClick(t, e) {
      var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
          n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
      return n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, void e(t));
    }
  }, o.DomEvent.addListener = o.DomEvent.on, o.DomEvent.removeListener = o.DomEvent.off, o.PosAnimation = o.Evented.extend({
    run: function run(t, e, i, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    },
    stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    },
    _animate: function _animate() {
      this._animId = o.Util.requestAnimFrame(this._animate, this), this._step();
    },
    _step: function _step(t) {
      var e = +new Date() - this._startTime,
          i = 1e3 * this._duration;
      e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
    },
    _runFrame: function _runFrame(t, e) {
      var i = this._startPos.add(this._offset.multiplyBy(t));
      e && i._round(), o.DomUtil.setPosition(this._el, i), this.fire("step");
    },
    _complete: function _complete() {
      o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end");
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  }), o.Projection.Mercator = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: o.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(t) {
      var e = Math.PI / 180,
          i = this.R,
          n = t.lat * e,
          s = this.R_MINOR / i,
          r = Math.sqrt(1 - s * s),
          a = r * Math.sin(n),
          h = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), r / 2);
      return n = -i * Math.log(Math.max(h, 1e-10)), new o.Point(t.lng * e * i, n);
    },
    unproject: function unproject(t) {
      for (var e, i = 180 / Math.PI, n = this.R, s = this.R_MINOR / n, r = Math.sqrt(1 - s * s), a = Math.exp(-t.y / n), h = Math.PI / 2 - 2 * Math.atan(a), l = 0, u = .1; l < 15 && Math.abs(u) > 1e-7; l++) {
        e = r * Math.sin(h), e = Math.pow((1 - e) / (1 + e), r / 2), u = Math.PI / 2 - 2 * Math.atan(a * e) - h, h += u;
      }return new o.LatLng(h * i, t.x * i / n);
    }
  }, o.CRS.EPSG3395 = o.extend({}, o.CRS.Earth, {
    code: "EPSG:3395",
    projection: o.Projection.Mercator,
    transformation: function () {
      var t = .5 / (Math.PI * o.Projection.Mercator.R);
      return new o.Transformation(t, .5, -t, .5);
    }()
  }), o.GridLayer = o.Layer.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: o.Browser.mobile,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: i,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      o.setOptions(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), o.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null;
    },
    bringToFront: function bringToFront() {
      return this._map && (o.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (o.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = o.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return e.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof o.Point ? t : new o.Point(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && this.options.zIndex !== i && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var e, i = this.getPane().children, n = -t(-(1 / 0), 1 / 0), o = 0, s = i.length; o < s; o++) {
        e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
      }isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !o.Browser.ielt9) {
        o.DomUtil.setOpacity(this._container, this.options.opacity);
        var t = +new Date(),
            e = !1,
            i = !1;
        for (var n in this._tiles) {
          var s = this._tiles[n];
          if (s.current && s.loaded) {
            var r = Math.min(1, (t - s.loaded) / 200);
            o.DomUtil.setOpacity(s.el, r), r < 1 ? e = !0 : (s.active && (i = !0), s.active = !0);
          }
        }
        i && !this._noPrune && this._pruneTiles(), e && (o.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = o.Util.requestAnimFrame(this._updateOpacity, this));
      }
    },
    _initContainer: function _initContainer() {
      this._container || (this._container = o.DomUtil.create("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          e = this.options.maxZoom;
      if (t === i) return i;
      for (var n in this._levels) {
        this._levels[n].el.children.length || n === t ? this._levels[n].el.style.zIndex = e - Math.abs(t - n) : (o.DomUtil.remove(this._levels[n].el), this._removeTilesAtZoom(n), delete this._levels[n]);
      }var s = this._levels[t],
          r = this._map;
      return s || (s = this._levels[t] = {}, s.el = o.DomUtil.create("div", "leaflet-tile-container leaflet-zoom-animated", this._container), s.el.style.zIndex = e, s.origin = r.project(r.unproject(r.getPixelOrigin()), t).round(), s.zoom = t, this._setZoomTransform(s, r.getCenter(), r.getZoom()), o.Util.falseFn(s.el.offsetWidth)), this._level = s, s;
    },
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            e,
            i = this._map.getZoom();
        if (i > this.options.maxZoom || i < this.options.minZoom) return void this._removeAllTiles();
        for (t in this._tiles) {
          e = this._tiles[t], e.retain = e.current;
        }for (t in this._tiles) {
          if (e = this._tiles[t], e.current && !e.active) {
            var n = e.coords;
            this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
          }
        }for (t in this._tiles) {
          this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var e in this._tiles) {
        this._tiles[e].coords.z === t && this._removeTile(e);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        o.DomUtil.remove(this._levels[t].el), delete this._levels[t];
      }this._removeAllTiles(), this._tileZoom = null;
    },
    _retainParent: function _retainParent(t, e, i, n) {
      var s = Math.floor(t / 2),
          r = Math.floor(e / 2),
          a = i - 1,
          h = new o.Point(+s, +r);
      h.z = +a;
      var l = this._tileCoordsToKey(h),
          u = this._tiles[l];
      return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), a > n && this._retainParent(s, r, a, n));
    },
    _retainChildren: function _retainChildren(t, e, i, n) {
      for (var s = 2 * t; s < 2 * t + 2; s++) {
        for (var r = 2 * e; r < 2 * e + 2; r++) {
          var a = new o.Point(s, r);
          a.z = i + 1;
          var h = this._tileCoordsToKey(a),
              l = this._tiles[h];
          l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), i + 1 < n && this._retainChildren(s, r, i + 1, n));
        }
      }
    },
    _resetView: function _resetView(t) {
      var e = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _setView: function _setView(t, e, n, o) {
      var s = Math.round(e);
      (this.options.maxZoom !== i && s > this.options.maxZoom || this.options.minZoom !== i && s < this.options.minZoom) && (s = i);
      var r = this.options.updateWhenZooming && s !== this._tileZoom;
      o && !r || (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), s !== i && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e);
    },
    _setZoomTransforms: function _setZoomTransforms(t, e) {
      for (var i in this._levels) {
        this._setZoomTransform(this._levels[i], t, e);
      }
    },
    _setZoomTransform: function _setZoomTransform(t, e, i) {
      var n = this._map.getZoomScale(i, t.zoom),
          s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
      o.Browser.any3d ? o.DomUtil.setTransform(t.el, s, n) : o.DomUtil.setPosition(t.el, s);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
          e = t.options.crs,
          i = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var e = this._map,
          i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
          n = e.getZoomScale(i, this._tileZoom),
          s = e.project(t, this._tileZoom).floor(),
          r = e.getSize().divideBy(2 * n);
      return new o.Bounds(s.subtract(r), s.add(r));
    },
    _update: function _update(t) {
      var n = this._map;
      if (n) {
        var s = n.getZoom();
        if (t === i && (t = n.getCenter()), this._tileZoom !== i) {
          var r = this._getTiledPixelBounds(t),
              a = this._pxBoundsToTileRange(r),
              h = a.getCenter(),
              l = [],
              u = this.options.keepBuffer,
              c = new o.Bounds(a.getBottomLeft().subtract([u, -u]), a.getTopRight().add([u, -u]));
          for (var d in this._tiles) {
            var _ = this._tiles[d].coords;
            _.z === this._tileZoom && c.contains(o.point(_.x, _.y)) || (this._tiles[d].current = !1);
          }
          if (Math.abs(s - this._tileZoom) > 1) return void this._setView(t, s);
          for (var m = a.min.y; m <= a.max.y; m++) {
            for (var p = a.min.x; p <= a.max.x; p++) {
              var f = new o.Point(p, m);
              if (f.z = this._tileZoom, this._isValidTile(f)) {
                var g = this._tiles[this._tileCoordsToKey(f)];
                g ? g.current = !0 : l.push(f);
              }
            }
          }if (l.sort(function (t, e) {
            return t.distanceTo(h) - e.distanceTo(h);
          }), 0 !== l.length) {
            this._loading || (this._loading = !0, this.fire("loading"));
            var v = e.createDocumentFragment();
            for (p = 0; p < l.length; p++) {
              this._addTile(l[p], v);
            }this._level.el.appendChild(v);
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var e = this._map.options.crs;
      if (!e.infinite) {
        var i = this._globalTileRange;
        if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1;
      }
      if (!this.options.bounds) return !0;
      var n = this._tileCoordsToBounds(t);
      return o.latLngBounds(this.options.bounds).overlaps(n);
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      var e = this._map,
          i = this.getTileSize(),
          n = t.scaleBy(i),
          s = n.add(i),
          r = e.unproject(n, t.z),
          a = e.unproject(s, t.z),
          h = new o.LatLngBounds(r, a);
      return this.options.noWrap || e.wrapLatLngBounds(h), h;
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var e = t.split(":"),
          i = new o.Point(+e[0], +e[1]);
      return i.z = +e[2], i;
    },
    _removeTile: function _removeTile(t) {
      var e = this._tiles[t];
      e && (o.DomUtil.remove(e.el), delete this._tiles[t], this.fire("tileunload", {
        tile: e.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      o.DomUtil.addClass(t, "leaflet-tile");
      var e = this.getTileSize();
      t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = o.Util.falseFn, t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity < 1 && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.android && !o.Browser.android23 && (t.style.WebkitBackfaceVisibility = "hidden");
    },
    _addTile: function _addTile(t, e) {
      var i = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), o.bind(this._tileReady, this, t));
      this._initTile(s), this.createTile.length < 2 && o.Util.requestAnimFrame(o.bind(this._tileReady, this, t, null, s)), o.DomUtil.setPosition(s, i), this._tiles[n] = {
        el: s,
        coords: t,
        current: !0
      }, e.appendChild(s), this.fire("tileloadstart", {
        tile: s,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, e, i) {
      if (this._map) {
        e && this.fire("tileerror", {
          error: e,
          tile: i,
          coords: t
        });
        var n = this._tileCoordsToKey(t);
        i = this._tiles[n], i && (i.loaded = +new Date(), this._map._fadeAnimated ? (o.DomUtil.setOpacity(i.el, 0), o.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = o.Util.requestAnimFrame(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (o.DomUtil.addClass(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: i.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), o.Browser.ielt9 || !this._map._fadeAnimated ? o.Util.requestAnimFrame(this._pruneTiles, this) : setTimeout(o.bind(this._pruneTiles, this), 250)));
      }
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var e = new o.Point(this._wrapX ? o.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? o.Util.wrapNum(t.y, this._wrapY) : t.y);
      return e.z = t.z, e;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var e = this.getTileSize();
      return new o.Bounds(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }return !0;
    }
  }), o.gridLayer = function (t) {
    return new o.GridLayer(t);
  }, o.TileLayer = o.GridLayer.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      maxNativeZoom: null,
      minNativeZoom: null,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1
    },
    initialize: function initialize(t, e) {
      this._url = t, e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), o.Browser.android || this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, e) {
      return this._url = t, e || this.redraw(), this;
    },
    createTile: function createTile(t, i) {
      var n = e.createElement("img");
      return o.DomEvent.on(n, "load", o.bind(this._tileOnLoad, this, i, n)), o.DomEvent.on(n, "error", o.bind(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n;
    },
    getTileUrl: function getTileUrl(t) {
      var e = {
        r: o.Browser.retina ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      if (this._map && !this._map.options.crs.infinite) {
        var i = this._globalTileRange.max.y - t.y;
        this.options.tms && (e.y = i), e["-y"] = i;
      }
      return o.Util.template(this._url, o.extend(e, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, e) {
      o.Browser.ielt9 ? setTimeout(o.bind(t, this, null, e), 0) : t(null, e);
    },
    _tileOnError: function _tileOnError(t, e, i) {
      var n = this.options.errorTileUrl;
      n && e.src !== n && (e.src = n), t(i, e);
    },
    getTileSize: function getTileSize() {
      var t = this._map,
          e = o.GridLayer.prototype.getTileSize.call(this),
          i = this._tileZoom + this.options.zoomOffset,
          n = this.options.minNativeZoom,
          s = this.options.maxNativeZoom;
      return null !== n && i < n ? e.divideBy(t.getZoomScale(n, i)).round() : null !== s && i > s ? e.divideBy(t.getZoomScale(s, i)).round() : e;
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          e = this.options.maxZoom,
          i = this.options.zoomReverse,
          n = this.options.zoomOffset,
          o = this.options.minNativeZoom,
          s = this.options.maxNativeZoom;
      return i && (t = e - t), t += n, null !== o && t < o ? o : null !== s && t > s ? s : t;
    },
    _getSubdomain: function _getSubdomain(t) {
      var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[e];
    },
    _abortLoading: function _abortLoading() {
      var t, e;
      for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = o.Util.falseFn, e.onerror = o.Util.falseFn, e.complete || (e.src = o.Util.emptyImageUrl, o.DomUtil.remove(e)));
      }
    }
  }), o.tileLayer = function (t, e) {
    return new o.TileLayer(t, e);
  }, o.TileLayer.WMS = o.TileLayer.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, e) {
      this._url = t;
      var i = o.extend({}, this.defaultWmsParams);
      for (var n in e) {
        n in this.options || (i[n] = e[n]);
      }e = o.setOptions(this, e), i.width = i.height = e.tileSize * (e.detectRetina && o.Browser.retina ? 2 : 1), this.wmsParams = i;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
      this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var e = this._tileCoordsToBounds(t),
          i = this._crs.project(e.getNorthWest()),
          n = this._crs.project(e.getSouthEast()),
          s = (this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [n.y, i.x, i.y, n.x] : [i.x, n.y, n.x, i.y]).join(","),
          r = o.TileLayer.prototype.getTileUrl.call(this, t);
      return r + o.Util.getParamString(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s;
    },
    setParams: function setParams(t, e) {
      return o.extend(this.wmsParams, t), e || this.redraw(), this;
    }
  }), o.tileLayer.wms = function (t, e) {
    return new o.TileLayer.WMS(t, e);
  }, o.ImageOverlay = o.Layer.extend({
    options: {
      opacity: 1,
      alt: "",
      interactive: !1,
      crossOrigin: !1
    },
    initialize: function initialize(t, e, i) {
      this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i);
    },
    onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (o.DomUtil.addClass(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    },
    onRemove: function onRemove() {
      o.DomUtil.remove(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    },
    setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    },
    bringToFront: function bringToFront() {
      return this._map && o.DomUtil.toFront(this._image), this;
    },
    bringToBack: function bringToBack() {
      return this._map && o.DomUtil.toBack(this._image), this;
    },
    setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    },
    setBounds: function setBounds(t) {
      return this._bounds = t, this._map && this._reset(), this;
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._reset,
        viewreset: this._reset
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var t = this._image = o.DomUtil.create("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""));
      t.onselectstart = o.Util.falseFn, t.onmousemove = o.Util.falseFn, t.onload = o.bind(this.fire, this, "load"), this.options.crossOrigin && (t.crossOrigin = ""), t.src = this._url, t.alt = this.options.alt;
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map.getZoomScale(t.zoom),
          i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
      o.DomUtil.setTransform(this._image, i, e);
    },
    _reset: function _reset() {
      var t = this._image,
          e = new o.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          i = e.getSize();
      o.DomUtil.setPosition(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
    },
    _updateOpacity: function _updateOpacity() {
      o.DomUtil.setOpacity(this._image, this.options.opacity);
    }
  }), o.imageOverlay = function (t, e, i) {
    return new o.ImageOverlay(t, e, i);
  }, o.Icon = o.Class.extend({
    initialize: function initialize(t) {
      o.setOptions(this, t);
    },
    createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    },
    createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    },
    _createIcon: function _createIcon(t, e) {
      var i = this._getIconUrl(t);
      if (!i) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      }
      var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
      return this._setIconStyles(n, t), n;
    },
    _setIconStyles: function _setIconStyles(t, e) {
      var i = this.options,
          n = i[e + "Size"];
      "number" == typeof n && (n = [n, n]);
      var s = o.point(n),
          r = o.point("shadow" === e && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
      t.className = "leaflet-marker-" + e + " " + (i.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
    },
    _createImg: function _createImg(t, i) {
      return i = i || e.createElement("img"), i.src = t, i;
    },
    _getIconUrl: function _getIconUrl(t) {
      return o.Browser.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    }
  }), o.icon = function (t) {
    return new o.Icon(t);
  }, o.Icon.Default = o.Icon.extend({
    options: {
      iconUrl: "marker-icon.png",
      iconRetinaUrl: "marker-icon-2x.png",
      shadowUrl: "marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(t) {
      return o.Icon.Default.imagePath || (o.Icon.Default.imagePath = this._detectIconPath()), (this.options.imagePath || o.Icon.Default.imagePath) + o.Icon.prototype._getIconUrl.call(this, t);
    },
    _detectIconPath: function _detectIconPath() {
      var t = o.DomUtil.create("div", "leaflet-default-icon-path", e.body),
          i = o.DomUtil.getStyle(t, "background-image") || o.DomUtil.getStyle(t, "backgroundImage");
      return e.body.removeChild(t), 0 === i.indexOf("url") ? i.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "") : "";
    }
  }), o.Marker = o.Layer.extend({
    options: {
      icon: new o.Icon.Default(),
      interactive: !0,
      draggable: !1,
      keyboard: !0,
      title: "",
      alt: "",
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: !1,
      riseOffset: 250,
      pane: "markerPane",
      nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._latlng = o.latLng(t);
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    },
    onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      var e = this._latlng;
      return this._latlng = o.latLng(t), this.update(), this.fire("move", {
        oldLatLng: e,
        latlng: this._latlng
      });
    },
    setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    },
    setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      if (this._icon) {
        var t = this._map.latLngToLayerPoint(this._latlng).round();
        this._setPos(t);
      }
      return this;
    },
    _initIcon: function _initIcon() {
      var t = this.options,
          e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          i = t.icon.createIcon(this._icon),
          n = !1;
      i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), t.alt && (i.alt = t.alt)), o.DomUtil.addClass(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      });
      var s = t.icon.createShadow(this._shadow),
          r = !1;
      s !== this._shadow && (this._removeShadow(), r = !0), s && (o.DomUtil.addClass(s, e), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s && r && this.getPane("shadowPane").appendChild(this._shadow);
    },
    _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      }), o.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      this._shadow && o.DomUtil.remove(this._shadow), this._shadow = null;
    },
    _setPos: function _setPos(t) {
      o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(t) {
      this._icon.style.zIndex = this._zIndex + t;
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
      this._setPos(e);
    },
    _initInteraction: function _initInteraction() {
      if (this.options.interactive && (o.DomUtil.addClass(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), o.Handler.MarkerDrag)) {
        var t = this.options.draggable;
        this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new o.Handler.MarkerDrag(this), t && this.dragging.enable();
      }
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    },
    _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;
      o.DomUtil.setOpacity(this._icon, t), this._shadow && o.DomUtil.setOpacity(this._shadow, t);
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor || [0, 0];
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor || [0, 0];
    }
  }), o.marker = function (t, e) {
    return new o.Marker(t, e);
  }, o.DivIcon = o.Icon.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function createIcon(t) {
      var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
          n = this.options;
      if (i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos) {
        var s = o.point(n.bgPos);
        i.style.backgroundPosition = -s.x + "px " + -s.y + "px";
      }
      return this._setIconStyles(i, "icon"), i;
    },
    createShadow: function createShadow() {
      return null;
    }
  }), o.divIcon = function (t) {
    return new o.DivIcon(t);
  }, o.DivOverlay = o.Layer.extend({
    options: {
      offset: [0, 7],
      className: "",
      pane: "popupPane"
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, t), this._source = e;
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && o.DomUtil.setOpacity(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && o.DomUtil.setOpacity(this._container, 1), this.bringToFront();
    },
    onRemove: function onRemove(t) {
      t._fadeAnimated ? (o.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(o.bind(o.DomUtil.remove, o.DomUtil, this._container), 200)) : o.DomUtil.remove(this._container);
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    },
    getContent: function getContent() {
      return this._content;
    },
    setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    },
    getElement: function getElement() {
      return this._container;
    },
    update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function bringToFront() {
      return this._map && o.DomUtil.toFront(this._container), this;
    },
    bringToBack: function bringToBack() {
      return this._map && o.DomUtil.toBack(this._container), this;
    },
    _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
        if ("string" == typeof e) t.innerHTML = e;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }t.appendChild(e);
        }
        this.fire("contentupdate");
      }
    },
    _updatePosition: function _updatePosition() {
      if (this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng),
            e = o.point(this.options.offset),
            i = this._getAnchor();
        this._zoomAnimated ? o.DomUtil.setPosition(this._container, t.add(i)) : e = e.add(t).add(i);
        var n = this._containerBottom = -e.y,
            s = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
        this._container.style.bottom = n + "px", this._container.style.left = s + "px";
      }
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  }), o.Popup = o.DivOverlay.extend({
    options: {
      maxWidth: 300,
      minWidth: 50,
      maxHeight: null,
      autoPan: !0,
      autoPanPaddingTopLeft: null,
      autoPanPaddingBottomRight: null,
      autoPanPadding: [5, 5],
      keepInView: !1,
      closeButton: !0,
      autoClose: !0,
      className: ""
    },
    openOn: function openOn(t) {
      return t.openPopup(this), this;
    },
    onAdd: function onAdd(t) {
      o.DivOverlay.prototype.onAdd.call(this, t), t.fire("popupopen", {
        popup: this
      }), this._source && (this._source.fire("popupopen", {
        popup: this
      }, !0), this._source instanceof o.Path || this._source.on("preclick", o.DomEvent.stopPropagation));
    },
    onRemove: function onRemove(t) {
      o.DivOverlay.prototype.onRemove.call(this, t), t.fire("popupclose", {
        popup: this
      }), this._source && (this._source.fire("popupclose", {
        popup: this
      }, !0), this._source instanceof o.Path || this._source.off("preclick", o.DomEvent.stopPropagation));
    },
    getEvents: function getEvents() {
      var t = o.DivOverlay.prototype.getEvents.call(this);
      return ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    },
    _close: function _close() {
      this._map && this._map.closePopup(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-popup",
          e = this._container = o.DomUtil.create("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated");
      if (this.options.closeButton) {
        var i = this._closeButton = o.DomUtil.create("a", t + "-close-button", e);
        i.href = "#close", i.innerHTML = "&#215;", o.DomEvent.on(i, "click", this._onCloseButtonClick, this);
      }
      var n = this._wrapper = o.DomUtil.create("div", t + "-content-wrapper", e);
      this._contentNode = o.DomUtil.create("div", t + "-content", n), o.DomEvent.disableClickPropagation(n).disableScrollPropagation(this._contentNode).on(n, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", t + "-tip-container", e), this._tip = o.DomUtil.create("div", t + "-tip", this._tipContainer);
    },
    _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          e = t.style;
      e.width = "", e.whiteSpace = "nowrap";
      var i = t.offsetWidth;
      i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
      var n = t.offsetHeight,
          s = this.options.maxHeight,
          r = "leaflet-popup-scrolled";
      s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, r)) : o.DomUtil.removeClass(t, r), this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          i = this._getAnchor();
      o.DomUtil.setPosition(this._container, e.add(i));
    },
    _adjustPan: function _adjustPan() {
      if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
        var t = this._map,
            e = parseInt(o.DomUtil.getStyle(this._container, "marginBottom"), 10) || 0,
            i = this._container.offsetHeight + e,
            n = this._containerWidth,
            s = new o.Point(this._containerLeft, -i - this._containerBottom);
        s._add(o.DomUtil.getPosition(this._container));
        var r = t.layerPointToContainerPoint(s),
            a = o.point(this.options.autoPanPadding),
            h = o.point(this.options.autoPanPaddingTopLeft || a),
            l = o.point(this.options.autoPanPaddingBottomRight || a),
            u = t.getSize(),
            c = 0,
            d = 0;
        r.x + n + l.x > u.x && (c = r.x + n - u.x + l.x), r.x - c - h.x < 0 && (c = r.x - h.x), r.y + i + l.y > u.y && (d = r.y + i - u.y + l.y), r.y - d - h.y < 0 && (d = r.y - h.y), (c || d) && t.fire("autopanstart").panBy([c, d]);
      }
    },
    _onCloseButtonClick: function _onCloseButtonClick(t) {
      this._close(), o.DomEvent.stop(t);
    },
    _getAnchor: function _getAnchor() {
      return o.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  }), o.popup = function (t, e) {
    return new o.Popup(t, e);
  }, o.Map.mergeOptions({
    closePopupOnClick: !0
  }), o.Map.include({
    openPopup: function openPopup(t, e, i) {
      return t instanceof o.Popup || (t = new o.Popup(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
    },
    closePopup: function closePopup(t) {
      return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
    }
  }), o.Layer.include({
    bindPopup: function bindPopup(t, e) {
      return t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
        click: this._openPopup,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !0), this;
    },
    unbindPopup: function unbindPopup() {
      return this._popup && (this.off({
        click: this._openPopup,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !1, this._popup = null), this;
    },
    openPopup: function openPopup(t, e) {
      if (t instanceof o.Layer || (e = t, t = this), t instanceof o.FeatureGroup) for (var i in this._layers) {
        t = this._layers[i];
        break;
      }
      return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this;
    },
    closePopup: function closePopup() {
      return this._popup && this._popup._close(), this;
    },
    togglePopup: function togglePopup(t) {
      return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
    },
    isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    },
    setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    },
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(t) {
      var e = t.layer || t.target;
      if (this._popup && this._map) return o.DomEvent.stop(t), e instanceof o.Path ? void this.openPopup(t.layer || t.target, t.latlng) : void (this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng));
    },
    _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    }
  }), o.Tooltip = o.DivOverlay.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: .9
    },
    onAdd: function onAdd(t) {
      o.DivOverlay.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
        tooltip: this
      }), this._source && this._source.fire("tooltipopen", {
        tooltip: this
      }, !0);
    },
    onRemove: function onRemove(t) {
      o.DivOverlay.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
        tooltip: this
      }), this._source && this._source.fire("tooltipclose", {
        tooltip: this
      }, !0);
    },
    getEvents: function getEvents() {
      var t = o.DivOverlay.prototype.getEvents.call(this);
      return o.Browser.touch && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function _close() {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-tooltip",
          e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = o.DomUtil.create("div", e);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(t) {
      var e = this._map,
          i = this._container,
          n = e.latLngToContainerPoint(e.getCenter()),
          s = e.layerPointToContainerPoint(t),
          r = this.options.direction,
          a = i.offsetWidth,
          h = i.offsetHeight,
          l = o.point(this.options.offset),
          u = this._getAnchor();
      "top" === r ? t = t.add(o.point(-a / 2 + l.x, -h + l.y + u.y, !0)) : "bottom" === r ? t = t.subtract(o.point(a / 2 - l.x, -l.y, !0)) : "center" === r ? t = t.subtract(o.point(a / 2 + l.x, h / 2 - u.y + l.y, !0)) : "right" === r || "auto" === r && s.x < n.x ? (r = "right", t = t.add(o.point(l.x + u.x, u.y - h / 2 + l.y, !0))) : (r = "left", t = t.subtract(o.point(a + u.x - l.x, h / 2 - u.y - l.y, !0))), o.DomUtil.removeClass(i, "leaflet-tooltip-right"), o.DomUtil.removeClass(i, "leaflet-tooltip-left"), o.DomUtil.removeClass(i, "leaflet-tooltip-top"), o.DomUtil.removeClass(i, "leaflet-tooltip-bottom"), o.DomUtil.addClass(i, "leaflet-tooltip-" + r), o.DomUtil.setPosition(i, t);
    },
    _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t);
    },
    setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && o.DomUtil.setOpacity(this._container, t);
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(e);
    },
    _getAnchor: function _getAnchor() {
      return o.point(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  }), o.tooltip = function (t, e) {
    return new o.Tooltip(t, e);
  }, o.Map.include({
    openTooltip: function openTooltip(t, e, i) {
      return t instanceof o.Tooltip || (t = new o.Tooltip(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t);
    },
    closeTooltip: function closeTooltip(t) {
      return t && this.removeLayer(t), this;
    }
  }), o.Layer.include({
    bindTooltip: function bindTooltip(t, e) {
      return t instanceof o.Tooltip ? (o.setOptions(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = o.tooltip(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    },
    unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(t) {
      if (t || !this._tooltipHandlersAdded) {
        var e = t ? "off" : "on",
            i = {
          remove: this.closeTooltip,
          move: this._moveTooltip
        };
        this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), o.Browser.touch && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t;
      }
    },
    openTooltip: function openTooltip(t, e) {
      if (t instanceof o.Layer || (e = t, t = this), t instanceof o.FeatureGroup) for (var i in this._layers) {
        t = this._layers[i];
        break;
      }
      return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (o.DomUtil.addClass(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
    },
    closeTooltip: function closeTooltip() {
      return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (o.DomUtil.removeClass(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
    },
    toggleTooltip: function toggleTooltip(t) {
      return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
    },
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    },
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(t) {
      var e = t.layer || t.target;
      this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : i);
    },
    _moveTooltip: function _moveTooltip(t) {
      var e,
          i,
          n = t.latlng;
      this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n);
    }
  }), o.LayerGroup = o.Layer.extend({
    initialize: function initialize(t) {
      this._layers = {};
      var e, i;
      if (t) for (e = 0, i = t.length; e < i; e++) {
        this.addLayer(t[e]);
      }
    },
    addLayer: function addLayer(t) {
      var e = this.getLayerId(t);
      return this._layers[e] = t, this._map && this._map.addLayer(t), this;
    },
    removeLayer: function removeLayer(t) {
      var e = t in this._layers ? t : this.getLayerId(t);
      return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
    },
    clearLayers: function clearLayers() {
      for (var t in this._layers) {
        this.removeLayer(this._layers[t]);
      }return this;
    },
    invoke: function invoke(t) {
      var e,
          i,
          n = Array.prototype.slice.call(arguments, 1);
      for (e in this._layers) {
        i = this._layers[e], i[t] && i[t].apply(i, n);
      }return this;
    },
    onAdd: function onAdd(t) {
      for (var e in this._layers) {
        t.addLayer(this._layers[e]);
      }
    },
    onRemove: function onRemove(t) {
      for (var e in this._layers) {
        t.removeLayer(this._layers[e]);
      }
    },
    eachLayer: function eachLayer(t, e) {
      for (var i in this._layers) {
        t.call(e, this._layers[i]);
      }return this;
    },
    getLayer: function getLayer(t) {
      return this._layers[t];
    },
    getLayers: function getLayers() {
      var t = [];
      for (var e in this._layers) {
        t.push(this._layers[e]);
      }return t;
    },
    setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    },
    getLayerId: function getLayerId(t) {
      return o.stamp(t);
    }
  }), o.layerGroup = function (t) {
    return new o.LayerGroup(t);
  }, o.FeatureGroup = o.LayerGroup.extend({
    addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), o.LayerGroup.prototype.addLayer.call(this, t), this.fire("layeradd", {
        layer: t
      }));
    },
    removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), o.LayerGroup.prototype.removeLayer.call(this, t), this.fire("layerremove", {
        layer: t
      })) : this;
    },
    setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    },
    bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    },
    bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    },
    getBounds: function getBounds() {
      var t = new o.LatLngBounds();
      for (var e in this._layers) {
        var i = this._layers[e];
        t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
      }
      return t;
    }
  }), o.featureGroup = function (t) {
    return new o.FeatureGroup(t);
  }, o.Renderer = o.Layer.extend({
    options: {
      padding: .1
    },
    initialize: function initialize(t) {
      o.setOptions(this, t), o.stamp(this), this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && o.DomUtil.addClass(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    },
    onRemove: function onRemove() {
      o.DomUtil.remove(this._container), this.off("update", this._updatePaths, this);
    },
    getEvents: function getEvents() {
      var t = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    },
    _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(t, e) {
      var i = this._map.getZoomScale(e, this._zoom),
          n = o.DomUtil.getPosition(this._container),
          s = this._map.getSize().multiplyBy(.5 + this.options.padding),
          r = this._map.project(this._center, e),
          a = this._map.project(t, e),
          h = a.subtract(r),
          l = s.multiplyBy(-i).add(n).add(s).subtract(h);
      o.Browser.any3d ? o.DomUtil.setTransform(this._container, l, i) : o.DomUtil.setPosition(this._container, l);
    },
    _reset: function _reset() {
      this._update(), this._updateTransform(this._center, this._zoom);
      for (var t in this._layers) {
        this._layers[t]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    },
    _update: function _update() {
      var t = this.options.padding,
          e = this._map.getSize(),
          i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
      this._bounds = new o.Bounds(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    }
  }), o.Map.include({
    getRenderer: function getRenderer(t) {
      var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
      return e || (e = this._renderer = this.options.preferCanvas && o.canvas() || o.svg()), this.hasLayer(e) || this.addLayer(e), e;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || t === i) return !1;
      var e = this._paneRenderers[t];
      return e === i && (e = o.SVG && o.svg({
        pane: t
      }) || o.Canvas && o.canvas({
        pane: t
      }), this._paneRenderers[t] = e), e;
    }
  }), o.Path = o.Layer.extend({
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 3,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
      dashArray: null,
      dashOffset: null,
      fill: !1,
      fillColor: null,
      fillOpacity: .2,
      fillRule: "evenodd",
      interactive: !0
    },
    beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    },
    setStyle: function setStyle(t) {
      return o.setOptions(this, t), this._renderer && this._renderer._updateStyle(this), this;
    },
    bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    },
    bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      this._project(), this._update();
    },
    _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + (o.Browser.touch ? 10 : 0);
    }
  }), o.LineUtil = {
    simplify: function simplify(t, e) {
      if (!e || !t.length) return t.slice();
      var i = e * e;
      return t = this._reducePoints(t, i), t = this._simplifyDP(t, i);
    },
    pointToSegmentDistance: function pointToSegmentDistance(t, e, i) {
      return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0));
    },
    closestPointOnSegment: function closestPointOnSegment(t, e, i) {
      return this._sqClosestPointOnSegment(t, e, i);
    },
    _simplifyDP: function _simplifyDP(t, e) {
      var n = t.length,
          o = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != i + "" ? Uint8Array : Array,
          s = new o(n);
      s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
      var r,
          a = [];
      for (r = 0; r < n; r++) {
        s[r] && a.push(t[r]);
      }return a;
    },
    _simplifyDPStep: function _simplifyDPStep(t, e, i, n, o) {
      var s,
          r,
          a,
          h = 0;
      for (r = n + 1; r <= o - 1; r++) {
        a = this._sqClosestPointOnSegment(t[r], t[n], t[o], !0), a > h && (s = r, h = a);
      }h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o));
    },
    _reducePoints: function _reducePoints(t, e) {
      for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
        this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
      }return o < s - 1 && i.push(t[s - 1]), i;
    },
    clipSegment: function clipSegment(t, e, i, n, o) {
      var s,
          r,
          a,
          h = n ? this._lastCode : this._getBitCode(t, i),
          l = this._getBitCode(e, i);
      for (this._lastCode = l;;) {
        if (!(h | l)) return [t, e];
        if (h & l) return !1;
        s = h || l, r = this._getEdgeIntersection(t, e, s, i, o), a = this._getBitCode(r, i), s === h ? (t = r, h = a) : (e = r, l = a);
      }
    },
    _getEdgeIntersection: function _getEdgeIntersection(t, e, i, n, s) {
      var r,
          a,
          h = e.x - t.x,
          l = e.y - t.y,
          u = n.min,
          c = n.max;
      return 8 & i ? (r = t.x + h * (c.y - t.y) / l, a = c.y) : 4 & i ? (r = t.x + h * (u.y - t.y) / l, a = u.y) : 2 & i ? (r = c.x, a = t.y + l * (c.x - t.x) / h) : 1 & i && (r = u.x, a = t.y + l * (u.x - t.x) / h), new o.Point(r, a, s);
    },
    _getBitCode: function _getBitCode(t, e) {
      var i = 0;
      return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
    },
    _sqDist: function _sqDist(t, e) {
      var i = e.x - t.x,
          n = e.y - t.y;
      return i * i + n * n;
    },
    _sqClosestPointOnSegment: function _sqClosestPointOnSegment(t, e, i, n) {
      var s,
          r = e.x,
          a = e.y,
          h = i.x - r,
          l = i.y - a,
          u = h * h + l * l;
      return u > 0 && (s = ((t.x - r) * h + (t.y - a) * l) / u, s > 1 ? (r = i.x, a = i.y) : s > 0 && (r += h * s, a += l * s)), h = t.x - r, l = t.y - a, n ? h * h + l * l : new o.Point(r, a);
    }
  }, o.Polyline = o.Path.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var e, i, n = 1 / 0, s = null, r = o.LineUtil._sqClosestPointOnSegment, a = 0, h = this._parts.length; a < h; a++) {
        for (var l = this._parts[a], u = 1, c = l.length; u < c; u++) {
          e = l[u - 1], i = l[u];
          var d = r(t, e, i, !0);
          d < n && (n = d, s = r(t, e, i));
        }
      }return s && (s.distance = Math.sqrt(n)), s;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          e,
          i,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
      if (!h) return null;
      for (t = 0, e = 0; t < h - 1; t++) {
        e += a[t].distanceTo(a[t + 1]) / 2;
      }if (0 === e) return this._map.layerPointToLatLng(a[0]);
      for (t = 0, n = 0; t < h - 1; t++) {
        if (o = a[t], s = a[t + 1], i = o.distanceTo(s), n += i, n > e) return r = (n - e) / i, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
      }
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, e) {
      return e = e || this._defaultShape(), t = o.latLng(t), e.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new o.LatLngBounds(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return o.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var e = [], i = o.Polyline._flat(t), n = 0, s = t.length; n < s; n++) {
        i ? (e[n] = o.latLng(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
      }return e;
    },
    _project: function _project() {
      var t = new o.Bounds();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
      var e = this._clickTolerance(),
          i = new o.Point(e, e);
      this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t);
    },
    _projectLatlngs: function _projectLatlngs(t, e, i) {
      var n,
          s,
          r = t[0] instanceof o.LatLng,
          a = t.length;
      if (r) {
        for (s = [], n = 0; n < a; n++) {
          s[n] = this._map.latLngToLayerPoint(t[n]), i.extend(s[n]);
        }e.push(s);
      } else for (n = 0; n < a; n++) {
        this._projectLatlngs(t[n], e, i);
      }
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
        if (this.options.noClip) return void (this._parts = this._rings);
        var e,
            i,
            n,
            s,
            r,
            a,
            h,
            l = this._parts;
        for (e = 0, n = 0, s = this._rings.length; e < s; e++) {
          for (h = this._rings[e], i = 0, r = h.length; i < r - 1; i++) {
            a = o.LineUtil.clipSegment(h[i], h[i + 1], t, i, !0), a && (l[n] = l[n] || [], l[n].push(a[0]), a[1] === h[i + 1] && i !== r - 2 || (l[n].push(a[1]), n++));
          }
        }
      }
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) {
        t[i] = o.LineUtil.simplify(t[i], e);
      }
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    }
  }), o.polyline = function (t, e) {
    return new o.Polyline(t, e);
  }, o.Polyline._flat = function (t) {
    return !o.Util.isArray(t[0]) || "object" != _typeof(t[0][0]) && "undefined" != typeof t[0][0];
  }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e, i) {
    var n,
        s,
        r,
        a,
        h,
        l,
        u,
        c,
        d,
        _ = [1, 4, 2, 8],
        m = o.LineUtil;
    for (s = 0, u = t.length; s < u; s++) {
      t[s]._code = m._getBitCode(t[s], e);
    }for (a = 0; a < 4; a++) {
      for (c = _[a], n = [], s = 0, u = t.length, r = u - 1; s < u; r = s++) {
        h = t[s], l = t[r], h._code & c ? l._code & c || (d = m._getEdgeIntersection(l, h, c, e, i), d._code = m._getBitCode(d, e), n.push(d)) : (l._code & c && (d = m._getEdgeIntersection(l, h, c, e, i), d._code = m._getBitCode(d, e), n.push(d)), n.push(h));
      }t = n;
    }
    return t;
  }, o.Polygon = o.Polyline.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          e,
          i,
          n,
          o,
          s,
          r,
          a,
          h,
          l = this._rings[0],
          u = l.length;
      if (!u) return null;
      for (s = r = a = 0, t = 0, e = u - 1; t < u; e = t++) {
        i = l[t], n = l[e], o = i.y * n.x - n.y * i.x, r += (i.x + n.x) * o, a += (i.y + n.y) * o, s += 3 * o;
      }return h = 0 === s ? l[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var e = o.Polyline.prototype._convertLatLngs.call(this, t),
          i = e.length;
      return i >= 2 && e[0] instanceof o.LatLng && e[0].equals(e[i - 1]) && e.pop(), e;
    },
    _setLatLngs: function _setLatLngs(t) {
      o.Polyline.prototype._setLatLngs.call(this, t), o.Polyline._flat(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return o.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          e = this.options.weight,
          i = new o.Point(e, e);
      if (t = new o.Bounds(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
        if (this.options.noClip) return void (this._parts = this._rings);
        for (var n, s = 0, r = this._rings.length; s < r; s++) {
          n = o.PolyUtil.clipPolygon(this._rings[s], t, !0), n.length && this._parts.push(n);
        }
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    }
  }), o.polygon = function (t, e) {
    return new o.Polygon(t, e);
  }, o.Rectangle = o.Polygon.extend({
    initialize: function initialize(t, e) {
      o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  }), o.rectangle = function (t, e) {
    return new o.Rectangle(t, e);
  }, o.CircleMarker = o.Path.extend({
    options: {
      fill: !0,
      radius: 10
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._latlng = o.latLng(t), this._radius = this.options.radius;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = o.latLng(t), this.redraw(), this.fire("move", {
        latlng: this._latlng
      });
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(t) {
      var e = t && t.radius || this._radius;
      return o.Path.prototype.setStyle.call(this, t), this.setRadius(e), this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var t = this._radius,
          e = this._radiusY || t,
          i = this._clickTolerance(),
          n = [t + i, e + i];
      this._pxBounds = new o.Bounds(this._point.subtract(n), this._point.add(n));
    },
    _update: function _update() {
      this._map && this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    }
  }), o.circleMarker = function (t, e) {
    return new o.CircleMarker(t, e);
  }, o.Circle = o.CircleMarker.extend({
    initialize: function initialize(t, e, i) {
      if ("number" == typeof e && (e = o.extend({}, i, {
        radius: e
      })), o.setOptions(this, e), this._latlng = o.latLng(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new o.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: o.Path.prototype.setStyle,
    _project: function _project() {
      var t = this._latlng.lng,
          e = this._latlng.lat,
          i = this._map,
          n = i.options.crs;
      if (n.distance === o.CRS.Earth.distance) {
        var s = Math.PI / 180,
            r = this._mRadius / o.CRS.Earth.R / s,
            a = i.project([e + r, t]),
            h = i.project([e - r, t]),
            l = a.add(h).divideBy(2),
            u = i.unproject(l).lat,
            c = Math.acos((Math.cos(r * s) - Math.sin(e * s) * Math.sin(u * s)) / (Math.cos(e * s) * Math.cos(u * s))) / s;
        (isNaN(c) || 0 === c) && (c = r / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(i.getPixelOrigin()), this._radius = isNaN(c) ? 0 : Math.max(Math.round(l.x - i.project([u, t - c]).x), 1), this._radiusY = Math.max(Math.round(l.y - a.y), 1);
      } else {
        var d = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(d).x;
      }
      this._updateBounds();
    }
  }), o.circle = function (t, e, i) {
    return new o.Circle(t, e, i);
  }, o.SVG = o.Renderer.extend({
    getEvents: function getEvents() {
      var t = o.Renderer.prototype.getEvents.call(this);
      return t.zoomstart = this._onZoomStart, t;
    },
    _initContainer: function _initContainer() {
      this._container = o.SVG.create("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = o.SVG.create("g"), this._container.appendChild(this._rootGroup);
    },
    _onZoomStart: function _onZoomStart() {
      this._update();
    },
    _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        o.Renderer.prototype._update.call(this);
        var t = this._bounds,
            e = t.getSize(),
            i = this._container;
        this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), o.DomUtil.setPosition(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
      }
    },
    _initPath: function _initPath(t) {
      var e = t._path = o.SVG.create("path");
      t.options.className && o.DomUtil.addClass(e, t.options.className), t.options.interactive && o.DomUtil.addClass(e, "leaflet-interactive"), this._updateStyle(t), this._layers[o.stamp(t)] = t;
    },
    _addPath: function _addPath(t) {
      this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    },
    _removePath: function _removePath(t) {
      o.DomUtil.remove(t._path), t.removeInteractiveTarget(t._path), delete this._layers[o.stamp(t)];
    },
    _updatePath: function _updatePath(t) {
      t._project(), t._update();
    },
    _updateStyle: function _updateStyle(t) {
      var e = t._path,
          i = t.options;
      e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
    },
    _updatePoly: function _updatePoly(t, e) {
      this._setPath(t, o.SVG.pointsToPath(t._parts, e));
    },
    _updateCircle: function _updateCircle(t) {
      var e = t._point,
          i = t._radius,
          n = t._radiusY || i,
          o = "a" + i + "," + n + " 0 1,0 ",
          s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + 2 * -i + ",0 ";
      this._setPath(t, s);
    },
    _setPath: function _setPath(t, e) {
      t._path.setAttribute("d", e);
    },
    _bringToFront: function _bringToFront(t) {
      o.DomUtil.toFront(t._path);
    },
    _bringToBack: function _bringToBack(t) {
      o.DomUtil.toBack(t._path);
    }
  }), o.extend(o.SVG, {
    create: function create(t) {
      return e.createElementNS("http://www.w3.org/2000/svg", t);
    },
    pointsToPath: function pointsToPath(t, e) {
      var i,
          n,
          s,
          r,
          a,
          h,
          l = "";
      for (i = 0, s = t.length; i < s; i++) {
        for (a = t[i], n = 0, r = a.length; n < r; n++) {
          h = a[n], l += (n ? "L" : "M") + h.x + " " + h.y;
        }l += e ? o.Browser.svg ? "z" : "x" : "";
      }
      return l || "M0 0";
    }
  }), o.Browser.svg = !(!e.createElementNS || !o.SVG.create("svg").createSVGRect), o.svg = function (t) {
    return o.Browser.svg || o.Browser.vml ? new o.SVG(t) : null;
  }, o.Browser.vml = !o.Browser.svg && function () {
    try {
      var t = e.createElement("div");
      t.innerHTML = '<v:shape adj="1"/>';
      var i = t.firstChild;
      return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
    } catch (t) {
      return !1;
    }
  }(), o.SVG.include(o.Browser.vml ? {
    _initContainer: function _initContainer() {
      this._container = o.DomUtil.create("div", "leaflet-vml-container");
    },
    _update: function _update() {
      this._map._animatingZoom || (o.Renderer.prototype._update.call(this), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var e = t._container = o.SVG.create("shape");
      o.DomUtil.addClass(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = o.SVG.create("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[o.stamp(t)] = t;
    },
    _addPath: function _addPath(t) {
      var e = t._container;
      this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
    },
    _removePath: function _removePath(t) {
      var e = t._container;
      o.DomUtil.remove(e), t.removeInteractiveTarget(e), delete this._layers[o.stamp(t)];
    },
    _updateStyle: function _updateStyle(t) {
      var e = t._stroke,
          i = t._fill,
          n = t.options,
          s = t._container;
      s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = o.SVG.create("stroke")), s.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = o.Util.isArray(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (s.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = o.SVG.create("fill")), s.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (s.removeChild(i), t._fill = null);
    },
    _updateCircle: function _updateCircle(t) {
      var e = t._point.round(),
          i = Math.round(t._radius),
          n = Math.round(t._radiusY || i);
      this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
    },
    _setPath: function _setPath(t, e) {
      t._path.v = e;
    },
    _bringToFront: function _bringToFront(t) {
      o.DomUtil.toFront(t._container);
    },
    _bringToBack: function _bringToBack(t) {
      o.DomUtil.toBack(t._container);
    }
  } : {}), o.Browser.vml && (o.SVG.create = function () {
    try {
      return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return e.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {
      return function (t) {
        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }()), o.Canvas = o.Renderer.extend({
    getEvents: function getEvents() {
      var t = o.Renderer.prototype.getEvents.call(this);
      return t.viewprereset = this._onViewPreReset, t;
    },
    _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    },
    onAdd: function onAdd() {
      o.Renderer.prototype.onAdd.call(this), this._draw();
    },
    _initContainer: function _initContainer() {
      var t = this._container = e.createElement("canvas");
      o.DomEvent.on(t, "mousemove", o.Util.throttle(this._onMouseMove, 32, this), this).on(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
    },
    _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        var t;
        this._redrawBounds = null;
        for (var e in this._layers) {
          t = this._layers[e], t._update();
        }this._redraw();
      }
    },
    _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        this._drawnLayers = {}, o.Renderer.prototype._update.call(this);
        var t = this._bounds,
            e = this._container,
            i = t.getSize(),
            n = o.Browser.retina ? 2 : 1;
        o.DomUtil.setPosition(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", o.Browser.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
      }
    },
    _reset: function _reset() {
      o.Renderer.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    },
    _initPath: function _initPath(t) {
      this._updateDashArray(t), this._layers[o.stamp(t)] = t;
      var e = t._order = {
        layer: t,
        prev: this._drawLast,
        next: null
      };
      this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(t) {
      this._requestRedraw(t);
    },
    _removePath: function _removePath(t) {
      var e = t._order,
          i = e.next,
          n = e.prev;
      i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[o.stamp(t)], this._requestRedraw(t);
    },
    _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    },
    _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    },
    _updateDashArray: function _updateDashArray(t) {
      if (t.options.dashArray) {
        var e,
            i = t.options.dashArray.split(","),
            n = [];
        for (e = 0; e < i.length; e++) {
          n.push(Number(i[e]));
        }t.options._dashArray = n;
      }
    },
    _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || o.Util.requestAnimFrame(this._redraw, this));
    },
    _extendRedrawBounds: function _extendRedrawBounds(t) {
      var e = (t.options.weight || 0) + 1;
      this._redrawBounds = this._redrawBounds || new o.Bounds(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
    },
    _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    },
    _clear: function _clear() {
      var t = this._redrawBounds;
      if (t) {
        var e = t.getSize();
        this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
      } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
    },
    _draw: function _draw() {
      var t,
          e = this._redrawBounds;
      if (this._ctx.save(), e) {
        var i = e.getSize();
        this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
      }
      this._drawing = !0;
      for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
      }this._drawing = !1, this._ctx.restore();
    },
    _updatePoly: function _updatePoly(t, e) {
      if (this._drawing) {
        var i,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
        if (a) {
          for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), h.setLineDash && h.setLineDash(t.options && t.options._dashArray || []), i = 0; i < a; i++) {
            for (n = 0, o = r[i].length; n < o; n++) {
              s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }e && h.closePath();
          }
          this._fillStroke(h, t);
        }
      }
    },
    _updateCircle: function _updateCircle(t) {
      if (this._drawing && !t._empty()) {
        var e = t._point,
            i = this._ctx,
            n = t._radius,
            o = (t._radiusY || n) / n;
        this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t);
      }
    },
    _fillStroke: function _fillStroke(t, e) {
      var i = e.options;
      i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
    },
    _onClick: function _onClick(t) {
      for (var e, i, n = this._map.mouseEventToLayerPoint(t), s = this._drawFirst; s; s = s.next) {
        e = s.layer, e.options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
      }i && (o.DomEvent._fakeStop(t), this._fireEvent([i], t));
    },
    _onMouseMove: function _onMouseMove(t) {
      if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
        var e = this._map.mouseEventToLayerPoint(t);
        this._handleMouseHover(t, e);
      }
    },
    _handleMouseOut: function _handleMouseOut(t) {
      var e = this._hoveredLayer;
      e && (o.DomUtil.removeClass(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null);
    },
    _handleMouseHover: function _handleMouseHover(t, e) {
      for (var i, n, s = this._drawFirst; s; s = s.next) {
        i = s.layer, i.options.interactive && i._containsPoint(e) && (n = i);
      }n !== this._hoveredLayer && (this._handleMouseOut(t), n && (o.DomUtil.addClass(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
    },
    _fireEvent: function _fireEvent(t, e, i) {
      this._map._fireDOMEvent(e, i || e.type, t);
    },
    _bringToFront: function _bringToFront(t) {
      var e = t._order,
          i = e.next,
          n = e.prev;
      i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t));
    },
    _bringToBack: function _bringToBack(t) {
      var e = t._order,
          i = e.next,
          n = e.prev;
      n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t));
    }
  }), o.Browser.canvas = function () {
    return !!e.createElement("canvas").getContext;
  }(), o.canvas = function (t) {
    return o.Browser.canvas ? new o.Canvas(t) : null;
  }, o.Polyline.prototype._containsPoint = function (t, e) {
    var i,
        n,
        s,
        r,
        a,
        h,
        l = this._clickTolerance();
    if (!this._pxBounds.contains(t)) return !1;
    for (i = 0, r = this._parts.length; i < r; i++) {
      for (h = this._parts[i], n = 0, a = h.length, s = a - 1; n < a; s = n++) {
        if ((e || 0 !== n) && o.LineUtil.pointToSegmentDistance(t, h[s], h[n]) <= l) return !0;
      }
    }return !1;
  }, o.Polygon.prototype._containsPoint = function (t) {
    var e,
        i,
        n,
        s,
        r,
        a,
        h,
        l,
        u = !1;
    if (!this._pxBounds.contains(t)) return !1;
    for (s = 0, h = this._parts.length; s < h; s++) {
      for (e = this._parts[s], r = 0, l = e.length, a = l - 1; r < l; a = r++) {
        i = e[r], n = e[a], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
      }
    }return u || o.Polyline.prototype._containsPoint.call(this, t, !0);
  }, o.CircleMarker.prototype._containsPoint = function (t) {
    return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
  }, o.GeoJSON = o.FeatureGroup.extend({
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var e,
          i,
          n,
          s = o.Util.isArray(t) ? t : t.features;
      if (s) {
        for (e = 0, i = s.length; e < i; e++) {
          n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }return this;
      }
      var r = this.options;
      if (r.filter && !r.filter(t)) return this;
      var a = o.GeoJSON.geometryToLayer(t, r);
      return a ? (a.feature = o.GeoJSON.asFeature(t), a.defaultOptions = a.options, this.resetStyle(a), r.onEachFeature && r.onEachFeature(t, a), this.addLayer(a)) : this;
    },
    resetStyle: function resetStyle(t) {
      return t.options = o.Util.extend({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this;
    },
    setStyle: function setStyle(t) {
      return this.eachLayer(function (e) {
        this._setLayerStyle(e, t);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, e) {
      "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e);
    }
  }), o.extend(o.GeoJSON, {
    geometryToLayer: function geometryToLayer(t, e) {
      var i,
          n,
          s,
          r,
          a = "Feature" === t.type ? t.geometry : t,
          h = a ? a.coordinates : null,
          l = [],
          u = e && e.pointToLayer,
          c = e && e.coordsToLatLng || this.coordsToLatLng;
      if (!h && !a) return null;
      switch (a.type) {
        case "Point":
          return i = c(h), u ? u(t, i) : new o.Marker(i);
        case "MultiPoint":
          for (s = 0, r = h.length; s < r; s++) {
            i = c(h[s]), l.push(u ? u(t, i) : new o.Marker(i));
          }return new o.FeatureGroup(l);
        case "LineString":
        case "MultiLineString":
          return n = this.coordsToLatLngs(h, "LineString" === a.type ? 0 : 1, c), new o.Polyline(n, e);
        case "Polygon":
        case "MultiPolygon":
          return n = this.coordsToLatLngs(h, "Polygon" === a.type ? 1 : 2, c), new o.Polygon(n, e);
        case "GeometryCollection":
          for (s = 0, r = a.geometries.length; s < r; s++) {
            var d = this.geometryToLayer({
              geometry: a.geometries[s],
              type: "Feature",
              properties: t.properties
            }, e);
            d && l.push(d);
          }
          return new o.FeatureGroup(l);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    },
    coordsToLatLng: function coordsToLatLng(t) {
      return new o.LatLng(t[1], t[0], t[2]);
    },
    coordsToLatLngs: function coordsToLatLngs(t, e, i) {
      for (var n, o = [], s = 0, r = t.length; s < r; s++) {
        n = e ? this.coordsToLatLngs(t[s], e - 1, i) : (i || this.coordsToLatLng)(t[s]), o.push(n);
      }return o;
    },
    latLngToCoords: function latLngToCoords(t) {
      return t.alt !== i ? [t.lng, t.lat, t.alt] : [t.lng, t.lat];
    },
    latLngsToCoords: function latLngsToCoords(t, e, i) {
      for (var n = [], s = 0, r = t.length; s < r; s++) {
        n.push(e ? o.GeoJSON.latLngsToCoords(t[s], e - 1, i) : o.GeoJSON.latLngToCoords(t[s]));
      }return !e && i && n.push(n[0]), n;
    },
    getFeature: function getFeature(t, e) {
      return t.feature ? o.extend({}, t.feature, {
        geometry: e
      }) : o.GeoJSON.asFeature(e);
    },
    asFeature: function asFeature(t) {
      return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
  });
  var a = {
    toGeoJSON: function toGeoJSON() {
      return o.GeoJSON.getFeature(this, {
        type: "Point",
        coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
      });
    }
  };
  o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.prototype.toGeoJSON = function () {
    var t = !o.Polyline._flat(this._latlngs),
        e = o.GeoJSON.latLngsToCoords(this._latlngs, t ? 1 : 0);
    return o.GeoJSON.getFeature(this, {
      type: (t ? "Multi" : "") + "LineString",
      coordinates: e
    });
  }, o.Polygon.prototype.toGeoJSON = function () {
    var t = !o.Polyline._flat(this._latlngs),
        e = t && !o.Polyline._flat(this._latlngs[0]),
        i = o.GeoJSON.latLngsToCoords(this._latlngs, e ? 2 : t ? 1 : 0, !0);
    return t || (i = [i]), o.GeoJSON.getFeature(this, {
      type: (e ? "Multi" : "") + "Polygon",
      coordinates: i
    });
  }, o.LayerGroup.include({
    toMultiPoint: function toMultiPoint() {
      var t = [];
      return this.eachLayer(function (e) {
        t.push(e.toGeoJSON().geometry.coordinates);
      }), o.GeoJSON.getFeature(this, {
        type: "MultiPoint",
        coordinates: t
      });
    },
    toGeoJSON: function toGeoJSON() {
      var t = this.feature && this.feature.geometry && this.feature.geometry.type;
      if ("MultiPoint" === t) return this.toMultiPoint();
      var e = "GeometryCollection" === t,
          i = [];
      return this.eachLayer(function (t) {
        if (t.toGeoJSON) {
          var n = t.toGeoJSON();
          i.push(e ? n.geometry : o.GeoJSON.asFeature(n));
        }
      }), e ? o.GeoJSON.getFeature(this, {
        geometries: i,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: i
      };
    }
  }), o.geoJSON = function (t, e) {
    return new o.GeoJSON(t, e);
  }, o.geoJson = o.geoJSON, o.Draggable = o.Evented.extend({
    options: {
      clickTolerance: 3
    },
    statics: {
      START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
      END: {
        mousedown: "mouseup",
        touchstart: "touchend",
        pointerdown: "touchend",
        MSPointerDown: "touchend"
      },
      MOVE: {
        mousedown: "mousemove",
        touchstart: "touchmove",
        pointerdown: "touchmove",
        MSPointerDown: "touchmove"
      }
    },
    initialize: function initialize(t, e, i) {
      this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
    },
    enable: function enable() {
      this._enabled || (o.DomEvent.on(this._dragStartTarget, o.Draggable.START.join(" "), this._onDown, this), this._enabled = !0);
    },
    disable: function disable() {
      this._enabled && (o.Draggable._dragging === this && this.finishDrag(), o.DomEvent.off(this._dragStartTarget, o.Draggable.START.join(" "), this._onDown, this), this._enabled = !1, this._moved = !1);
    },
    _onDown: function _onDown(t) {
      if (!t._simulated && this._enabled && (this._moved = !1, !o.DomUtil.hasClass(this._element, "leaflet-zoom-anim") && !(o.Draggable._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.Draggable._dragging = this, this._preventOutline && o.DomUtil.preventOutline(this._element), o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
        this.fire("down");
        var i = t.touches ? t.touches[0] : t;
        this._startPoint = new o.Point(i.clientX, i.clientY), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this);
      }
    },
    _onMove: function _onMove(i) {
      if (!i._simulated && this._enabled) {
        if (i.touches && i.touches.length > 1) return void (this._moved = !0);
        var n = i.touches && 1 === i.touches.length ? i.touches[0] : i,
            s = new o.Point(n.clientX, n.clientY),
            r = s.subtract(this._startPoint);
        (r.x || r.y) && (Math.abs(r.x) + Math.abs(r.y) < this.options.clickTolerance || (o.DomEvent.preventDefault(i), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(r), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, t.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(r), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._lastEvent = i, this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0)));
      }
    },
    _updatePosition: function _updatePosition() {
      var t = {
        originalEvent: this._lastEvent
      };
      this.fire("predrag", t), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag", t);
    },
    _onUp: function _onUp(t) {
      !t._simulated && this._enabled && this.finishDrag();
    },
    finishDrag: function finishDrag() {
      o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
      for (var t in o.Draggable.MOVE) {
        o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove, this).off(e, o.Draggable.END[t], this._onUp, this);
      }o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
        distance: this._newPos.distanceTo(this._startPos)
      })), this._moving = !1, o.Draggable._dragging = !1;
    }
  }), o.Handler = o.Class.extend({
    initialize: function initialize(t) {
      this._map = t;
    },
    enable: function enable() {
      return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
    },
    disable: function disable() {
      return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
    },
    enabled: function enabled() {
      return !!this._enabled;
    }
  }), o.Map.mergeOptions({
    dragging: !0,
    inertia: !o.Browser.android23,
    inertiaDeceleration: 3400,
    inertiaMaxSpeed: 1 / 0,
    easeLinearity: .2,
    worldCopyJump: !1,
    maxBoundsViscosity: 0
  }), o.Map.Drag = o.Handler.extend({
    addHooks: function addHooks() {
      if (!this._draggable) {
        var t = this._map;
        this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
          down: this._onDown,
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
      }
      o.DomUtil.addClass(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    },
    removeHooks: function removeHooks() {
      o.DomUtil.removeClass(this._map._container, "leaflet-grab"), o.DomUtil.removeClass(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDown: function _onDown() {
      this._map._stop();
    },
    _onDragStart: function _onDragStart() {
      var t = this._map;
      if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var e = o.latLngBounds(this._map.options.maxBounds);
        this._offsetLimit = o.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
      } else this._offsetLimit = null;
      t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
    },
    _onDrag: function _onDrag(t) {
      if (this._map.options.inertia) {
        var e = this._lastTime = +new Date(),
            i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
        this._positions.push(i), this._times.push(e), e - this._times[0] > 50 && (this._positions.shift(), this._times.shift());
      }
      this._map.fire("move", t).fire("drag", t);
    },
    _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);
      this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(t, e) {
      return t - (t - e) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit;
        t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
      }
    },
    _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          e = Math.round(t / 2),
          i = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - e + i) % t + e - i,
          s = (n + e + i) % t - e - i,
          r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
      this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
    },
    _onDragEnd: function _onDragEnd(t) {
      var e = this._map,
          i = e.options,
          n = !i.inertia || this._times.length < 2;
      if (e.fire("dragend", t), n) e.fire("moveend");else {
        var s = this._lastPos.subtract(this._positions[0]),
            r = (this._lastTime - this._times[0]) / 1e3,
            a = i.easeLinearity,
            h = s.multiplyBy(a / r),
            l = h.distanceTo([0, 0]),
            u = Math.min(i.inertiaMaxSpeed, l),
            c = h.multiplyBy(u / l),
            d = u / (i.inertiaDeceleration * a),
            _ = c.multiplyBy(-d / 2).round();
        _.x || _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function () {
          e.panBy(_, {
            duration: d,
            easeLinearity: a,
            noMoveStart: !0,
            animate: !0
          });
        })) : e.fire("moveend");
      }
    }
  }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
    doubleClickZoom: !0
  }), o.Map.DoubleClickZoom = o.Handler.extend({
    addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(t) {
      var e = this._map,
          i = e.getZoom(),
          n = e.options.zoomDelta,
          o = t.originalEvent.shiftKey ? i - n : i + n;
      "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
    }
  }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
    scrollWheelZoom: !0,
    wheelDebounceTime: 40,
    wheelPxPerZoomLevel: 60
  }), o.Map.ScrollWheelZoom = o.Handler.extend({
    addHooks: function addHooks() {
      o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0;
    },
    removeHooks: function removeHooks() {
      o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(t) {
      var e = o.DomEvent.getWheelDelta(t),
          i = this._map.options.wheelDebounceTime;
      this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
      var n = Math.max(i - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), n), o.DomEvent.stop(t);
    },
    _performZoom: function _performZoom() {
      var t = this._map,
          e = t.getZoom(),
          i = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          s = i ? Math.ceil(o / i) * i : o,
          r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
      this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r));
    }
  }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
    _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
    _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
    addDoubleTapListener: function addDoubleTapListener(t, e, i) {
      function n(t) {
        var e;
        if (o.Browser.pointer) {
          if (!o.Browser.edge || "mouse" === t.pointerType) return;
          e = o.DomEvent._pointersCount;
        } else e = t.touches.length;
        if (!(e > 1)) {
          var i = Date.now(),
              n = i - (r || i);
          a = t.touches ? t.touches[0] : t, h = n > 0 && n <= l, r = i;
        }
      }

      function s(t) {
        if (h && !a.cancelBubble) {
          if (o.Browser.pointer) {
            if (!o.Browser.edge || "mouse" === t.pointerType) return;
            var i,
                n,
                s = {};
            for (n in a) {
              i = a[n], s[n] = i && i.bind ? i.bind(a) : i;
            }a = s;
          }
          a.type = "dblclick", e(a), r = null;
        }
      }
      var r,
          a,
          h = !1,
          l = 250,
          u = "_leaflet_",
          c = this._touchstart,
          d = this._touchend;
      return t[u + c + i] = n, t[u + d + i] = s, t[u + "dblclick" + i] = e, t.addEventListener(c, n, !1), t.addEventListener(d, s, !1), t.addEventListener("dblclick", e, !1), this;
    },
    removeDoubleTapListener: function removeDoubleTapListener(t, e) {
      var i = "_leaflet_",
          n = t[i + this._touchstart + e],
          s = t[i + this._touchend + e],
          r = t[i + "dblclick" + e];
      return t.removeEventListener(this._touchstart, n, !1), t.removeEventListener(this._touchend, s, !1), o.Browser.edge || t.removeEventListener("dblclick", r, !1), this;
    }
  }), o.extend(o.DomEvent, {
    POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
    POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
    POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
    POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
    TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
    _pointers: {},
    _pointersCount: 0,
    addPointerListener: function addPointerListener(t, e, i, n) {
      return "touchstart" === e ? this._addPointerStart(t, i, n) : "touchmove" === e ? this._addPointerMove(t, i, n) : "touchend" === e && this._addPointerEnd(t, i, n), this;
    },
    removePointerListener: function removePointerListener(t, e, i) {
      var n = t["_leaflet_" + e + i];
      return "touchstart" === e ? t.removeEventListener(this.POINTER_DOWN, n, !1) : "touchmove" === e ? t.removeEventListener(this.POINTER_MOVE, n, !1) : "touchend" === e && (t.removeEventListener(this.POINTER_UP, n, !1), t.removeEventListener(this.POINTER_CANCEL, n, !1)), this;
    },
    _addPointerStart: function _addPointerStart(t, i, n) {
      var s = o.bind(function (t) {
        if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
          if (!(this.TAG_WHITE_LIST.indexOf(t.target.tagName) < 0)) return;
          o.DomEvent.preventDefault(t);
        }
        this._handlePointer(t, i);
      }, this);
      if (t["_leaflet_touchstart" + n] = s, t.addEventListener(this.POINTER_DOWN, s, !1), !this._pointerDocListener) {
        var r = o.bind(this._globalPointerUp, this);
        e.documentElement.addEventListener(this.POINTER_DOWN, o.bind(this._globalPointerDown, this), !0), e.documentElement.addEventListener(this.POINTER_MOVE, o.bind(this._globalPointerMove, this), !0), e.documentElement.addEventListener(this.POINTER_UP, r, !0), e.documentElement.addEventListener(this.POINTER_CANCEL, r, !0), this._pointerDocListener = !0;
      }
    },
    _globalPointerDown: function _globalPointerDown(t) {
      this._pointers[t.pointerId] = t, this._pointersCount++;
    },
    _globalPointerMove: function _globalPointerMove(t) {
      this._pointers[t.pointerId] && (this._pointers[t.pointerId] = t);
    },
    _globalPointerUp: function _globalPointerUp(t) {
      delete this._pointers[t.pointerId], this._pointersCount--;
    },
    _handlePointer: function _handlePointer(t, e) {
      t.touches = [];
      for (var i in this._pointers) {
        t.touches.push(this._pointers[i]);
      }t.changedTouches = [t], e(t);
    },
    _addPointerMove: function _addPointerMove(t, e, i) {
      var n = o.bind(function (t) {
        (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && this._handlePointer(t, e);
      }, this);
      t["_leaflet_touchmove" + i] = n, t.addEventListener(this.POINTER_MOVE, n, !1);
    },
    _addPointerEnd: function _addPointerEnd(t, e, i) {
      var n = o.bind(function (t) {
        this._handlePointer(t, e);
      }, this);
      t["_leaflet_touchend" + i] = n, t.addEventListener(this.POINTER_UP, n, !1), t.addEventListener(this.POINTER_CANCEL, n, !1);
    }
  }), o.Map.mergeOptions({
    touchZoom: o.Browser.touch && !o.Browser.android23,
    bounceAtZoomLimits: !0
  }), o.Map.TouchZoom = o.Handler.extend({
    addHooks: function addHooks() {
      o.DomUtil.addClass(this._map._container, "leaflet-touch-zoom"), o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      o.DomUtil.removeClass(this._map._container, "leaflet-touch-zoom"), o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(t) {
      var i = this._map;
      if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
        var n = i.mouseEventToContainerPoint(t.touches[0]),
            s = i.mouseEventToContainerPoint(t.touches[1]);
        this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(n.add(s)._divideBy(2))), this._startDist = n.distanceTo(s), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t);
      }
    },
    _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var e = this._map,
            i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]),
            s = i.distanceTo(n) / this._startDist;
        if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
          if (this._center = this._startLatLng, 1 === s) return;
        } else {
          var r = i._add(n)._divideBy(2)._subtract(this._centerPoint);
          if (1 === s && 0 === r.x && 0 === r.y) return;
          this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
        }
        this._moved || (e._moveStart(!0), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest);
        var a = o.bind(e._move, e, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        this._animRequest = o.Util.requestAnimFrame(a, this, !0), o.DomEvent.preventDefault(t);
      }
    },
    _onTouchEnd: function _onTouchEnd() {
      return this._moved && this._zooming ? (this._zooming = !1, o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd), void (this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))) : void (this._zooming = !1);
    }
  }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
    tap: !0,
    tapTolerance: 15
  }), o.Map.Tap = o.Handler.extend({
    addHooks: function addHooks() {
      o.DomEvent.on(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function removeHooks() {
      o.DomEvent.off(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function _onDown(t) {
      if (t.touches) {
        if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
            n = i.target;
        this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
          this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
        }, this), 1e3), this._simulateEvent("mousedown", i), o.DomEvent.on(e, {
          touchmove: this._onMove,
          touchend: this._onUp
        }, this);
      }
    },
    _onUp: function _onUp(t) {
      if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this), this._fireClick && t && t.changedTouches) {
        var i = t.changedTouches[0],
            n = i.target;
        n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i);
      }
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(t) {
      var e = t.touches[0];
      this._newPos = new o.Point(e.clientX, e.clientY), this._simulateEvent("mousemove", e);
    },
    _simulateEvent: function _simulateEvent(i, n) {
      var o = e.createEvent("MouseEvents");
      o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o);
    }
  }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
    boxZoom: !0
  }), o.Map.BoxZoom = o.Handler.extend({
    initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane;
    },
    addHooks: function addHooks() {
      o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      o.DomEvent.off(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _resetState: function _resetState() {
      this._moved = !1;
    },
    _onMouseDown: function _onMouseDown(t) {
      return !(!t.shiftKey || 1 !== t.which && 1 !== t.button) && (this._resetState(), o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(t), void o.DomEvent.on(e, {
        contextmenu: o.DomEvent.stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this));
    },
    _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._container), o.DomUtil.addClass(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
      var e = new o.Bounds(this._point, this._startPoint),
          i = e.getSize();
      o.DomUtil.setPosition(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
    },
    _finish: function _finish() {
      this._moved && (o.DomUtil.remove(this._box), o.DomUtil.removeClass(this._container, "leaflet-crosshair")), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, {
        contextmenu: o.DomEvent.stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        setTimeout(o.bind(this._resetState, this), 0);
        var e = new o.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
        this._map.fitBounds(e).fire("boxzoomend", {
          boxZoomBounds: e
        });
      }
    },
    _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && this._finish();
    }
  }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
    keyboard: !0,
    keyboardPanDelta: 80
  }), o.Map.Keyboard = o.Handler.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"), o.DomEvent.on(t, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks(), o.DomEvent.off(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      if (!this._focused) {
        var i = e.body,
            n = e.documentElement,
            o = i.scrollTop || n.scrollTop,
            s = i.scrollLeft || n.scrollLeft;
        this._map._container.focus(), t.scrollTo(s, o);
      }
    },
    _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    },
    _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    },
    _setPanDelta: function _setPanDelta(t) {
      var e,
          i,
          n = this._panKeys = {},
          o = this.keyCodes;
      for (e = 0, i = o.left.length; e < i; e++) {
        n[o.left[e]] = [-1 * t, 0];
      }for (e = 0, i = o.right.length; e < i; e++) {
        n[o.right[e]] = [t, 0];
      }for (e = 0, i = o.down.length; e < i; e++) {
        n[o.down[e]] = [0, t];
      }for (e = 0, i = o.up.length; e < i; e++) {
        n[o.up[e]] = [0, -1 * t];
      }
    },
    _setZoomDelta: function _setZoomDelta(t) {
      var e,
          i,
          n = this._zoomKeys = {},
          o = this.keyCodes;
      for (e = 0, i = o.zoomIn.length; e < i; e++) {
        n[o.zoomIn[e]] = t;
      }for (e = 0, i = o.zoomOut.length; e < i; e++) {
        n[o.zoomOut[e]] = -t;
      }
    },
    _addHooks: function _addHooks() {
      o.DomEvent.on(e, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      o.DomEvent.off(e, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var e,
            i = t.keyCode,
            n = this._map;
        if (i in this._panKeys) {
          if (n._panAnim && n._panAnim._inProgress) return;
          e = this._panKeys[i], t.shiftKey && (e = o.point(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
        } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);else {
          if (27 !== i) return;
          n.closePopup();
        }
        o.DomEvent.stop(t);
      }
    }
  }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
    initialize: function initialize(t) {
      this._marker = t;
    },
    addHooks: function addHooks() {
      var t = this._marker._icon;
      this._draggable || (this._draggable = new o.Draggable(t, t, !0)), this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable(), o.DomUtil.addClass(t, "leaflet-marker-draggable");
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable(), this._marker._icon && o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable");
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart");
    },
    _onDrag: function _onDrag(t) {
      var e = this._marker,
          i = e._shadow,
          n = o.DomUtil.getPosition(e._icon),
          s = e._map.layerPointToLatLng(n);
      i && o.DomUtil.setPosition(i, n), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
    },
    _onDragEnd: function _onDragEnd(t) {
      delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    }
  }), o.Control = o.Class.extend({
    options: {
      position: "topright"
    },
    initialize: function initialize(t) {
      o.setOptions(this, t);
    },
    getPosition: function getPosition() {
      return this.options.position;
    },
    setPosition: function setPosition(t) {
      var e = this._map;
      return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    addTo: function addTo(t) {
      this.remove(), this._map = t;
      var e = this._container = this.onAdd(t),
          i = this.getPosition(),
          n = t._controlCorners[i];
      return o.DomUtil.addClass(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this;
    },
    remove: function remove() {
      return this._map ? (o.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this;
    },
    _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
    }
  }), o.control = function (t) {
    return new o.Control(t);
  }, o.Map.include({
    addControl: function addControl(t) {
      return t.addTo(this), this;
    },
    removeControl: function removeControl(t) {
      return t.remove(), this;
    },
    _initControlPos: function _initControlPos() {
      function t(t, s) {
        var r = i + t + " " + i + s;
        e[t + s] = o.DomUtil.create("div", r, n);
      }
      var e = this._controlCorners = {},
          i = "leaflet-",
          n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
      t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    },
    _clearControlPos: function _clearControlPos() {
      o.DomUtil.remove(this._controlContainer);
    }
  }), o.Control.Zoom = o.Control.extend({
    options: {
      position: "topleft",
      zoomInText: "+",
      zoomInTitle: "Zoom in",
      zoomOutText: "-",
      zoomOutTitle: "Zoom out"
    },
    onAdd: function onAdd(t) {
      var e = "leaflet-control-zoom",
          i = o.DomUtil.create("div", e + " leaflet-bar"),
          n = this.options;
      return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
    },
    onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    },
    disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    },
    enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    },
    _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _createButton: function _createButton(t, e, i, n, s) {
      var r = o.DomUtil.create("a", i, n);
      return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), o.DomEvent.on(r, "mousedown dblclick", o.DomEvent.stopPropagation).on(r, "click", o.DomEvent.stop).on(r, "click", s, this).on(r, "click", this._refocusOnMap, this), r;
    },
    _updateDisabled: function _updateDisabled() {
      var t = this._map,
          e = "leaflet-disabled";
      o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && o.DomUtil.addClass(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && o.DomUtil.addClass(this._zoomInButton, e);
    }
  }), o.Map.mergeOptions({
    zoomControl: !0
  }), o.Map.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new o.Control.Zoom(), this.addControl(this.zoomControl));
  }), o.control.zoom = function (t) {
    return new o.Control.Zoom(t);
  }, o.Control.Attribution = o.Control.extend({
    options: {
      position: "bottomright",
      prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(t) {
      o.setOptions(this, t), this._attributions = {};
    },
    onAdd: function onAdd(t) {
      t.attributionControl = this, this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent && o.DomEvent.disableClickPropagation(this._container);
      for (var e in t._layers) {
        t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
      }return this._update(), this._container;
    },
    setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    },
    addAttribution: function addAttribution(t) {
      return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
    },
    removeAttribution: function removeAttribution(t) {
      return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
    },
    _update: function _update() {
      if (this._map) {
        var t = [];
        for (var e in this._attributions) {
          this._attributions[e] && t.push(e);
        }var i = [];
        this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ");
      }
    }
  }), o.Map.mergeOptions({
    attributionControl: !0
  }), o.Map.addInitHook(function () {
    this.options.attributionControl && new o.Control.Attribution().addTo(this);
  }), o.control.attribution = function (t) {
    return new o.Control.Attribution(t);
  }, o.Control.Scale = o.Control.extend({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: !0,
      imperial: !0
    },
    onAdd: function onAdd(t) {
      var e = "leaflet-control-scale",
          i = o.DomUtil.create("div", e),
          n = this.options;
      return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
    },
    onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    },
    _addScales: function _addScales(t, e, i) {
      t.metric && (this._mScale = o.DomUtil.create("div", e, i)), t.imperial && (this._iScale = o.DomUtil.create("div", e, i));
    },
    _update: function _update() {
      var t = this._map,
          e = t.getSize().y / 2,
          i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
      this._updateScales(i);
    },
    _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    },
    _updateMetric: function _updateMetric(t) {
      var e = this._getRoundNum(t),
          i = e < 1e3 ? e + " m" : e / 1e3 + " km";
      this._updateScale(this._mScale, i, e / t);
    },
    _updateImperial: function _updateImperial(t) {
      var e,
          i,
          n,
          o = 3.2808399 * t;
      o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o));
    },
    _updateScale: function _updateScale(t, e, i) {
      t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
    },
    _getRoundNum: function _getRoundNum(t) {
      var e = Math.pow(10, (Math.floor(t) + "").length - 1),
          i = t / e;
      return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
    }
  }), o.control.scale = function (t) {
    return new o.Control.Scale(t);
  }, o.Control.Layers = o.Control.extend({
    options: {
      collapsed: !0,
      position: "topright",
      autoZIndex: !0,
      hideSingleBase: !1,
      sortLayers: !1,
      sortFunction: function sortFunction(t, e, i, n) {
        return i < n ? -1 : n < i ? 1 : 0;
      }
    },
    initialize: function initialize(t, e, i) {
      o.setOptions(this, i), this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
      for (var n in t) {
        this._addLayer(t[n], n);
      }for (n in e) {
        this._addLayer(e[n], n, !0);
      }
    },
    onAdd: function onAdd(t) {
      return this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this), this._container;
    },
    onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);
      for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    },
    addBaseLayer: function addBaseLayer(t, e) {
      return this._addLayer(t, e), this._map ? this._update() : this;
    },
    addOverlay: function addOverlay(t, e) {
      return this._addLayer(t, e, !0), this._map ? this._update() : this;
    },
    removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);
      var e = this._getLayer(o.stamp(t));
      return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
    },
    expand: function expand() {
      o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
      var t = this._map.getSize().y - (this._container.offsetTop + 50);
      return t < this._form.clientHeight ? (o.DomUtil.addClass(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : o.DomUtil.removeClass(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    },
    collapse: function collapse() {
      return o.DomUtil.removeClass(this._container, "leaflet-control-layers-expanded"), this;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          e = this._container = o.DomUtil.create("div", t),
          i = this.options.collapsed;
      e.setAttribute("aria-haspopup", !0), o.DomEvent.disableClickPropagation(e), o.Browser.touch || o.DomEvent.disableScrollPropagation(e);
      var n = this._form = o.DomUtil.create("form", t + "-list");
      i && (this._map.on("click", this.collapse, this), o.Browser.android || o.DomEvent.on(e, {
        mouseenter: this.expand,
        mouseleave: this.collapse
      }, this));
      var s = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
      s.href = "#", s.title = "Layers", o.Browser.touch ? o.DomEvent.on(s, "click", o.DomEvent.stop).on(s, "click", this.expand, this) : o.DomEvent.on(s, "focus", this.expand, this), o.DomEvent.on(n, "click", function () {
        setTimeout(o.bind(this._onInputClick, this), 0);
      }, this), i || this.expand(), this._baseLayersList = o.DomUtil.create("div", t + "-base", n), this._separator = o.DomUtil.create("div", t + "-separator", n), this._overlaysList = o.DomUtil.create("div", t + "-overlays", n), e.appendChild(n);
    },
    _getLayer: function _getLayer(t) {
      for (var e = 0; e < this._layers.length; e++) {
        if (this._layers[e] && o.stamp(this._layers[e].layer) === t) return this._layers[e];
      }
    },
    _addLayer: function _addLayer(t, e, i) {
      t.on("add remove", this._onLayerChange, this), this._layers.push({
        layer: t,
        name: e,
        overlay: i
      }), this.options.sortLayers && this._layers.sort(o.bind(function (t, e) {
        return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex));
    },
    _update: function _update() {
      if (!this._container) return this;
      o.DomUtil.empty(this._baseLayersList), o.DomUtil.empty(this._overlaysList);
      var t,
          e,
          i,
          n,
          s = 0;
      for (i = 0; i < this._layers.length; i++) {
        n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, s += n.overlay ? 0 : 1;
      }return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
    },
    _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();
      var e = this._getLayer(o.stamp(t.target)),
          i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
      i && this._map.fire(i, e);
    },
    _createRadioElement: function _createRadioElement(t, i) {
      var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
          o = e.createElement("div");
      return o.innerHTML = n, o.firstChild;
    },
    _addItem: function _addItem(t) {
      var i,
          n = e.createElement("label"),
          s = this._map.hasLayer(t.layer);
      t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);
      var r = e.createElement("span");
      r.innerHTML = " " + t.name;
      var a = e.createElement("div");
      n.appendChild(a), a.appendChild(i), a.appendChild(r);
      var h = t.overlay ? this._overlaysList : this._baseLayersList;
      return h.appendChild(n), this._checkDisabledLayers(), n;
    },
    _onInputClick: function _onInputClick() {
      var t,
          e,
          i,
          n = this._form.getElementsByTagName("input"),
          o = [],
          s = [];
      this._handlingClick = !0;
      for (var r = n.length - 1; r >= 0; r--) {
        t = n[r], e = this._getLayer(t.layerId).layer, i = this._map.hasLayer(e), t.checked && !i ? o.push(e) : !t.checked && i && s.push(e);
      }for (r = 0; r < s.length; r++) {
        this._map.removeLayer(s[r]);
      }for (r = 0; r < o.length; r++) {
        this._map.addLayer(o[r]);
      }this._handlingClick = !1, this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, e, n = this._form.getElementsByTagName("input"), o = this._map.getZoom(), s = n.length - 1; s >= 0; s--) {
        t = n[s], e = this._getLayer(t.layerId).layer, t.disabled = e.options.minZoom !== i && o < e.options.minZoom || e.options.maxZoom !== i && o > e.options.maxZoom;
      }
    },
    _expand: function _expand() {
      return this.expand();
    },
    _collapse: function _collapse() {
      return this.collapse();
    }
  }), o.control.layers = function (t, e, i) {
    return new o.Control.Layers(t, e, i);
  };
}(window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("reading objects");

var data = {};
var markerData = {
    "Markers": [{
        "Capitol": [{
            "Name": "Crustead",
            "Cordidinates": [-5.17848, -86.13281],
            "Icon": "Capitol",
            "Ruler": "King Marcus Mercer",
            "Government": "Ruled by one King where leadership is passed on based on lineage and blood line.",
            "Races": ["Human", " Half Elf", " Half Orc", " Dwarf", " Dhampire", " Tiefling", " Tengu", " Gnome", " Halfling", " Catfolk", " Ratfolk", " Vanara"],
            "Religion": {
                "special": "",
                "Gods": ['Nethys', 'Abraxas', 'Asmodeus', 'Barbatos', 'Circiatto', 'Korada', 'Orcus', 'Sivanah', 'Urgathoa', 'Yuelral']
            },
            "History": "Long before the the division of the world from the Dragon Circlet Crustead was a bountiful kingdom that ruled over more lands than any other both to the north and to the south. Crustead scientists and researchers where among the first to discover magic and unlock the powers of summoning creatures from differnt planes as well as other magical spells. It was a bountiful time for them and they where able to easily control the entire contenint that they lived on from the Dwarven Mountains to the north all the way to the once lush forests and plains to the south. After the division the Dwarves to the north made the decision that they would be better off if they didn't have to pay tribute to the human king. They fought a bloody war for territory but where able to defend their lands. It wasn't long after this loss that the Orcs to the south invaded the land and started to pillage and attack villages. Due to the large mountains between them and thier souther territory they where unalbe to defend their people. For years they struggled to fend of the orcs but for now they are able to hold them back from coming any farther to the north.",
            "Description": "A city both built and run on magic. Education both of magic as well as research are a priority in this city and you can see the artwork in the artwork of the runes that decorate the city throughout. ",
            "Images": [{
                "Main Image": "https://orig10.deviantart.net/2f46/f/2011/090/4/8/sages_of_ioun_by_noahbradley-d3cvhab.jpg"
            }, {
                "Regional Images": ["https://orig10.deviantart.net/2f46/f/2011/090/4/8/sages_of_ioun_by_noahbradley-d3cvhab.jpg", "https://cdnb.artstation.com/p/assets/images/images/000/662/243/large/jeon-min-seok-minbak1.jpg?1430188781"]
            }],
            "Events": ["Poverty and lack of food for the poor", "<span title =' A powerful noble/wizard is hosting a masquerade ball where the guests are polymorphedinto monster as their costume, but an actual monster attends to kill the noble/wizard'>Come one come all to the mascarade ball hosted by Noble lord Holnor and be sure to wear your finest secound face!</span>"],
            "Jobs": ["Give Aid to the king to fight the Orcs.", "Get Help from other countries.", "Get us better weapons and supplies.", "Convince the Dwarves to trade us fire arms.", "<span title= 'A mage’s guild seeks thieves to steal an artifact that will hamper the use of magic. They plan to use it to control all magic in the city.' >Help Wanted: Mages guild!</span>"],
            "Ammenaties": ["Magic Guild", "  Thieves Guild", "  Assasins Guild", "  Merchant Guild", "  Mercenary Guild", "  Adventurers Guilds", " Food", "  Drink", "  Lodging", "  Medicin", "  Magic Shop", "  Oddity Shop", "  Gear", "  Crafting Shop", " Blacksmith", "  Bowmen", " Alchemy", " Enchanters", " Library", " Museum"]
        }, {
            "Name": "Dhir Ladur",
            "Cordidinates": [68.13885, -101.25],
            "Icon": "Capitol",
            "Ruler": "Throruck Hammerhand",
            "Government": "Ruled by one King where leadership is passed on based on lineage and blood line.",
            "Races": ["Dwarf", " Oread", "Drow"],
            "Religion": {
                "special": "",
                "Gods": ['Abbathor', 'Berronar Truesilver', 'Clangeddin Silverbeard', 'Deep Duerra', 'Dugmaren Brightmantle', 'Dumathoin', 'Gorm Gulthyn', 'Haela Brightaxe', 'Laduguer', 'Marthammor Duin', 'Moradin', 'Sharindlar', 'Thard Harr', 'Vergadain']
            },
            "History": "Under the rule of the Pruvell Kingdom the Dwarves where ill treated and forced to pay rediculous sums of money to the king.The Dwarves have forged a new country by the Clashing of Steel and the spilling of blood they earn their independence from The Pruvell Kingdom. This country of dwarves may not be skilled in the ways of Science and magic but in the ways of engineering, foraging, and Alchemy they are unmatched. With that knowledge they created black powder and have been able to create the first black powder Firearms and explosives. After the Dragon Circlet was seperated from the rest of the world the dwarves came under attack from orcish tribes. They pushed all the way in to the capitol city but by that time the Dwarves had invented gun powder and firearms. ",
            "Description": "Dhir Ladur also known as Crater City. This city was built in a crater. The city is made up of two differnt levels one being inside the crater and the other being at sea level. The city has no need for gates because the canyouns walls make for plenty of safety as is. Their homes are carved into the sides of these walls. The dwarves get around the city from the upper levels to their homes by a series of bridges, ziplines, and flying trollies that they have all concocted. The upper level is what they call the trading hub. It is here that shops and merchants can all be found and where the largest majority of the dwarven people can be found. On the edges of the trading hub the you can find hanging landing pads and wooden docs. You see the dwarves are engineering geniouses. Not only have they created black powder guns and explosives but they have also crafted flying machines. With these flying machines they have created trade routes accross the whole of the Dragon Circlet without fear of pirates or so they believe and they are able to survey their country. The people of crustead spend their days at the forge and the alchemy tables crafting new engineering masterpieces while their brothers in the mountains just to the south spend their days minig for the precious minerals that are used. If you are looking for a well forged weapon or suit of armor custom made the dwarves of crustead are the ones to talk to even if the cost is high.",
            "Images": [{
                "Main Image": "https://img00.deviantart.net/8a72/i/2011/033/7/b/secret_of_the_abandoned_land_by_camilkuo-d38n12k.jpg"
            }, {
                "Regional Images": ["https://img00.deviantart.net/8a72/i/2011/033/7/b/secret_of_the_abandoned_land_by_camilkuo-d38n12k.jpg", 'https://s-media-cache-ak0.pinimg.com/originals/cc/a3/cb/cca3cb34663d53ab204a799726030a36.jpg', 'https://cdna.artstation.com/p/assets/images/images/000/550/434/large/matthew-harris-139.jpg?1426492709', 'https://s-media-cache-ak0.pinimg.com/564x/64/d7/4d/64d74d4540bf02e7747fd6aa2c9a3cd2.jpg', 'https://designspartan.com/wp-content/uploads/2013/07/pres_fan3.jpg']
            }],
            "Events": "",
            "Jobs": ["<span title = '8. Shipments from a nearby mine have stopped, when the PCs investigate they find the minerscrazed and covered with red welts apparently from exposure to a new element they uncovered' >Shipments from our mines in the mountains have stopped coming and we want you to go and see what is going on!</span>", "<span title='A local craftsmen: Marble carved from a newfound quarry is animating.'>One of our local marbel quaries is under attack and we need some able bodies to help deal with the threat!</span>"],
            "Ammenaties": ["Thieves Guild", " Assasins Guild", " Merchant Guild", " Mercenary Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library", "Museum"]

        }, {
            "Name": "Ulaxdale",
            "Cordidinates": [53.69671, 167.95898],
            "Icon": "Capitol",
            "Ruler": "Bishop Gramrot, The Redeemer",
            "Government": "Bishops: The religious leaders follow & enforce the laws that are set up by the Council of elder dragons.",
            "Races": ["DragonKin", "Kobold", " PolarKin", "Half-Wolf", " Half-Owl", "Half-Stag(Deer like human)"],
            "Religion": {
                "special": "Before life began there was Nigrum and Alba. Each believed that they where alone in the void of nothingness. Alba whith her great power created a light that brought warmth to the void. This light created the effect of time passing from day to night and night to day. It was at the edge of this cycle that Alba and Nigrum first saw eachother. For the next centry they talked to each other during these shifts each day until their love for one another became to strong. It was then that they used all of their power to cross between the light and the dark. When they came together their bodies entwined and formed the world and all life that inhabits it. The dragons that inhabit the world are their offspring and they recieved some of their magic.",
                "Gods": ["Draco alba", "Nigrum Draco"]
            },
            "History": "After the Rupture The Pruvell Kingdom took advantage of the Dragonkin taking what was left of the Elder dragons that they could. What remained of the dragons made a collective decision that they would sacrafice themselves so that they could use all of their magic to create differnt races that would serve and protect the last of their kind so that they could grow the next generation and continue the dragonkin line. With their deaths PolarKin,Half-Owl,Half-Stag where born into existance. Though they where slaves back then they are more equals today then the DragonKin see other races. Over the years a grand army was created to defend the dragon circlet from outside threats.",
            "Description": "built into the sides of the mountains and their peaks the children of the Dragons reside.  Liveing off the land and protecting their ways of living they believe the best way to live life is with honor. though they may not embrace the future their intelligence is not lacking and though they fight with but sword and bow they have spent a lifetime training in the art of war. Still at war with the Dronem Empire who to this day still come here to kill us for our scales and bones we fight to defend our ancestors as well as our children.",
            "Images": [{
                "Main Image": "./Transer_folder/Images/UlaxdaleHome.jpg"
            }, {
                "Regional Images": ["https://dnd-april-backup-moser2010.c9users.io/Transer_folder/Images/UlaxdaleHome.jpg", 'https://cdnb.artstation.com/p/assets/images/images/001/983/137/large/victoriya-anda-0209-riverside-3.jpg?1466590847', 'https://dxthpu4318olx.cloudfront.net/assets/images/000/254/984/large/1425879474.jpg?1425909794', 'https://s-media-cache-ak0.pinimg.com/564x/a1/2e/34/a12e34a75adcbe1136bd50e11943adc7.jpg', 'https://pre02.deviantart.net/834e/th/pre/i/2016/179/4/c/dragonborn_samurai_by_sixteenmoons16-da80to0.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/58/6b/3e/586b3e1b37786114912fe03655a9fea5.jpg', 'https://68.media.tumblr.com/53654c48b2d8a791261375a253c7ec53/tumblr_nxmgo1FREn1rnnsbeo1_1280.jpg', 'https://68.media.tumblr.com/361aa0bdcb1a1e35eec481412ebf7fbb/tumblr_ok3jp7OjCi1uq3z2uo1_1280.jpg', 'https://68.media.tumblr.com/2e464c91e1fd091eaee91d4639bd345f/tumblr_niyv4qDSqQ1td8817o1_1280.jpg', 'https://cf.geekdo-images.com/images/pic1530426_md.jpg', 'https://orig06.deviantart.net/c852/f/2015/078/6/a/owl_by_forrestimel-d8m6m16.png', 'https://i.imgur.com/tDDkzn2.jpg', 'https://i.imgur.com/wWw2ZFM.jpg', 'https://dnd-april-backup-moser2010.c9users.io/Transer_folder/Images/wolfs.jpg', 'https://dnd-april-backup-moser2010.c9users.io/Transer_folder/Images/dragonKin.jpg']
            }],
            "Events": "At war with Dronem Empire.",
            "Jobs": ["<span title='Priest: Reports that a gold dragon is ravaging the countryside turn out to be true. The dragon, sick with a rare disease, has gone mad and must be stopped'>I have recieved reports that our a dragon is causing chaos in Norwich and I want you to go verify if this is true or not as well as what might be the cause. If it is and you cant find a cause then the council wants their brother put down.</span>", "Gather the crests from each nation and unlock the sphere so that we may once again be apart of the world and grow bountiful in trade.", "Gramrot: I want to end this war one way or another no matter the cost. I want you to either help us make peace with the Dwarven king or for you to kill him."],
            "Ammenaties": ["Magic Guild", " Thieves Guild", " Assasins Guild", " Merchant Guild", " Mercenary Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library", "Museum"]

        }, {
            "Name": "Nilhalond",
            "Cordidinates": [27.88584, 0],
            "Icon": "Capitol",
            "Ruler": "Your Mom",
            "Government": "Each region is ruled by its own leader but major decisions such as war and what is best for all are made in a council which is made up of those rulers.",
            "Races": ["Elves", " Half Elves", " Drow"],
            "Religion": {
                "special": "Worship the gods of nature.",
                "Gods": ['Alseta', 'Calistria', 'Cernunnos', 'Desna', 'Findeladlara', 'Ketephys', 'Nethys', 'Yuelral']
            },
            "History": "The elves have been in the dragon circlet before almost all other races other than the dragonkin. It is because of this that they belive that the gods created them and they are their decendents. Though they live long lives much of them used to be spent in poverty and with ill regard from other races. The elves where once spread accross the whole of the Dragon Circlet until one day a great elf stepped forward and created a grand small village of elves ment to be a home and a safe have for elves of all types and races. Slowly over time more and more elves came their numbers increasing until what was once a small viallage grew into a large roaring city that was to overcrowded. Again they where pushed into poverty with not enough food to support the elven people. They knew that something had to change they knew that they needed access to more resources. So they banded together and pushed outward slowly pushing out the residence of Elen Veil until they controlled the whole continent. Believing that having one single ruler over the elves would do no more than cause chaose it was decided that there would be a council of elves that made a collective decision for the people of Elen Veil. The land was then split up some getting the more lush of the country while others having to learn to adapt to the new enviroments that they where succumbed to. Now all that they truely wish to do is live in peace but in order to keep that peace there is always a cost somewhere down the road.",
            "Description": "Nilhalond gets its name after the large tree that the capitol is built around and within. ",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/3f/f8/7f/3ff87f9f414f2711a3f119afba11f7f1.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/3f/f8/7f/3ff87f9f414f2711a3f119afba11f7f1.jpg", 'https://s-media-cache-ak0.pinimg.com/564x/56/86/d7/5686d7dd5cb60f6bf51de898501ebd4a.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/fc/e7/59/fce7595cd08d59fed865e84b1f6b36d3.jpg', 'https://pre03.deviantart.net/4e9b/th/pre/i/2013/345/4/4/tree_village_by_suiatsu-d6x7ut3.jpg']
            }],
            "Events": "Bad stuff has been happening here",
            "Jobs": ["There is always work to be had"],
            "Ammenaties": ["Magic Guild", " Thieves Guild", " Assasins Guild", " Merchant Guild", " Mercenary Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library", "Museum"]

        }],
        "City": [{
            "Name": "Lysthaes",
            "Cordidinates": [52.85586, -9.22852],
            "Icon": "City",
            "Ruler": "Eban Sual",
            "Government": "",
            "Races": ["Elves", " Half Elves", " Drow"],
            "Religion": {
                "special": "",
                "Gods": ['Alseta', 'Calistria', 'Cernunnos', 'Desna', 'Findeladlara', 'Ketephys', 'Nethys', 'Yuelral']
            },
            "History": "",
            "Description": "Lysthaes is a large port city located to the north of the Nilhalond just on the otherside of the White Frost Mountains. It is their duty to protect Cresent Moon Bay as well as to be the first defence from any attackers from the north. They do not have a lot of recources durring the winter and so they rely heavily on trading with the capitol durring that time period. Although the winters are tough the summers are warm enough to help grow large crops big enough to feed the whole kingdom.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/9f/aa/0b/9faa0bc82653b691798fa9620927d049.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/9f/aa/0b/9faa0bc82653b691798fa9620927d049.jpg", "https://s-media-cache-ak0.pinimg.com/564x/a3/4f/cf/a34fcf75dffd4dc2b0515890668b9d56.jpg", 'https://s-media-cache-ak0.pinimg.com/564x/1a/5f/fc/1a5ffcb5137d44d3db36708b4a1d8e52.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/35/48/32/354832b1e87efe876423986cb816ca9b.jpg']
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Magic Guild", " Thieves Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Frozen Port",
            "Cordidinates": [64.0145, 78.04688],
            "Icon": "City",
            "Ruler": "Bishop Jezuar",
            "Government": "The town is directed by a priest who represents the will of both the bishop an the council of elder dragons.",
            "Races": ["DragonKin", "Kobold", " PolarKin", "Half-Wolf", " Half-Owl", "Half-Stag(Deer like human)", "Human", " Halfling", "Dwarf"],
            "Religion": {
                "special": "",
                "Gods": ['Draco alba", "Nigrum Draco']
            },
            "History": "Durring the days after the dragons where slautered by the outsides the remaining dragons knew that they where in danger as well as the dragonkin. They made a collective decision to seperate the outside world from the dragon circlet as well as to go into hiding. The dragons knew if this place deep underground and brought all the dragonkin to Frozen Port. It was here that they remained for years until they where able to leave the caverns and expand into the open air of the world. ",
            "Description": "Deep underground through winding paths and twisting caverns there is a town known as Frozen Port. Finding Frozen port is an arguious and difficult task for those that have not been there before and so a guide must be procureed to find this town. The entire city is made of giant crystals that hang from the tall ceilings within the caverns. This town is extreamly unique and is a vital piece to the survival of the entire kingdom. Due to the harsh enviroments of the north it has made it impossible to grow food in this land which is why this town is so pivital. The conditions underground in this city are warm enough and the soil righ enough that they are able to grow large crops underground. What makes this the most possible is the fact that the large crystals in the cave emmit a bright light that immatates the sunlight and allows the crops to grow.  ",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/f5/16/1a/f5161afc194d76f593630bb74fc457d8.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/f5/16/1a/f5161afc194d76f593630bb74fc457d8.jpg", 'https://i341.photobucket.com/albums/o368/Crisis-The-Striker/Death_king/696_large_zps59d11f82.jpg']
            }],
            "Events": "",
            "Jobs": ["<span title='As they travel deep underground all the way into the heart of the mountain they find a massive monster that has been controlling all the other creatures down here.'>The city has come under attack from creatures that live deep underground in the caves and paths under the mountain. Bishop Jezuar would like you to travel deep into the mountain and quell this disturbance before it gets worce.</span>"],
            "Ammenaties": ["Thieves Guild", " Assasins Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library", "Museum"]
        }, {
            "Name": "Stardenn",
            "Cordidinates": [-40.71396, 107.40234],
            "Icon": "City",
            "Ruler": "Captain Dwennon",
            "Government": "We live by the pirate code even though they are more like guidlines.",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": ['Besmara']
            },
            "History": "After the wars many men returned home to thier wives to find their sons gone. For the large number of those fatherless sons and sonless fathers they turned to the call of the sea. Many of the people of the free marches struggle on a day to day basis trying to recoup the losses under the old king and it is because of these things that they have become outlaws and brigadans. This city is built on the grave yard of sunken ships durring the wars. The currents of the great open sea flow right past this cove and thus provided pleanty of floating lumber, as well as some other nice trinkets. Welcome maties!",
            "Description": "In a country where all people are free to live how they like there are always those that take up a li of crime and for them Stardenn is a haven. The city is in a small island cove built out of the remains of flallen ships with bridges crossing from place to place. Most of the people spend their days drinking away and counting the hall that they had brought in from the last raid on an unsuspecting ship or village. What keeps the corruption from breaking out into total chaose? One man or pirate king by the name of Dwennon is able to keep the piece through fear.",
            "Images": [{
                "Main Image": "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/bilgewater_splash.jpg"
            }, {
                "Regional Images": ["https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/bilgewater_splash.jpg", "https://s-media-cache-ak0.pinimg.com/564x/f2/0a/23/f20a23554ce51bd4668c4e9cdb572bc8.jpg"]
            }],
            "Events": "",
            "Jobs": ["A group of pirates have not paid me their owed share of what they have plundered. I believe that they are held up in the dungeon tower to the north and I want you to go and get me my money.", "Strange creatures have been attacking pirate ships and they are reporting these creatures are coming from Red Spire. Go and clear them out and I will reward you greatly."],
            "Ammenaties": ["Class School: Pirate, Rouge, Exemplar, Mutagenic Mauler, Flying Blade, Bounty Hunter, Grave Warden,Black Powder Hood", "Magic Guild", " Thieves Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "City 1",
            "Cordidinates": [74.86789, -153.28125],
            "Icon": "City",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": ['']
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/3d/a2/00/3da2007f896eb2349a780316262232df.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/3d/a2/00/3da2007f896eb2349a780316262232df.jpg"]
            }],
            "Events": "",
            "Jobs": [""],
            "Ammenaties": ["Class School: ", "Magic Guild", " Thieves Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Kerndohr",
            "Cordidinates": [51.06902, -78.57422],
            "Icon": "City",
            "Ruler": "Thezzaic Chainbrow",
            "Government": "Thezzaic follows the leadership of the dwarven king. But here he is in charge of the city and making sure that all is peaceful and that everyone is profitable.",
            "Races": ["Dwarves"],
            "Religion": {
                "special": "",
                "Gods": ['']
            },
            "History": "A grand mining city the first and largest of its kind. This city started out as just a small mine and dwarves where living at the base of the mountain but since it has grown and a large city was built into the mountain where many Dwarves have moved here to call a new home.",
            "Description": "Built into the mountain side tunneling deep into its heart the dwarves mine this mountain for ores and other minerals used to create their powerful flying machines an firearms.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/4f/5f/2b/4f5f2b891a1909e9a48e8651e41c3db7.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/4f/5f/2b/4f5f2b891a1909e9a48e8651e41c3db7.jpg"]
            }],
            "Events": "",
            "Jobs": [""],
            "Ammenaties": ["Class School: ", "Magic Guild", " Thieves Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }],
        "Docs": [{
            "Name": "Ferry from Half Skull Prision",
            "Cordidinates": [10.91962, 81.65039],
            "Icon": "Docs"
        }, {
            "Name": "White Axe Landing",
            "Cordidinates": [72.52813, -3.16406],
            "Icon": "Docs"
        }, {
            "Name": "Docs 1",
            "Cordidinates": [10.31492, -103.00781],
            "Icon": "Docs"
        }, {
            "Name": "Port of Closteles",
            "Cordidinates": [68.4638, 145.10742],
            "Icon": "Docs",

            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Port of ",
            "Cordidinates": [-74.28356, -1.66992],
            "Icon": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Ship Inspection",
            "Cordidinates": [75.65043, 127.5293],
            "Icon": "Docs",
            "Description": "Inspection yard to enter into Draco Rignum",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Ship Inspection",
            "Cordidinates": [75.40885, 152.13867],
            "Icon": "Docs",
            "Description": "Inspection yard to enter into Draco Rignum",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [19.31114, 1.05469],
            "Icon": "",
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [62.06273, 74.17969],
            "Icon": "",
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [41.37681, 89.12109],
            "Icon": "",
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [-66.72254, 134.29688],
            "Icon": "",
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [-57.79794, 130.60547],
            "Icon": "",
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [-30.29702, 105.29297],
            "Icon": "",
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Ferry to Half Skull Prision",
            "Cordidinates": [9.0153, 100.89844],
            "Icon": "Docs"
        }, {
            "Name": "",
            "Cordidinates": [4.74068, 40.16602],
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Yean Alora Trading Port",
            "Cordidinates": [8.14624, -50.625],
            "Icon": "Docs"
        }, {
            "Name": "",
            "Cordidinates": [74.21198, -163.82813],
            "Icon": "Docs"
        }, {
            "Name": "",
            "Cordidinates": [21.45307, -68.29102],
            "Icon": "Docs"
        }, {
            "Name": "",
            "Cordidinates": [56.26776, -12.12891],
            "Icon": "",
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }],
        "Dragon": [{
            "Name": "",
            "Cordidinates": [60.58697, 173.49609],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "Dragon:<br> There are a large number of dragons here that are protecthed by the DragonKin. This is the home of the Elder Dragons",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [-37.30028, -46.93359],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [60.58697, 173.49609],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "",
            "Cordidinates": [60.58697, 173.49609],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }],
        "Dungeon Tower": [{
            "Name": "Red Spire",
            "Cordidinates": [-33.72434, 110.03906],
            "Icon": "Dungeon Tower",
            "History": "Not much is known about this place. As far as most are concerned it has always been there.",
            "Description": "A large red stone tower is located a little ways inland from the ocean but most belive that their are caves that go under the island and into the tower. Many adventurers have ventured inward to this dungeon hearing the tales of creatures sinking ships and taking their treasure. Most belive that the treasures lost are all somewhere in the depths of this dungeon.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ed/11/0b/ed110bff25c843eaff89f9f8cc1f6b5c.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ed/11/0b/ed110bff25c843eaff89f9f8cc1f6b5c.jpg"]
            }]
        }, {
            "Name": "Mountain Watch Tower",
            "Cordidinates": [-73.42842, 174.90234],
            "Icon": "Dungeon Tower",
            "History": "<span title='This holds a the god Asmodeus in chains deep below the mountian if the adventurers find him then he makes them a deal to have them release him. He will do anything to be free at any cost even if it means not being able to kill.'>Tales pratell of this ancient dungeon and the followers that once worshiped it. It is beleived that this dungeon was the home of the cult of a god but none know for sure. Very few wish to tempt fate and travel to it which means whatever treasures are within this dungeon are still sealed away awaiting those brave enough and strong enough to unseal it.</span>",
            "Description": "Deep within the belly of the mountain is a room with powers beyond that of any mage on this earth. Within the room are gateways to new relms, artifacts that counjure great genies, and gems of untold wealth.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/b3/af/f3/b3aff3cd19aff0a8b09408364a8e219a.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/b3/af/f3/b3aff3cd19aff0a8b09408364a8e219a.jpg"]
            }]
        }, {
            "Name": "Magis Tower",
            "Cordidinates": [-25.56227, -80.68359],
            "Icon": "Dungeon Tower",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/00/fe/cd/00fecd9f33f0a45157c78b360d9fd784.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/00/fe/cd/00fecd9f33f0a45157c78b360d9fd784.jpg", "https://s-media-cache-ak0.pinimg.com/564x/85/f4/90/85f4902a77f0fc617c1e3cfc27248fa9.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Half Skull Prision Tower 2",
            "Cordidinates": [6.3153, 68.20313],
            "Icon": "Dungeon Tower",
            "Ruler": "Warden Bella Claric",
            "Government": "Under my rule you rats will be reformed!",
            "History": "For countries, cities, towns, and villages with criminals that they can not handle this is where they end up. This prision was designed to hold some of the worst of the worst. It is because of this place of darkness and despair that brings light to all other countries in a beliefe that their can be peace among them some day.",
            "Description": "Built on and island and tunnled deep into the ground their is no way of escape but up and the higher you go the more security their is. On the lowest of levels the criminals practiacally run free in dispair knowing that their is no way to escape. Dig your way out and you drown or fight your way out and you die.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/9e/56/69/9e5669a7f63201bdad5a06979c15cebb.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/9e/56/69/9e5669a7f63201bdad5a06979c15cebb.jpg"]
            }]
        }, {
            "Name": "Half Skull Prision Tower 1",
            "Cordidinates": [11.1784, 74.35547],
            "Icon": "Dungeon Tower",
            "Ruler": "Warden Bella Claric",
            "Government": "Under my rule you rats will be reformed!",
            "History": "For countries, cities, towns, and villages with criminals that they can not handle this is where they end up. This prision was designed to hold some of the worst of the worst. It is because of this place of darkness and despair that brings light to all other countries in a beliefe that their can be peace among them some day.",
            "Description": "Built on and island and tunnled deep into the ground their is no way of escape but up and the higher you go the more security their is. On the lowest of levels the criminals practiacally run free in dispair knowing that their is no way to escape. Dig your way out and you drown or fight your way out and you die.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/9e/56/69/9e5669a7f63201bdad5a06979c15cebb.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/9e/56/69/9e5669a7f63201bdad5a06979c15cebb.jpg"]
            }]
        }, {
            "Name": "Mountain Watch Tower",
            "Cordidinates": [-73.42842, 174.90234],
            "Icon": "Dungeon Tower",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Mountain Watch Tower",
            "Cordidinates": [-73.42842, 174.90234],
            "Icon": "Dungeon Tower",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Mid Summer Fen",
            "Cordidinates": [25.72074, 31.11328],
            "Icon": "Dungeon Tower",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Goblin City",
            "Cordidinates": [70.98835, -67.06055],
            "Icon": "Dungeon Tower",
            "Races": ["Goblins"],
            "History": "Not much is known about this place other than it is inhabited by Goblins deep underground.",
            "Images": [{
                "Main Image": "https://img11.deviantart.net/4a80/i/2012/137/c/4/svirfneblin_community_by_noahbradley-d5035vj.jpg"
            }, {
                "Regional Images": ["https://img11.deviantart.net/4a80/i/2012/137/c/4/svirfneblin_community_by_noahbradley-d5035vj.jpg", "https://s-media-cache-ak0.pinimg.com/564x/1f/66/71/1f6671d744e0a650a5ef18c82e758c65.jpg"]
            }],
            "Events": "Come down down down to goblin town. Maybe you will get lucky and find a demolitions expert or maybe you will be a friend to their spear heads."

        }, {
            "Name": "Westhaven Watchtower",
            "Cordidinates": [-26.6671, -161.10352],
            "Icon": "Dungeon Tower",
            "History": "Previously this tower belonged to the Pruvell Kingdom and was used to keep watch for incomeing threats from the west. Since the Orcs invaded its defenders have fled and darker beings have inhabit its halls. If you travel here be prepared to face a hord of orcs.",
            "Description": "",
            "Images": [{
                "Main Image": "https://orig08.deviantart.net/5ceb/f/2015/108/3/5/ruins_by_chriscold-d8q4hvr.jpg"
            }, {
                "Regional Images": ["https://orig08.deviantart.net/5ceb/f/2015/108/3/5/ruins_by_chriscold-d8q4hvr.jpg"]
            }]
        }],
        "Orc Town": [{
            "Name": "Gurdurd",
            "Cordidinates": [6.05316, -156.88477],
            "Icon": "Orc Town",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/4a/4d/b0/4a4db0d56b57db513976f9cd76ea0e76.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/4a/4d/b0/4a4db0d56b57db513976f9cd76ea0e76.jpg"]
            }],
            "Jobs": ["Someone please clease my temple of the beasts that have come and made it their home."]
        }, {
            "Name": "Arkugh",
            "Cordidinates": [-46.55886, -118.82813],
            "Icon": "Orc Town",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ac/47/f1/ac47f132efe8bb7a2073b161a43204d1.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ac/47/f1/ac47f132efe8bb7a2073b161a43204d1.jpg"]
            }]
        }, {
            "Name": "Noddird Dokh",
            "Cordidinates": [-42.81152, -164.00391],
            "Icon": "Orc Town",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ac/47/f1/ac47f132efe8bb7a2073b161a43204d1.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ac/47/f1/ac47f132efe8bb7a2073b161a43204d1.jpg"]
            }]
        }, {
            "Name": "Dragu",
            "Cordidinates": [-76.26869, -149.41406],
            "Icon": "Orc Town",
            "Images": [{
                "Main Image": "https://orig05.deviantart.net/bb40/f/2014/188/a/2/orc_city_by_jbrown67-d7pobfn.jpg"
            }, {
                "Regional Images": ["https://orig05.deviantart.net/bb40/f/2014/188/a/2/orc_city_by_jbrown67-d7pobfn.jpg"]
            }]
        }, {
            "Name": "Zralkan",
            "Cordidinates": [18.64625, -161.10352],
            "Icon": "Orc Town",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ac/47/f1/ac47f132efe8bb7a2073b161a43204d1.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ac/47/f1/ac47f132efe8bb7a2073b161a43204d1.jpg"]
            }]
        }, {
            "Name": "Ba Arza",
            "Cordidinates": [21.61658, -166.28906],
            "Icon": "Orc Town",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/04/ad/0b/04ad0b27c8e527c545235f61ee1249a2.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/04/ad/0b/04ad0b27c8e527c545235f61ee1249a2.jpg"]
            }]
        }],
        "Citadel": [{
            "Name": "Home of the sea god.",
            "Cordidinates": [19.14517, 103.35938],
            "Icon": "Citadel",
            "Religion": {
                "special": "The great temple of Gozreh",
                "Gods": ['Gozreh']
            },
            "History": "This beautiful temple belongs to the God Gozreh who calls travelers of the sea to come and rest in her arms",
            "Description": "This temple stand taller than all of Gozreh's other temples for this is a holy place beyond all others.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/4a/4d/b0/4a4db0d56b57db513976f9cd76ea0e76.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/4a/4d/b0/4a4db0d56b57db513976f9cd76ea0e76.jpg"]
            }],
            "Jobs": ["Someone please clease my temple of the beasts that have come and made it their home."]
        }, {
            "Name": "Count Diago Montoia's Castle",
            "Cordidinates": [22.75592, -164.70703],
            "Icon": "Citadel",
            "History": "This castle used to belong to Count Diago Montoia, a very rich man with nobel blood, but the orcs have slowly been pushing into Pruvell from the West. Being that this castle is in a mountain canyon range it proved difficult to get assistance from the King as they where cut off. The battle for the estate was hard fought but eventually the supperior strength of the Orcs outmatched the Counts own forces.",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/4a/4d/b0/4a4db0d56b57db513976f9cd76ea0e76.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/4a/4d/b0/4a4db0d56b57db513976f9cd76ea0e76.jpg"]
            }]
        }, {
            "Name": "Forgotten Kingdom of White Spring",
            "Cordidinates": [70.25945, 176.48438],
            "Icon": "Citadel",
            "Religion": {
                "special": "",
                "Gods": ['Cayden Cailean', 'Erastil', 'Torag']
            },
            "History": "Not much is known of this old kingdom. Most of what we know come from tales about how the kingdom was overthrown by the dragonkin so that they could reclaim the lands that where rightfully theirs.",
            "Description": "The citadel is all the remains of the old kingdom with its halls cold and dim, the walls painted with stories of the kingdoms rise to power and its religious affiliations. This once beautiful place is all but lost and in ruin.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/86/6a/96/866a961daedbae6e042681c192e6e522.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/86/6a/96/866a961daedbae6e042681c192e6e522.jpg"]
            }]
        }, {
            "Name": "Keep of the Fallen Order",
            "Cordidinates": [34.52466, -84.02344],
            "Icon": "Citadel",
            "Religion": {
                "special": "",
                "Gods": ['Cayden Cailean', 'Erastil', 'Torag']
            },
            "History": "This now forgotten place was once the castle to a mighty order of created out of the unity of paladins, holy knights, and clerics. They where charged by the king to uphold truth and justice accross the land and defend the lands from the darness that emerge no matter where they may come from. Durring the hight of the kingdom it was a vast and powerful order but since the orcs came and the rebelion of the dwarves to the north the king had no choice but to call upon his finest warriors to help defend the land and its borders. With this the order was no more. All have gone to fight for the kingdom and few have ever returned to this place.",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/63/ae/f3/63aef33d1846bf062f17b9a6260d6a2f.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/63/ae/f3/63aef33d1846bf062f17b9a6260d6a2f.jpg"]
            }]
        }, {
            "Name": "Black Gate Citadel",
            "Cordidinates": [58.53959, -133.24219],
            "Icon": "Citadel",
            "Religion": {
                "special": "",
                "Gods": ['Cayden Cailean', 'Erastil', 'Torag']
            },
            "History": "Not much is known of this old kingdom. Most of what we know come from tales about how the kingdom was overthrown by the dragonkin so that they could reclaim the lands that where rightfully theirs.",
            "Description": "The citadel is all the remains of the old kingdom with its halls cold and dim, the walls painted with stories of the kingdoms rise to power and its religious affiliations. This once beautiful place is all but lost and in ruin.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/d5/2e/4d/d52e4d3294e81140687b04b70a0cf8ac.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/d5/2e/4d/d52e4d3294e81140687b04b70a0cf8ac.jpg"]
            }]
        }, {
            "Name": "Dred Sanctum",
            "Cordidinates": [27.79989, 177.27539],
            "Icon": "Citadel",
            "Ruler": "Ele Trydyg",
            "History": "This place used to be the old kings castle where he ruled over the kingdom now known as freehaven but now in his place a necromancer and a lich have moved into the citadel. They control most of this land as it is a rich resource of dead and decayed corpses from centeries past. These grasslands held many battles here and many a good man died here. The Lich and Necromancer work together to raise an undead army for unknown reasons. But the wardens of Dragons Tail Keep and the white necromancers to the south west have us in a war where we only get strong for each of them that we kill.",
            "Description": "These once gold and marbel hallways are covered in mold and dust. Unholy runes and magic are scattered about the entire castle warning any that dare enter. Giant magic crystals line the hallways bringing souls back from the nether world to be used to animate the dead.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/14/73/a8/1473a8741a251ecdfdbb60421985d924.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/14/73/a8/1473a8741a251ecdfdbb60421985d924.jpg", 'https://s-media-cache-ak0.pinimg.com/564x/6f/7d/c9/6f7dc959c1bcd1ebeb5a1306cb1e819a.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/d5/2e/4d/d52e4d3294e81140687b04b70a0cf8ac.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/ce/b0/2b/ceb02b2fa718fe0c1590c73e4ff72328.jpg']
            }]

        }, {
            "Name": "Sanctus Draculum",
            "Cordidinates": [-62.59334, -87.71484],
            "Icon": "Citadel",
            "Ruler": "Aleister Nestor",
            "History": "This castle was once inhabited by a very wealth family of the Pruvell Kingdom but when the orcs attacked they all lost their lives. Since then a group of vampires and othe rdark spawn have moved into the Castle. The orcs will attack every now and again but even they are no match for the unholy strength that the vampires posses. Hopefully someone can deal with them before the Orcs make an allience with them or worse. ",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/e7/72/f4/e772f4853214223bc03d95115f861df4.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/e7/72/f4/e772f4853214223bc03d95115f861df4.jpg", "https://s-media-cache-ak0.pinimg.com/564x/5a/19/03/5a1903976313f8dac409d9103e8960e4.jpg"]
            }]

        }, {
            "Name": "Moon Light Citadel",
            "Cordidinates": [-37.30028, -46.93359],
            "Icon": "Citadel",
            "History": "This was once a grand city before the elves rose and swept accross the land removing any that where not of elven decent. This city was the last stronghold that the elves took and with it the fall of the old kingdom and making of a new one. Now in the place of the people that once lived here thieves and other monsters have moved in and terrorize the desert region from city to city.",
            "Description": "The remnants of a city that once existed. Not much common knowledge is known about the area since it has come under control of bandits. Most people think its where their base is and where they stockpile all of their treasure.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/b4/4e/7d/b44e7dd5ba9388ebd2fdd95c87d00aaa.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/b4/4e/7d/b44e7dd5ba9388ebd2fdd95c87d00aaa.jpg"]
            }]
        }],
        "Military Tower": [{
            "Name": "Crohunn Tahul Tower",
            "Cordidinates": [74.77584, 157.14844],
            "Icon": "Military Tower",
            "Ruler": "Captain Iron Claw",
            "Races": ["DragonKin"],
            "History": "After the country side came under rule of the dragonkin the council of elders decided that in order to defend the people the best thing for them to do is for them to construct two military watch towers to guard the enemy attacks from the north by way of sea. Each tower was put under the control of a Captian in the army who is in charge of maintaing the towers, keeping defences up to par, and being read to be defend the north.",
            "Description": "These two towers have a large grouping of chains with huge metal spikes coming off many sides of the chains. If a ship was to try and enter without first passing inspection from one of the towers the chains will raise from the ocean floor and create a blockade keeping any ship from entering as well as destroying those that attempted to do so.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/b9/89/44/b98944197d877a376033131f3d0ef33e.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/b9/89/44/b98944197d877a376033131f3d0ef33e.jpg"]
            }],
            "Events": "",
            "Jobs": []
        }, {
            "Name": "Crohunn Tahh Tower",
            "Cordidinates": [74.4729, 123.22266],
            "Icon": "Military Tower",
            "Ruler": "Captain Iron scale",
            "Races": ["DragonKin"],
            "History": "After the country side came under rule of the dragonkin the council of elders decided that in order to defend the people the best thing for them to do is for them to construct two military watch towers to guard the enemy attacks from the north by way of sea. Each tower was put under the control of a Captian in the army who is in charge of maintaing the towers, keeping defences up to par, and being read to be defend the north.",
            "Description": "These two towers have a large grouping of chains with huge metal spikes coming off many sides of the chains. If a ship was to try and enter without first passing inspection from one of the towers the chains will raise from the ocean floor and create a blockade keeping any ship from entering as well as destroying those that attempted to do so.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/b9/89/44/b98944197d877a376033131f3d0ef33e.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/b9/89/44/b98944197d877a376033131f3d0ef33e.jpg"]
            }],
            "Events": "",
            "Jobs": []
        }, {
            "Name": "M Tower 1",
            "Cordidinates": [-7.62389, -149.94141],
            "Icon": "Military Tower",
            "Ruler": "",
            "Races": ["Dwarf"],
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": []
        }, {
            "Name": "M Tower 2",
            "Cordidinates": [72.44879, -142.20703],
            "Icon": "Military Tower",
            "Ruler": "",
            "Races": ["Dwarf"],
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": []
        }, {
            "Name": "Talons Canyon Pass Tower",
            "Cordidinates": [-25.00597, -103.00781],
            "Icon": "Military Tower",
            "Ruler": "Commander Lorcas Fonvund",
            "Races": ["Human", "Halfling"],
            "Description": "This tower is bult into the canyon with two towers and a large gate connected between them. This is a very strong chocke point for orcs that attack, which they often do almost as if they are doing so just to test our defences. Should it fall the Orcs will be able to advance into the kingdom of Pruvell and attack the capitol.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/originals/c7/35/50/c735504f63330b9ab4538bf41a33e089.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/originals/c7/35/50/c735504f63330b9ab4538bf41a33e089.jpg", "https://s-media-cache-ak0.pinimg.com/564x/73/55/48/735548003f6ec0a654aa075e72f1a610.jpg"]
            }],
            "Events": "",
            "Jobs": []
        }, {
            "Name": "Black Spire",
            "Cordidinates": [-55.57834, 126.03516],
            "Icon": "Military Tower",
            "Ruler": "Grotner the Defender",
            "Government": "Under the leadership of the black mantel we defend the temple form attack as well as find those that come to the island that may be worthy.",
            "History": "Previously a tower to help defend the old kingdom the assasins have taken this abandoned tower and made it into a safe have as well as a first defence from outsiders that are looking to destroy the temple.",
            "Description": "Though it is the first defence this tower is the primary location where most assasination jobs are posted and requested from the assasins order.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/94/db/4f/94db4f298f756d658f865571b265aefc.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/94/db/4f/94db4f298f756d658f865571b265aefc.jpg"]
            }],
            "Events": "",
            "Jobs": ["If you need someone killed speak to Grotner."],
            "Ammenaties": ["Food", "Lodging", "Drinks", "Mercenary"]
        }],
        "Orc Capitol": [{
            "Name": "Druzdrug",
            "Cordidinates": [-55.9738, -163.82813],
            "Icon": "Orc Citadel",
            "Ruler": "Eri Daughter of Kallel",
            "Government": "<q>I am warchief. You follow me or you die!</q>",
            "Races": ["Orcs", "Goblins", "Ogers", "Trolls"],
            "Religion": {
                "special": "",
                "Gods": ['Bargrieke', 'Orcus']
            },
            "History": "The first Orc city that was built when the Orcs invaded this land. It is the largest and strongest stronghold that the orcs have. It is here that the warchief resides commanding Orcish raiding parties.",
            "Images": [{
                "Main Image": "https://static1.squarespace.com/static/53b47904e4b078d8d9d974f6/53b4797ce4b0637b8d44b12a/53c44036e4b097c07c1c2f48/1405370430127/orgrimmar_8_6.jpg?format=1500w"
            }, {
                "Regional Images": ["https://static1.squarespace.com/static/53b47904e4b078d8d9d974f6/53b4797ce4b0637b8d44b12a/53c44036e4b097c07c1c2f48/1405370430127/orgrimmar_8_6.jpg?format=1500w"]
            }]
        }, {
            "Name": "Ghul Koshbikh",
            "Cordidinates": [-8.05923, -169.80469],
            "Icon": "Orc Citadel",
            "Races": ["Orcs", "Goblins", "Trolls", "Ogers"],
            "Description": "This is one of the forward strongholds that the Orcs have had a chance to set up. There is a good chance that there is a large sume of gold and treasure here.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/da/7c/e0/da7ce022ea9c65401a19f754b491e966.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/da/7c/e0/da7ce022ea9c65401a19f754b491e966.jpg"]
            }]
        }],
        "Outpost": [{
            "Name": "Northstorm Fortress",
            "Cordidinates": [68.0733, 96.94336],
            "Icon": "Outpost",
            "Ruler": "General Fire Fang",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "After the dragonkin came out of hidding and started to slowly take over the northern lands this was their first outpost built. It was intended to ensure that the dwarves of the northwest couldn't freely come into the country. Today this outpost is the primary training ground and dispatch for the militarry of Draco Rignum. They dispatch soldiers where they are needed most.",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/9c/f5/25/9cf5252c4d3bb2e624c2e4847e83c14d.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/9c/f5/25/9cf5252c4d3bb2e624c2e4847e83c14d.jpg"]
            }],
            "Events": "Come one come all to the tournament of champions. The winner will recieve fame and fortune as well as the skill an artifact of great power.",
            "Jobs": [],
            "Ammenaties": ["Class School: Beast Rider, Strategist, Wolfs Head Ninja, Sword Saint, Katana Duelist", " Thieves Guild", " Assasins Guild", " Merchant Guild", " Mercenary Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library", "Museum"]
        }, {
            "Name": "Icial Peak Pass Outpost",
            "Cordidinates": [76.20597, -5.18555],
            "Icon": "Outpost",
            "Ruler": "General Hammek Hornback",
            "Races": ["Dwarves", "Elves"],
            "History": "This outpost was built not to long ago by the Dwarves to combat the Dragonkin durring the war. Icial peak Pass is the only non-mountianious area into Dronem and so it creates a great choke point for the Dwarves to defend.",
            "Images": [{
                "Main Image": "https://pre13.deviantart.net/7f65/th/pre/i/2016/062/6/e/battle_axe__iron_fortress_by_willobrien-d8a47ej.jpg"
            }, {
                "Regional Images": ["https://pre13.deviantart.net/7f65/th/pre/i/2016/062/6/e/battle_axe__iron_fortress_by_willobrien-d8a47ej.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Class School: Beast Rider, Strategist, Wolfs Head Ninja, Sword Saint, Katana Duelist", " Thieves Guild", " Assasins Guild", " Merchant Guild", " Mercenary Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library", "Museum"]
        }, {
            "Name": "Eagles Talon Outpost",
            "Cordidinates": [-16.97274, -105.82031],
            "Icon": "Outpost",
            "Ruler": "Grand Magis Sodum",
            "Races": [],
            "History": "After the Orcs invaded this was one of the earliest outpost built. This fortress was designed to the last defence for the kingdom thus it's location just at the edge of the mountains pass.",
            "Description": "Built at the base of the mountain they can deploy troops fast to combat the threat of the Orcs. From here Grand Magis Sodum issues order to troops preparing for the next attacks that come their way.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/16/a1/2b/16a12b5ff41e4e36817b52f2f59841d9.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/16/a1/2b/16a12b5ff41e4e36817b52f2f59841d9.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": [""]
        }, {
            "Name": "Dragons Tail Keep",
            "Cordidinates": [9.79568, 106.69922],
            "Icon": "Outpost",
            "Ruler": "General Carrie Crimson",
            "Government": "Though we are not under the command of one country and we are a mixture of races it is our duty to patrol the land as wardens of right and justice and bring those that wish to block out the light to their knees in the depth of prision.",
            "Races": ["All Races"],
            "History": "Justice, Peace, and order. We where created to deal with the threats of this world. Each year every country sends us soldiers from its army to help and protect the dragon circlet. Though we are few we send what we can over to help deal with the orc scourage for the time being.",
            "Description": "Standing over the city are large statues of the founders who set this all in motion. Carved out of the side of a mountain this is now home to hundreds of soldiers from all over the Dragon Circlet. ",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/f1/51/9a/f1519a09b9f03af8be787057907edfc6.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/f1/51/9a/f1519a09b9f03af8be787057907edfc6.jpg"]
            }],
            "Events": "A tournament for the ultimate weapon and armor awaits challengers.",
            "Jobs": ["Capture a dangerous fugative", "Get information from a prisioner", "Help fight in the orc rebelion."],
            "Ammenaties": ["Magic Guild", " Thieves Guild", " Assasins Guild", " Merchant Guild", " Mercenary Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library", "Museum"]
        }],
        "Ruins": [{
            "Name": "Lost city of Dragons Tail Pass",
            "Cordidinates": [31.1282, 128.67188],
            "Icon": "Ruins",
            "History": "This city was said to exist within the tears of the mountain. This ancient city of druids lived peacefully until both time and man cam in and destroyed it.",
            "Description": "This lost city in ruins still holds secrets and lost relics to the world. A city made of waterways for living and travel no marvel of the ancient world was greater.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/d3/aa/52/d3aa52887fc356a1033fdfa383fa7665.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/41/05/8e/41058e58ede43e8fdf03617e82892b16.jpg", "https://s-media-cache-ak0.pinimg.com/564x/38/ff/4e/38ff4ead0c6a09bfabe7fd055d364b7d.jpg"]
            }]
        }, {
            "Name": "Temple of a Forgotten God",
            "Cordidinates": [-67.54217, -108.80859],
            "Icon": "Ruins",
            "History": "This temple was origionally erected to worship and old god of great power and poise long ago. No one know for sure who the god was but most believe that it was a god from a previous people who lived here. The temple was ransacted by the Pruvell kingdom taking their relics and little god that they had.",
            "Description": "Lost to the desert and to time this temple has fallen into ruin and has slowly begun to crumble. However reports of sightings of hooded figures around these parts is call for investigation by someone.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/be/07/49/be0749c635ef1457ab5a852e004b74ba.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/be/07/49/be0749c635ef1457ab5a852e004b74ba.jpg"]
            }]
        }, {
            "Name": "Colousem of Fallen Champions",
            "Cordidinates": [-74.49641, -80.85938],
            "Icon": "Ruins",
            "History": "",
            "Description": "<span title='This giant burried colouseum is filled with great warriors who have been resurrected by a Necromancer who is just looking to add some entertainment to his life. The warriors are from every race and nation in the Dragon Circlet and are forced to fight in an arena for the spirits of the dead.'>A small opening protrueds from the ground. As it turns out this is the entrance to a massive underground colouseum that has been burried beneth the dirt and rubble of the wasteland. Who knows what amazing weapons, armor, or artifacts await here.</span>",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/1d/08/90/1d08900600618642b224912fa872c576.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/1d/08/90/1d08900600618642b224912fa872c576.jpg", "https://cdnb.artstation.com/p/assets/images/images/000/035/521/large/GOWA_MP_Persia_sm.jpg?1400215921"]
            }]
        }, {
            "Name": "Fallen Town of white Axe",
            "Cordidinates": [74.14008, -8.26172],
            "Icon": "Ruins",
            "History": "This city origionaly built to help aid the elves in grasp for power so that they could enjoy the freedoms that the Dwarves have has turned into nothing but rubble hidden beneath the snows. This place is now but a battle ground in a war between the Dwarves and the Dragonkin.",
            "Description": "This city is the for front for the war at this time and though it has been lost and retaken time and time again neither side seems to tire. It is this point that keeps the Dragonkin from pressing further inland. Icial Peaks Pass is the breaking point for the Dwarves and if the Dragonkin can take that then the war may be all but won.",
            "Images": [{
                "Main Image": "https://images4.alphacoders.com/269/thumb-1920-269838.jpg"
            }, {
                "Regional Images": ["https://images4.alphacoders.com/269/thumb-1920-269838.jpg"]
            }]
        }, {
            "Name": "White Willow Cave",
            "Cordidinates": [77.65535, -54.66797],
            "Icon": "Ruins",
            "Description": "Located at the base of a large white willow tree and almost hidden from sight by overgrowth and dim light the enterance to this cave looks untouched. But echoing out from within the belly of this cave growling can be heard. Be this beast of but the wind running through the caves passages none dare to find out.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/90/86/be/9086beff8d3a4e330c478b951a8c97c3.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/90/86/be/9086beff8d3a4e330c478b951a8c97c3.jpg"]
            }]
        }, {
            "Name": "Ruins 3",
            "Cordidinates": [57.51582, -106.875],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/1e/c7/08/1ec708ee670f46387a565ee62b033861.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/1e/c7/08/1ec708ee670f46387a565ee62b033861.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Palace of Thorns",
            "Cordidinates": [-50.79205, 177.1875],
            "Icon": "Ruins",
            "Ruler": "Demtra the Hag",
            "History": "There was once a woman like any other only she was gifted with magic. She longged to be loved and found that love in a man who ended up breaking her heart. She came to these waters believing that it would mend the shattered pieces and as she surfaced from the depths of the pool she found that her pain and heartache where still there. Angry at all those before her that had recieved the benifits of the healing waters she cursed the land.",
            "Description": "Previously known as the Springs of the Iron Mountains this was once a place of peaceful retreat and tranquility. The forest was dence and lush and the springs hot with the blood of the mountain. You could baith in its waters to heal any wound. But those days are gone.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/cb/18/90/cb1890cd202343727ad22b17774e4c21.jpg"
            }, {
                "Regional Images": ['https://s-media-cache-ak0.pinimg.com/564x/e1/cf/53/e1cf53b0bc69e78cd3ed061e4b0145bf.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/7d/9e/c4/7d9ec42d2eb5da2740d23e9313db0541.jpg', "https://s-media-cache-ak0.pinimg.com/564x/cb/18/90/cb1890cd202343727ad22b17774e4c21.jpg"]
            }]
        }, {
            "Name": "Hob Goblin Hold",
            "Cordidinates": [-68.78414, 109.6875],
            "Icon": "Ruins",
            "History": "An old fort that is now abandoned some years past. It was used to defend any sailing ships that came this far inland as well as be a trading hub for traders.",
            "Description": "<span title='This place is filled with hob goblines waiting to ambush the party'>There may not be much left here but what is left will be some older weapons, gear, and even tomes. Who knows what you might find in this old abandoned outpost.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ae/24/77/ae24772824d4ffc4bc9d45c621332d25.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ae/24/77/ae24772824d4ffc4bc9d45c621332d25.jpg"]
            }]
        }, {
            "Name": "Lost Library of The Guardians",
            "Cordidinates": [3.68886, -34.27734],
            "Icon": "Citadel",
            "History": "These ruins in the desert where once an ancient and grand library. It was here that every document and manuscript existed. This wonderus place was ment to be a place of learning and knowledge for all to use freely. A group of guardians calling them selves The Librarians took a vow to protect this place at any cost. They where highly trained and skilled in both magic and combat and for that most respected the library and what it offered. No enemy was ever able to take the library and live no person that is. You see what is odd is that this land that the grand library was on was once a lush forest that the Librarians and many others used to create parchement for their books. They didn't understand what would happen by harvesting all the trees around them. Soon the forest turned to a desolate wast land and not long after a great and mighty sandstorm swept accross the land swallowing all in its path the grand library included. You can still see some of the library left from the dunes of the desert.",
            "Description": "No one has been to the library for a very long time. No records exist describing this place of legend but most still belive that the library is still there and all the books exist deep within the sands.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/e3/3b/49/e33b49a232e0b16193476c438797bfc0.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/e3/3b/49/e33b49a232e0b16193476c438797bfc0.jpg", "https://s-media-cache-ak0.pinimg.com/564x/1d/08/90/1d08900600618642b224912fa872c576.jpg"]
            }]

        }],
        "Temple": [{
            "Name": "Temple of the Elder Dragons",
            "Cordidinates": [58.99531, 158.90625],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/42/65/f8/4265f89d09d3d48522f1bd00ec7857f6.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/42/65/f8/4265f89d09d3d48522f1bd00ec7857f6.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Temple of the white Necromancers",
            "Cordidinates": [-16.04581, 138.16406],
            "Icon": "Temple",
            "Ruler": "Master Xedulus",
            "Government": "",
            "Religion": {
                "special": "",
                "Gods": ['Pharasma']
            },
            "History": "While many fear death and the after life a few choose to embrace it and its beauty. It is these that come to worship the Goddes Pharasma some traveling to this temple that was erected in her name. It is here that they have learned to become wizards of magic over the dead and have set a goal to quell out any that defile the dead and disturbe their peace.",
            "Description": "The walls and floors of this temple are white with not a speck of dirt to be seen. The care takers here live a life of maticulous dedication to Pharasma and her worship. They welcome all to come and worship their goddess but they only train those they believe have good intentions.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/77/24/38/772438d6a9784ca27410bfa02f07fb15.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/77/24/38/772438d6a9784ca27410bfa02f07fb15.jpg", 'https://staging.rpgsite.net/news/3949-first-screenshots-and-artwork-for-final-fantasy-xiv-heavensward']
            }],
            "Events": "",
            "Jobs": ["The lands to the north east and south east have both darkenss fallen upon them. We want someone to investigate and bring the darkness into the light.", "We know that their is a necromancer that has taken up the old kings castle in the north east but we can not get their alone. If you would be willing to help us kill this necromancer we would be greatful."],
            "Ammenaties": ["Food", "Drink", "Lodging", "Class School: White Necromancer, Spellslinger, Shadowcaster, Primalist, Pact Wizard", "Mercenary"]
        }, {
            "Name": "Temple 2",
            "Cordidinates": [43.58039, -98.4375],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/6b/ea/fe/6beafe20676c4862ec953e665aacd882.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/6b/ea/fe/6beafe20676c4862ec953e665aacd882.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Casa dell'assassino",
            "Cordidinates": [-45.70618, 120.14648],
            "Icon": "Temple",
            "Ruler": "Shadow Lord Kilean",
            "Government": "I am the law and the code, I live and die by the creed that was set before me by our founds. Living by a strick code of laws and with no room for error there is no room for mistakes. A mistake means death in the real world and the duty of the Shadow Lord is to be the enforcer and guiding light to all under his mantel. ",
            "Religion": {
                "special": "",
                "Gods": ["Norgorber"]
            },
            "History": "It was on this mountain so many centuries ago that two men met. One was but a begger and the other a nobel from a far away land. The nobel being a brilliant man offered riches beyond the beggers wildest dreams if he was but to kill his older brother so that he may take his thrown. The poor ingnorant beggar agreed and spent the next three years working his way up in the castel so that he could be close enough to strike him down. He learned in this time how to become the living embodyment of darkness and embrase it, how to be silent, how to be unseen, and how to fight. After three long years he had his chance and he took it killing the king. Waiting for his promised reward he was instead met with guards to kill him. Using all that he had learned in the last few years he vanished into darkness never to be seen again. The beggar returned back to the mountain and built a temple there to train assasins, make a name for himself, and hide from the old king. Regardless of reason or intent any that can find their way to Casa Dell'assassino are welcome and invited to train for the are the ones that have the strength to do so. However failure is not an option. ",
            "Description": "Hidden high in the mountains where a secret enterance hides the way is the temple of assasins. Its ruthless Leader Kilean trains only those that can find their temple.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/cd/3f/ef/cd3fef0a0ecb17e808d1390d5a486e05.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/cd/3f/ef/cd3fef0a0ecb17e808d1390d5a486e05.jpg", 'https://s-media-cache-ak0.pinimg.com/564x/f9/49/63/f94963c1e95254788cbbb937da924e92.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/17/4a/17/174a17e44bfec9c11f6c9bf40cbf4ca5.jpg']
            }],
            "Events": "I Shadow Lord Kilean am willing to fight anyone that can find my temple to a duel. Should you succeed you will take the mantle of Shadow Lord and I will bestow upon you a legendary weapon forged of dragon bone, steel, and imbued with a dragons magic.",
            "Jobs": ["Kill: Grand Mage Xarath in Shroudcrest", "Kill: Leader of Druzdrug", "<span title='His daught wants him dead because Dwennon killed her mother'>Kill: Dwennon</span>", "Kill: Throruck Hammerhand and bring the war to an end", "Kill: The mayor of Dogwich"],
            "Ammenaties": ["Class School: -Prestige: Assasin, Formless Ninja, Advanced Rouge"]
        }, {
            "Name": "Temple 3",
            "Cordidinates": [2.46018, -77.34375],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/fc/ed/76/fced7604b945495b18a5b0410437c327.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/fc/ed/76/fced7604b945495b18a5b0410437c327.jpg", "https://s3.amazonaws.com/cgimg/t/g65/600265/1339055_large.jpg", "https://s-media-cache-ak0.pinimg.com/564x/6f/4d/c8/6f4dc89514842939c89894b414cc3d94.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Temple of the moon",
            "Cordidinates": [-34.88593, -5.27344],
            "Icon": "Temple",
            "Ruler": "Master Shi Foo",
            "Government": "We live seculuded from the world in our ways and in our beliefs that being strong and centered can help one stand firm against any obstacle.",
            "Races": ['All are welcome to the mountain.'],
            "Religion": {
                "special": "",
                "Gods": ['Irori']
            },
            "History": "This temple was created by the secound student of a traveling monk. Unlike his brother who focused on making his body the ultimate defence he focused on the martial art of healing and using distant strikes to deal with his foes.",
            "Description": "This temple is in the harsh deserts of Elen Veil. Most who try and stay within the country of Elein Veil are forced to leave if they are not of elvish blood but the elves have made an acception do to the helpfulness and good nature of the monks that are here. You can find this templ on a little hill overlooking the desert.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/50/00/1a/50001a40539a3bee86e8ab888f3c2d19.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/50/00/1a/50001a40539a3bee86e8ab888f3c2d19.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Lodging", "Blacksmith", "Class School: Monk of the Healing Hand, Monk of the Seven Winds, Far Strike Monk"]
        }, {
            "Name": "Temple of the Iron Mountains",
            "Cordidinates": [-78.33165, 130.95703],
            "Icon": "Temple",
            "Ruler": "Master Mali fight",
            "Government": "We live seculuded from the world in our ways and in our beliefs that being strong and centered can help one stand firm against any obstacle.",
            "Races": ["All are welcome to the mountain."],
            "Religion": {
                "special": "",
                "Gods": ['Irori']
            },
            "History": "This temple was created by the first student of a traveling monk. The student learned how to make his body as hard as Iron and other technique's from his master to create a ultimate defence. ",
            "Description": "Deep in the Iron Mountains getting to the temple itself is a test of will and dedication to living the way of the monks in this remote mountain range. ",
            "Images": [{
                "Main Image": "https://68.media.tumblr.com/363edcfd8c066de90013f8ae4486a97b/tumblr_n9lhwccEiS1qhttpto1_1280.jpg"
            }, {
                "Regional Images": ["https://orig15.deviantart.net/6510/f/2013/181/6/6/high_temple_by_bogdan_mrk-d6bbqdo.jpg", "https://68.media.tumblr.com/363edcfd8c066de90013f8ae4486a97b/tumblr_n9lhwccEiS1qhttpto1_1280.jpg", 'https://68.media.tumblr.com/ddbadf4597a93c9c1022b5ba2c8de3e2/tumblr_oaxlm6e2XE1u8mui0o1_1280.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/db/a9/16/dba9165eeebb9b8b4a2388ed3ce61273.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/a9/c8/7d/a9c87d7f7272d487210a0ea3bc9343a6.jpg']
            }],
            "Events": "",
            "Jobs": ["A former deciple has stolen an old manuscript with a forbidden technique on it.You must get it back and stop him from hurting any others. Technic: Hungry Ghost style"],
            "Ammenaties": ["Lodging", "Class School: Terra-Cotta Monk, Monk of the Iron Mountain, Iron scale Monk, Student of the Stone", "Blacksmith"]
        }, {
            "Name": "Temple of Alseta",
            "Cordidinates": [48.74895, 16.52344],
            "Icon": "Temple",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/e2/c7/0f/e2c70fa37e1dc9da19a8672adc2eed1b.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/e2/c7/0f/e2c70fa37e1dc9da19a8672adc2eed1b.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }],
        "Town": [{
            "Name": "Closteles",
            "Cordidinates": [67.27204, 139.39453],
            "Icon": "Town",
            "Ruler": "",
            "Government": "The town is directed by a priest who represents the will of both the bishop an the council of elder dragons.",
            "Races": ["DragonKin", "Kobold", " PolarKin", "Half-Wolf", " Half-Owl", "Half-Stag(Deer like human)", "Dwarf"],
            "Religion": {
                "special": "",
                "Gods": ["Draco alba", "Nigrum Draco"]
            },
            "History": "A town that was once bustling and busy this was one of the few ports in all of the Dragon Circlet that was a have for trade goods and imports before the Dragon Circlet was cut off from the rest of the world. This city of trade is still running imports from other regions such as the dwarves and the elves or at least those that are not wanting to kill them.",
            "Description": "This town is a small port town not to much is unique here but you can still find some great items and crafts made from the scales and bones of dragons and at a decent price.",
            "Images": [{
                "Main Image": "https://corwyn.wdfiles.com/local--files/trevalia/Village-10.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/736x/a7/a3/93/a7a393e6c7552b8c496d290569e33efd.jpg", 'https://corwyn.wdfiles.com/local--files/trevalia/Village-10.jpg']
            }],
            "Events": "",
            "Jobs": ["<strong>Iron Claw:</strong> Loud roaring can be heard at night coming from the east. I want you to investigate it. I believe that it is coming from the forgotten citadel.", "<span title='The track a very large creature to a small cave where they have to stop it from attacking the caravans from now on.'>Our shipments to Ulaxdale are being attacked by something. We want you to track it down and kill it!</span>"],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Donbadihr",
            "Cordidinates": [76.63923, -98.78906],
            "Icon": "Town",
            "Ruler": "Weralgamri Orcfoot",
            "Races": ["Dwarves"],
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://pre12.deviantart.net/6119/th/pre/f/2014/267/a/a/viking_harbor_by_alexson1-d80cjdh.jpg"
            }, {
                "Regional Images": ["https://pre12.deviantart.net/6119/th/pre/f/2014/267/a/a/viking_harbor_by_alexson1-d80cjdh.jpg"]
            }],
            "Events": "",
            "Jobs": [""],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Evermere",
            "Cordidinates": [-67.3737, 80.15625],
            "Icon": "Town",
            "Ruler": "The city is run by the people.",
            "Government": "Every person in town has the privlage and right to meet at weekly political meetings and put in their words on an issue. The issues are then voted. If attendence is less then a tenth of the town then issues can not be voted upon until the end of the month where the town has a large council about the big issues.",
            "Races": ["Human", " Catfolk", " Ratfolk", "Grippli", "Gillman", " Halfling", " Half elf", " Half Orc", " Gnome", " Gnoll", "DragonKin", "Kobold", "Lizardfolk", " Dhampire"],
            "Religion": {
                "special": "",
                "Gods": ['Abadar', 'Cayden Cailean', 'Desna', 'Erastil', 'Torag', 'Shelyn', 'Sarenrae', 'Pharasma']
            },
            "History": "Never before has a town grown so fast as that of Evermere. The town used to be called Ravens Peek as it sits on a cliff just overlooking a small canyon. The town was nothing much at all in fact most people didn't even know that it was there, or so it seemed. It wasn't until on day when a feline of a man by the name of Ruccoun Evermere and some of his friends left the town. It wasn't long before we figured they where dead but around a year later they returned but they returned in a flying ship. Him and his small crew as well as some craftsmen around town deconstructed it from top to bottom analyzing every inch of the vessel until they understood how more of it could be made. That was the day that this town turned around.",
            "Description": "Ahh Evermere the town of cogs. This small town is well on its way to becoming a vast city. With the creation of flying ships large trade routes where created with Shroudcrest a city ahead of its time in both magic and technology.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/06/68/0c/06680c77f07dee1510406b6c02f2d141.jpg"
            }, {
                "Regional Images": ['https://s-media-cache-ak0.pinimg.com/564x/06/68/0c/06680c77f07dee1510406b6c02f2d141.jpg', "https://s-media-cache-ak0.pinimg.com/564x/5d/cf/9b/5dcf9b9f6bb559518fc9fac379336023.jpg", 'https://s-media-cache-ak0.pinimg.com/564x/ee/ad/58/eead58420e50d5c07db17f513bd920d5.jpg', 'https://www.pinterest.com/pin/262968065714489208/']
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Vehl Harbor",
            "Cordidinates": [20, -73],
            "Icon": "Town",
            "Ruler": "Lord Bastion Tah'kul",
            "Government": "Lord Bastion sees himself in high esteem and so he keeps the town under strict rules. Though he has guards a plenty watching the streets for criminals crime still happens beneath the city streets.",
            "Races": [""],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "This town was erected to be a town for travelers. Most of the east cost of Purvell is cliff making this town the best way for travelers to come in and out of the kingdom. Origionally this town was inhabited by people traveling from country to country and by merchants, and traders. It has since evolved into a wellspring of trade and commers inviting all to the Pruvell kingdom.",
            "Description": "This is a small harbor town built for both customs to that regulate who and what comes into the country as well as a town where travelers of the seas can take a break. You can find all manner of things here from crafting, supplies, and so much more.",
            "Images": [{
                "Main Image": "https://orig15.deviantart.net/43a5/f/2014/013/0/a/on_the_rise_by_targete-d724s1j.jpg"
            }, {
                "Regional Images": ["https://orig15.deviantart.net/43a5/f/2014/013/0/a/on_the_rise_by_targete-d724s1j.jpg"]
            }],
            "Events": "",
            "Jobs": []
        }, {
            "Name": "Shroudcrest",
            "Cordidinates": [-75.32003, -10.63477],
            "Icon": "City",
            "Ruler": "Grand Mage Xarath",
            "Government": "The city is led by a grand mage who makes all decisions for its people and what is best for them. Though he is the only leader Xarath is a kind and just man with the interest of his people and their safety above all else.",
            "Races": ["Human", " Catfolk", " Ratfolk", "Grippli", "Gillman", " Halfling", " Half elf", " Half Orc", " Gnome", " Gnoll", "DragonKin", "Kobold", "Lizardfolk", " Dhampire"],
            "Religion": {
                "special": "",
                "Gods": ['Abadar', 'Cayden Cailean', 'Desna', 'Erastil', 'Torag', 'Shelyn', 'Sarenrae', 'Pharasma']
            },
            "History": "Shroudcrest adopted the use of magic from the Kingdom of Pruvell while also expanding into technical engineering. This city is the first of its kind to fly in the sky. After the orcs landed Grand Mage Xerath joined the fight on the battle field with the king doing all that he could to hold the orcs back but it wasn't enough. Once the orcs pushed the Pruvell army back to the mountain pass he knew that he and his home would both be in great danger. It was with great effort that Xarath and his scientists where able to create a large magical device that raised the city from the earth and into the sky where they could be safe.",
            "Description": "A city ahead of its time in both magic and technology on a collosal piece of earth floating in the sky. Above the city floats a large magical device that amplifies the grand mages powers allowing him to use little magic to make the impossible possible. The people in shroudcrest are a mixture of mages and engineres, scientists and scholars alike. With the large city in the center and small floating houses, shops, and other amusments scattered around all connecting to the main land by chains and bridges. This city of fantasy lives its days knowing that peace will be everlasting while grand master Xarath is in charge.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/27/c9/6f/27c96f3a53fec3784def129a77fa0402.jpg"
            }, {
                "Regional Images": ['https://s-media-cache-ak0.pinimg.com/564x/27/c9/6f/27c96f3a53fec3784def129a77fa0402.jpg', "https://s-media-cache-ak0.pinimg.com/564x/37/30/9b/37309be88707b23d0c5cc57e6bfaf415.jpg", 'https://s-media-cache-ak0.pinimg.com/564x/0c/32/f6/0c32f681286d81eaa41e847f39dbffc6.jpg']
            }],
            "Events": "<span title='Xarath has had an attempt made on his life. '>A reward will be paid to any that can find the person or people responsible for this attempt on his life.</span>",
            "Jobs": ["<span title='Though Xarath has saved the city it has come at a great cost. The lives essence of children who have gone missing are being sapped in order to power the device that keeps the city safe. Will they choose to destroy this device and let the hords of Orcs flood the cit or leave knowning that this will continue to happen.'>Xarath: Someone is trying to get into the citadel archive located below the city. I need you to go down there and find them and stop them.</span>", "<span title='My mother was taken by the city guards. I followed them and saw what they where doing to people. I saw them killing them. I found an assasin who would be willing to help save my mother and to kill Xarath.'>Young Boy: People in the city keep going missing and no one has seen them turn back up."],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Dogwich",
            "Cordidinates": [-76.4346, 150.29297],
            "Icon": "Town",
            "Ruler": "Mayor Brundwich",
            "Government": "The leader of this small town who is quite wealthy.",
            "Races": ["Human", " Catfolk", " Ratfolk", "Grippli", "Gillman", " Halfling", " Half elf", " Half Orc", " Gnome", " Gnoll", "DragonKin", "Kobold", "Lizardfolk", " Dhampire"],
            "Religion": {
                "special": "",
                "Gods": ['Abadar', 'Cayden Cailean', 'Desna', 'Erastil', 'Torag', 'Shelyn', 'Sarenrae', 'Pharasma']
            },
            "History": "The city has always been like this. Leader after leader down the blood line of the mayor the city of Dogwich has suffered. Most have lost hope that one day someone would come along and make their town great like many of the other cities in Free Haven.",
            "Description": "The mayor of this town is as greedy and as vile as they come. The only way he will do anything to help the starving people of this city is if it affects him or they start making a big enough fuss over the issue.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/61/c9/6c/61c96ca4dc9ffa9464ff024c6b265b36.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/61/c9/6c/61c96ca4dc9ffa9464ff024c6b265b36.jpg"]
            }],
            "Events": "Rat Catchers needed.",
            "Jobs": ["<span title='The mayor is trying to deal with the overwhelming rat problem by sending rat catchers to the sewers but they are not returning. As they venture below the city streets they find that the eaten bodies of the rat catchers and that the source of the rat population growing so quickly is related to disgaurded magical mushrooms that have spawned fungi everywhere. The only way to solve the issue is for them to destroy the fugi with fire.'> The city is being over run by a plague of rats getting into everything. We have sent rat catchers to the sewers to deal with the issue but they have not returned. We want you to investigate</span>", "Someone please do something about the leadership that this town has to endure."],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Town 3",
            "Cordidinates": [21.04349, -129.81445],
            "Icon": "Town",
            "Ruler": "Mayor Brundwich",
            "Government": "The leader of this small town who is quite wealthy.",
            "Races": ["Human", " Catfolk", " Ratfolk", "Grippli", "Gillman", " Halfling", " Half elf", " Half Orc", " Gnome", " Gnoll", "DragonKin", "Kobold", "Lizardfolk", " Dhampire"],
            "Religion": {
                "special": "",
                "Gods": ['Abadar', 'Cayden Cailean', 'Desna', 'Erastil', 'Torag', 'Shelyn', 'Sarenrae', 'Pharasma']
            },
            "History": "The city has always been like this. Leader after leader down the blood line of the mayor the city of Dogwich has suffered. Most have lost hope that one day someone would come along and make their town great like many of the other cities in Free Haven.",
            "Description": "The mayor of this town is as greedy and as vile as they come. The only way he will do anything to help the starving people of this city is if it affects him or they start making a big enough fuss over the issue.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/61/c9/6c/61c96ca4dc9ffa9464ff024c6b265b36.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/61/c9/6c/61c96ca4dc9ffa9464ff024c6b265b36.jpg"]
            }],
            "Events": "Rat Catchers needed.",
            "Jobs": ["<span title='The mayor is trying to deal with the overwhelming rat problem by sending rat catchers to the sewers but they are not returning. As they venture below the city streets they find that the eaten bodies of the rat catchers and that the source of the rat population growing so quickly is related to disgaurded magical mushrooms that have spawned fungi everywhere. The only way to solve the issue is for them to destroy the fugi with fire.'> The city is being over run by a plague of rats getting into everything. We have sent rat catchers to the sewers to deal with the issue but they have not returned. We want you to investigate</span>", "Someone please do something about the leadership that this town has to endure."],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Neaenalond",
            "Cordidinates": [-3.68886, -11.07422],
            "Icon": "Village",
            "Ruler": "Lord Ebon Heart",
            "Government": "One ruler over the city makes all the decisions",
            "Races": ["Elves", " Half Elves", " Drow", " Kobold", "Lizardfolk"],
            "Religion": {
                "special": "Elven Gods and egyptian gods",
                "Gods": []
            },
            "History": "The city of sand and gods. The lizardfolk, kobold, and other desert races believe that this is holy ground. Unlink many of the old races of the past these races where allowed to stay within Elen Veil unlike so many other. This city has always belonged to these desert races and it was they who welcomed the elves to the country when they first started leaving the main lands.",
            "Description": "There is not a holy temple in the city for worship because the entire city is a temple of worshipers living together under their gods. All people are equal here and treated so. Everyone is nice to each other some would belive that they are to nice and that they are hiding something. Though these people seem peaceful and kind when it comes to the defence of their city countles enemies have fallen and wasted away in the sands of the desert.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/f7/83/62/f7836290e918880663e7d2ab45325afa.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/f7/83/62/f7836290e918880663e7d2ab45325afa.jpg"]
            }],
            "Events": "Come and join in on our festival of the gods. Enter trounaments, find the finest wares and oddaties, make some extra cash on the side. What ever it is the festival of gods has it here! ",
            "Jobs": [],
            "Ammenaties": ["Magic Guild", " Thieves Guild", " Adventurers Guilds", "Food", " Drink", " Lodging", " Medicin", " Magic Shop", " Oddity Shop", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }],
        "Village": [{
            "Name": "Norwich",
            "Cordidinates": [38.89103, 94.48242],
            "Icon": "Village",
            "Ruler": "Priest Greyhelm",
            "Government": "The town is directed by a priest who represents the will of both the bishop an the council of elder dragons.",
            "Races": ['DragonKin', 'Kobold', 'PolarKin', 'Half-Wolf', 'Half-Owl', 'Half-Stag(Deer like human)', 'Human', 'Halfling', 'Dwarf'],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "The smallest and farthest town to the south Norwich was founded on a hill side next to the sea to be a trading village and a place to stay the night. Being that it is the closest village after the days journey through the mountains almost all travelers pass through here. Because of its location next to the sea it is also a prime sea trade route as well.",
            "Description": "A small village on the eadge of the ocean and the mountains. It is primarly just to  be a resting point for travelers as well as a merchant town that has trade routes to Elen Veil. While the city is small the culture has become a lot more mixed with southern cultures since it is so much farther south and many of the people that pass by either end up staying for longer periods of time or come back often.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/7b/f9/98/7bf99864224eb7addf41443e17fb2015.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/7b/f9/98/7bf99864224eb7addf41443e17fb2015.jpg"]
            }],
            "Events": "",
            "Jobs": ["The town is abuzz with about how a man in town bought a map from a traveler that shows the location of an ancient artifact. This man wants someone to escort him to the location of the artifact and then bring him home safely.</span>"],
            "Ammenaties": ["Food", " Drink", " Lodging", " Gear", "Blacksmith", " Bowmen", "Ferrymen", "Merchant Guild"]
        }, {
            "Name": "Brighten Hill",
            "Cordidinates": [-77.01969, 71.89453],
            "Icon": "Village",
            "Races": ["Gnomes", "Halflings"],
            "Religion": {
                "special": "",
                "Gods": ["Shelyn", "Cayden Cailean"]
            },
            "History": "Not but a quite and quaint little town and it has always been that way. Those that chose to live here did so because of its seperation from the worlds issues. Every now and again someone will pass through or travel through the mountains and we hold a celebration in their honor but other than that we are just well we are just being.",
            "Description": "Brighten Hill is but a small village of Gnomes and Halflings. Its quiet and peacful other than the on the holidays and at festivals which are quite frequent I might add. Though we are off the beaten path some still stop by and visit us on their journey through the mountain pass; It gives them a chance to rest I suppose. ",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/38/a2/1e/38a21e4024127e4b128734e5093b5412.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/38/a2/1e/38a21e4024127e4b128734e5093b5412.jpg"]
            }],
            "Events": "",
            "Jobs": ["You could help us throw a grand festival in the name of the gods, and a good time."],
            "Ammenaties": ["Food", " Drink", " Lodging", " Gear", "Blacksmith", " Bowmen", "Ferrymen"]
        }, {
            "Name": "Crohunn Tahu",
            "Cordidinates": [72.84202, 155.21484],
            "Icon": "Village",
            "Ruler": "Captain Iron Claw",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "This village was created as a place for the soldiers who are serving to defened the bay against attacks from the north. Every few months a handfull of soldiers are sent out there to releive some of the active duty soldiers.",
            "Description": "Though it is a small village it has most of the basic things that are needed to live. Most soldiers would much rather be living in a village then in a camp. Though the buildings are all made of wood it keeps them warm and allows them a place to retire. For those who are looking for something to do durring their hours off most spend their time at the tavern drinking, gambeling, and having a merry time.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/fb/11/d1/fb11d1533d18f693702cc3df7d9318e3.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/fb/11/d1/fb11d1533d18f693702cc3df7d9318e3.jpg"]
            }],
            "Events": "",
            "Jobs": ["<strong>Iron Claw:</strong> Some of my men have deserted and I need you to retrieve them for me. Most likely they have gone to Closteles.", "<strong>Leutinet:</strong> Will you take a shift for me and some of my men and make sure that nothing happens? "],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Crohunn Tahh",
            "Cordidinates": [73.30262, 114.3457],
            "Icon": "Village",
            "Ruler": "Captain Iron scale",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "This village was created as a place for the soldiers who are serving to defened the bay against attacks from the north. Every few months a handfull of soldiers are sent out there to releive some of the active duty soldiers.",
            "Description": "Under the rule of Captain Iron Scale this village is as tough as they come. Though the soldiers are overworked and drilled daily they also have some of the best weapons, armor, and gear. The Captain takes his job very seriously and so he sends a group of soldiers to Closteles monthly to take a break and gather the requested supplies.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/d1/63/37/d16337cadbfb8053db3d9d5e94d54c84.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/d1/63/37/d16337cadbfb8053db3d9d5e94d54c84.jpg"]
            }],
            "Events": "",
            "Jobs": ["<span title='The PCs are sent to a battlefield to retrieve a family heirloom from a missing soldier where a necromancer and his corpse collector golem are raising the fallen as undead'>I had a brother who went north the Dronem to fight in the battle at Silver Mountain Pass. He has not returned and is most likely dead. I am hoping that you would be so kind to go and retrieve his sword it belonged to out father and he passed it down to us.</span>", "<span title='The pc's find out a soldier intercepted the merchant and killed him and stole the of food and boozs.'>A shipment of food, weapons, and booz has not arrived yet. I want you to head toward Closteles and see if you can figure out why it has not arrived yet."],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Black Tree",
            "Cordidinates": [10.14193, -45.70313],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": ""
            }, {
                "Regional Images": [""]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Mytlenoris Village",
            "Cordidinates": [-29.84064, -28.91602],
            "Icon": "Village",
            "Ruler": "Galan Aexidor",
            "Government": "Ruled by Galan Aexidor who controls the water at the oasis. By controling the water he controls the town.",
            "Races": ["Elves", " Half Elves", " Drow", " Kobold", "Lizardfolk"],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "This small town in the middle of no where was built on an oasis so that travelers coming from the north would have somewhere to rest as they headed to the moon light city to travel to the west.",
            "Description": "Due to the fall of the moon light city when the elves took the country not many travelers head this way anymore. Some still do for business purposes and of course we have merchants that visit our town as well but it is slowly dieing.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/12/24/97/12249738a480cde2b10d36c3c201c79f.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/12/24/97/12249738a480cde2b10d36c3c201c79f.jpg"]
            }],
            "Events": "",
            "Jobs": ["<span title='A temple has hired a large number of bards for a festival where music is to be played from sun up until sundown, the only problem is that no one recalls the obscure holiday because it is a ruse to mask the sound of tomb robbers breaking into sealed vaults below the monistary'>A local monk: We are looking for musicians and performers to come to The Temple of the Moon for our Grand Festival in remeberance of the wandering monk Tiezen. </span>", "Galan is charging everyone for water and it is running the town into the ground. Please help.", "<span title='A bandit base full of hundreds of bandits and other creatures that they have captured.'>Deal with the bandits that live in the Moon Light Citadel</span>"],
            "Ammenaties": ["Food", " Drink", " Lodging", " Gear", "Blacksmith", " Bowmen"]
        }, {
            "Name": "Yean Alora",
            "Cordidinates": [10.14193, -45.70313],
            "Icon": "Village",
            "Ruler": "Chief Smooth Scales",
            "Government": "The village is governed by a single man but he hears all people and take their advice into consideration.",
            "Races": ["Dhampire", "Lizardfolk", "Human", "Half Elf", "Half Orc"],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "The village of Yean Alora is very new. It has only been a few years now since it was settled. The people of the surrounding cities and desert saw a need for a port town to the east of Elen Veil for merchants and for travelers. They saw a profit in it and took it.",
            "Description": "An odd village where most are not elves. The elves of Elin Veil are not happy that they settled here but they put up with it because the need for this town is logical. They are not fond of having other races other than elves living there though. This city has even attracted dhampires who have made it their home between traveling from place to place.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ed/f9/83/edf983d5ba7f7d7dc7da25c1d75a477a.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ed/f9/83/edf983d5ba7f7d7dc7da25c1d75a477a.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Food", " Drink", " Lodging", " Gear", "Blacksmith", " Bowmen"]
        }, {
            "Name": "Dumwihr",
            "Cordidinates": [74.82193, -74.88281],
            "Icon": "Village",
            "Ruler": "Sargut Amberfury",
            "Government": "Sargut is known as the Iron Master. Proud owner of one of the two largest black smithys in this town he rules the town with his influence. He can be a little hot headed sometimes but not without good reason. He is quite prideful of his position and love that everyone in the town looks up to him, other than his brother that is. ",
            "Races": ["Dwarves"],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "Both Sargut and his brother Hadrar live in this town which makes things very interesting. Both brothers own their own black smithy company and in most cases are in compatition with each other. Although they are both ruthless business men they are very close and end each day drinking at the local bar in town. This village is full of inventors and crafters specializing in both odd crafts as well as the more commonly practiced. If you are looking for good steal or just want to test your skills as a black smith this town will give you a challenge.",
            "Images": [{
                "Main Image": "https://cdnb.artstation.com/p/assets/images/images/003/728/007/large/sergey-vasnev-tundrus-final-arts.jpg?1476872943"
            }, {
                "Regional Images": ["https://cdnb.artstation.com/p/assets/images/images/003/728/007/large/sergey-vasnev-tundrus-final-arts.jpg?1476872943"]
            }],
            "Events": "Come one come all to the black smithing tournament. Care to test your metal against the best black smiths in all of the Dragon Circlet well look no further. You are all invited to participate in this tournament.",
            "Jobs": [],
            "Ammenaties": ["Food", " Drink", " Lodging", " Gear", "Blacksmith", " Bowmen"]
        }, {
            "Name": "Village 3",
            "Cordidinates": [53.64464, -140.88867],
            "Icon": "Village",
            "Ruler": "Chief Smooth Scales",
            "Government": "The village is governed by a single man but he hears all people and take their advice into consideration.",
            "Races": ["Dhampire", "Lizardfolk", "Human", "Half Elf", "Half Orc"],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "The village of Yean Alora is very new. It has only been a few years now since it was settled. The people of the surrounding cities and desert saw a need for a port town to the east of Elen Veil for merchants and for travelers. They saw a profit in it and took it.",
            "Description": "An odd village where most are not elves. The elves of Elin Veil are not happy that they settled here but they put up with it because the need for this town is logical. They are not fond of having other races other than elves living there though. This city has even attracted dhampires who have made it their home between traveling from place to place.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ed/f9/83/edf983d5ba7f7d7dc7da25c1d75a477a.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ed/f9/83/edf983d5ba7f7d7dc7da25c1d75a477a.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Food", " Drink", " Lodging", " Gear", "Blacksmith", " Bowmen"]
        }, {
            "Name": "Dunnin Bark",
            "Cordidinates": [29.76438, -122.95898],
            "Icon": "Village",
            "Ruler": "Bailen Christian",
            "Government": "",
            "Races": [""],
            "Religion": {
                "special": "",
                "Gods": [""]
            },
            "History": "A farmer origionaly owned this land it it was here that he lived. Being that there was no where for travelers to stop and rest or get food on the road for many days many of them found themselves at his front door and him giving them food. Soon the king was approched asking him to help fund a settlement on the route north as it would allow traders and travelers a place to stay. The king agreed to this and help fund a settlement to be built right on the farmers land. This village has grown is a great stopping place for those wearie of their travels and in need of a break. The farmer needless to say has since moved his farm further north east.",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/68/1e/53/681e5336889b0e010fc404e235354fd0.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/68/1e/53/681e5336889b0e010fc404e235354fd0.jpg"]
            }],
            "Events": "",
            "Jobs": [""],
            "Ammenaties": ["Mercenary Guild", " Adventurers Guilds", " Food", " Drink", " Lodging", " Medicin", " Gear", " Crafting Shop", "Blacksmith", " Bowmen", "Alchemy", "Enchanters", "Library"]
        }, {
            "Name": "Village 1",
            "Cordidinates": [11.43696, -106.25977],
            "Icon": "Village",
            "Ruler": "Chief Smooth Scales",
            "Government": "The village is governed by a single man but he hears all people and take their advice into consideration.",
            "Races": ["Dhampire", "Lizardfolk", "Human", "Half Elf", "Half Orc"],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "The village of Yean Alora is very new. It has only been a few years now since it was settled. The people of the surrounding cities and desert saw a need for a port town to the east of Elen Veil for merchants and for travelers. They saw a profit in it and took it.",
            "Description": "An odd village where most are not elves. The elves of Elin Veil are not happy that they settled here but they put up with it because the need for this town is logical. They are not fond of having other races other than elves living there though. This city has even attracted dhampires who have made it their home between traveling from place to place.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ed/f9/83/edf983d5ba7f7d7dc7da25c1d75a477a.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ed/f9/83/edf983d5ba7f7d7dc7da25c1d75a477a.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Food", " Drink", " Lodging", " Gear", "Blacksmith", " Bowmen"]
        }, {
            "Name": "Doonatel",
            "Cordidinates": [9.44906, 39.72656],
            "Icon": "",
            "Ruler": "",
            "Government": "",
            "Races": [],
            "Religion": {
                "special": "",
                "Gods": []
            },
            "History": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/a4/82/23/a48223b8900a9bf61a6781c527392609.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/a4/82/23/a48223b8900a9bf61a6781c527392609.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }],
        "Windmill": [{
            "Name": "Frost wood Farm",
            "Cordidinates": [54.47004, 132.1875],
            "Icon": "Windmill",
            "Description": "A small wood working farm just to the north west of Ulaxdale. This farm is responsible for gathering lumber for the country and selling it to merchants and crafters.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/b5/f8/ed/b5f8edd00708572b8a18821ff1afe5cd.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/b5/f8/ed/b5f8edd00708572b8a18821ff1afe5cd.jpg"]
            }],
            "Events": "",
            "Jobs": ["<span title = ' A Lodging camped is being haunted by the ghost of a treant/forest haunt and his dryad followers'>My mean in the forest are saying that they will no longer work there anymore. They think that it is haunted by the spirit of the forest and it is trying to kill them. We have had a lot of accidents lately. Can you investigate for me.</span>"],
            "Ammenaties": ["Food", " Drink", " Lodging", "Crafting Materials", "Class school: Nitojutsu Sensei"]
        }, {
            "Name": "Farm 2",
            "Cordidinates": [-55.57834, 39.375],
            "Icon": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/34/c3/1d/34c31d0cb10ec32a0eb16f38581e92ea.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/34/c3/1d/34c31d0cb10ec32a0eb16f38581e92ea.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Farm 7",
            "Cordidinates": [45.64477, -148.35938],
            "Icon": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ba/fb/c9/bafbc9069f5cc2d97f69bd5503989ecc.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ba/fb/c9/bafbc9069f5cc2d97f69bd5503989ecc.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": []
        }, {
            "Name": "Evermere shipwrights",
            "Cordidinates": [-69.50377, 65.56641],
            "Icon": "Windmill",
            "Description": "A large business just to the south west of Evermere. They gather wood from the foret and use the wood to build wonerus flying ships.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/ea/9f/2e/ea9f2e46fcccacf3677cff162ca0eb92.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/ea/9f/2e/ea9f2e46fcccacf3677cff162ca0eb92.jpg"]
            }],
            "Events": "",
            "Jobs": ["<span title='Wives of the loggers: Dryads have taken loggers hostage and are held up in the forest.'>Please you must help us. Dryads have taken our husbands captive you must save them!</span>"],
            "Ammenaties": ["Food", " Drink", " Lodging"]
        }, {
            "Name": "Farm 4",
            "Cordidinates": [-66.51326, 36.82617],
            "Icon": "",
            "Description": "",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/7e/3d/3d/7e3d3d0e55cbf43902d50b758dda5509.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/7e/3d/3d/7e3d3d0e55cbf43902d50b758dda5509.jpg"]
            }],
            "Events": "",
            "Jobs": [""],
            "Ammenaties": ["Food", " Drink", " Lodging"]
        }, {
            "Name": "Black Brier Farm",
            "Cordidinates": [-38.82259, 152.49023],
            "Icon": "Windmill",
            "Description": "Located in a dence over grown forest of thorns and dead trees this place was once beautiful and bountiful until an evil woman bestowed a curse upon the land. This curse has kept anything from growing here and most have abandoned the area entirely.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/16/8b/83/168b83c8dd3d641b148c766fe16cde4a.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/16/8b/83/168b83c8dd3d641b148c766fe16cde4a.jpg"]
            }],
            "Events": "",
            "Jobs": ["<span title='While looking through the belongings of the past residents on this farm you find in the library a letter and a map. Go to the west and find the palace of throns where this woman lives and you may be able to lift the curse that is now upon us. Be careful though for none have come back yet.'>Dispel the curse upon this land.</span>"],
            "Ammenaties": ["Lodging", "Library"]
        }, {
            "Name": "Blue Moon Farm",
            "Cordidinates": [-78.13449, 57.04102],
            "Icon": "Windmill",
            "Description": "Just a little ways out of town you can find this small and quaint farm. Though it is not anything special it makes great bounties of food for the local villages around the area. You can find gnomes and halflings working in harmony to cultivate the land.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/b5/f8/ed/b5f8edd00708572b8a18821ff1afe5cd.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/b5/f8/ed/b5f8edd00708572b8a18821ff1afe5cd.jpg"]
            }],
            "Events": "",
            "Jobs": [],
            "Ammenaties": ["Food", "Lodging", "Drinks"]
        }],
        "Portal": [{
            "Name": "Dark Spawn Portal",
            "Cordidinates": [52.16045, 16.52344],
            "Icon": "Portal",
            "Description": "Sealed portal to the abyss. Unsealing the portal releases a demon pitlord from the portal that tries to kill the party instantly. If they dont kill it it slowly reaks havoc on Elen Veil till the whole of the dragon circlet is destroyed.",
            "Images": [{
                "Main Image": "https://s-media-cache-ak0.pinimg.com/564x/13/fb/2b/13fb2b8af38ce40a399bb650b972526d.jpg"
            }, {
                "Regional Images": ["https://s-media-cache-ak0.pinimg.com/564x/13/fb/2b/13fb2b8af38ce40a399bb650b972526d.jpg"]
            }]
        }]
    }],
    "World History": "More than six decades have passed and most have forgotten about the archipelago known as the Dragon Circlet that vanished in the night. All that remains are old antiquities brought back by merchants and their tales of that magical place. Now all dragons posses magic within them innately but they only have so much so when the Dragonkin come of the first transformation in their life they gain this magic and take a vow to not use their magic until they become full fledged dragons.  For those items created from the dragons remains a unique magic is imbued within that item.<br/><br/> Now in the place of where the Dragon Circlet was there is a massive storm for miles and any that have set sail into that storm have not returned. But how has this storm come to be and what has happened to The Dragon Circlet? <br/><br/> Long before The Dragon Circlet went missing; this archipelago was full of wealth and beauty. You see The Dragon Circlet was had a very unique resource because every year hundreds of dragons in Golarion would travel here, back to where they were born, to pass on. The children of the dragons known as the Dragonborn or Dragonkin as it where would honor their ancestors memories would throw a great festival to honor the lives of that their parents had lived. The next few days the Dragonkin would go to the graves and harvest the remains of their elders taking scale, bone, tooth, and claw then using them to create wondrous items and weapons. The Dragonkin would then sell those items to merchants who would take them to the mainland.<br/><br/> It was because of the rarity of these that many of those from the main land coveted these magical items and a large army was created to attack the dragon circlet and kill the dragons be it full fledged dragon or Dragonkin. On the night of the grand festival a small group of soldiers aided by the kingdom of Pruvell snuck into the holy place where the dragons would go to pass on and they slayed all they could. Hacking away what remains that they coveted the most. Those dragons that escaped used all of their magic, at the cost of their lives, to cast all the outsiders out and raise a great storm to protect their children and the Dragon Circlet from any future threats from the outsiders.<br/><br/> Many decades have past and much has happened in the Dragon Circlet that has changed the relations between the kingdoms and the people. The Dragonkin were pushed out of their quaint countryside into hiding by the Pruvell Kingdom and their alliance with the former king of the country now known as Free Haven. This forced the Dragonkin to go into hiding underground. Less than a decade later war broke out across the land in all countries. The Dragonkin emerged from the depths of the ground sweeping across the land like a title wave taking all the lands north of the Dragontail Mountains and establishing a Kingdom of their own. In this chaos the people to the south rebelled overthrowing their king and creating a country of free men and women. Civil war from the Elves and Dwarves against the Prvell kingdom who beheld them as lowly servants and slaves. Now the Elves have swept across the forests to the west of Pruvell creating a country of elves and other outsiders alone. The Dwarves went north to the mountains fighting in harsh conditions and forcing the King of Pruvell to see their strength as warriors and men earning their independence. For a time there was peace across the land. Now within the recent few years orcs from other islands within the Lost Isles have been attacking countries from the west and threatening what remains of the Pruvell Kingdom and the entirety of the Dragon Circlet.",
    "KingdomData": [{
        "Draco Rignum": {
            "Name": "Draco Rignum",
            "Crest": "./Transer_folder/Images/DracoRignum.png",
            "History": "The people that dwell in Draco Rignum have a tale about their creation. Before life began there was Nigrum and Alba. Each believed that they where alone in the void of nothingness. Alba whith her great power created a light that brought warmth to the void. This light created the effect of time passing from day to night and night to day. It was at the edge of this cycle that Alba and Nigrum first saw eachother. For the next centry they talked to each other during these shifts each day until their love for one another became to strong. It was then that they used all of their power to cross between the light and the dark. When they came together their bodies entwined and formed the world and all life that inhabits it. The dragons that inhabit the world are their offspring and they recieved some of their magic.<br/><br/> The children of Nigrum and Album where gifted with long lives in which they would slowly transform over time. In their youth they start out as humanoid walking on two feet until they reach the end of their youth. It is durring the next phase of life that they become a little larger than a horse and they tend to walk on all four feet even though they can still walk upright. In times of war the youth and their parents ride into battle together. After this stage they get older until they have a full set of wings and grow in size to become hulking beasts of the skies.  Most dragons are called DragonKin not recieveing the full title until they become full fledged dragons.<br/><br/> From the time of their youth as they mature the DragonKin have magic within them but they take a vow to not use it until they become full fledged dragons. It is because of this vow that they have been able to live on as a race. Durring times of parel the older dragons would use their magic to help their children. Durring one such instance early on in the creation of the world that many feared the dragonkin and attempted to kill them off. They went into hidding in their holy city of Frozen Port deep underground until it was safe to return to the surface and go back to their lives. The old dragons, knowing that there would always be those that where after the dragonkin, created new races to serve as their protectors and servants until the time when they where not needed any more. Through this bears, owls, and wolves where transformed into intelegent creatures bound by magic to serve and live along side the Dragonkin.</br><br/> As the Dragonkin get older and larger the leave their homes living out the remainder of thier life in the mountains. When they reach the final few years of their life they are granted the title of Elder Dragon and are given a place on the council to help determin the decisions of t",
            "Government": "<strong>The Council of elder Dragons:</strong><br /> They create all the laws of the land and they make all the decisions for the people of the kingdom. Those laws are given to a priest who is the voice of Elder dragons. This priest makes sure that the laws are enforced using the White Hand. Many of the people think that the priest is corrupt and only does what will benifit him but he swears that he does all things for the people. Through time there have been a number of priests some better than others but the position is reveared and respected by the people.",
            "Law Enforcement": "<strong>White Hand:</strong><br/>A Small army that the high Priest controlls in order to keep the citizens in order. It is primarly used in law enforcement but in special cases they have been used to deal with threat to the land it its people. The white hand is made of the finest warriors and though they may be feared they are also highly honored.",
            "Religion": "The Dragonkin believe that dragons created the world and it is because of that belief that the older dragons make the laws for the land. They don't worship traditional gods but in stead honor the memories of their ancestors and a few other gods that have connections to their ancestors",
            "Major Characters": [{
                "Name": "High Priest Gramrot",
                "Image": "https://s-media-cache-ak0.pinimg.com/736x/8b/d2/84/8bd284ab0196c981206542d2427ff5a3.jpg",
                "Title": "The Redeemer",
                "Description": "<span title='Gildrunth is manipulating Gramrot and forcing him to do things that are against his moral compas but out of fear what might happen to him or to the people if he is no the one to do it he does it begrudgingly. If Gramrot tries to stand up to Gildrunth then Gildrunth calls him out as a liar and tries to have him executed for lieing to the people for so long.'>Dedicating his life to service of the Elder Dragons Gramrot is their voice. The Elders make the rules and he is the enforcer of those rules. A soft hearted man old in age Gramrot has served the last 10 generations of Elder dragons and until he himself dies he will have this post as High Priest. He is a very wise man and is not the quickest to trust those that are outsiders due to the events that have transpiled in the past but deep down he knows that a change for the dragonkin and the Dragon Circlet is coming be it a good change or a bad change he is not sure. He is not a brave warrior like most of his allies and has found himself in a situation under the thumb of a power that has caused him hurt the very people that he is trying to protect.</span>"
            }, {
                "Name": "Gildrunth Torig",
                "Image": "https://s-media-cache-ak0.pinimg.com/564x/a3/5c/bc/a35cbc59499146a5dcdd16aadbaa79c6.jpg",
                "Title": "Elder Dragon Black Fang",
                "Description": "<span title='His newborn was kidnapped and sold to researchers to study the magic that dragons have innately. He is also manipulating Gramrot forcing him to prepare the DragonKin for war mentally as he schemes to take power away from the council.'>A Dragon that serves on the council of elders. He is one of the head council members and is one of the loudest. He believes that the other countries are below the Dragonkin and it is the Dragonkin that should rule the earth and the skies bringing order through power and fear. Many believe that he was not always such a hard hearted dragon but he became this way after the dwarves killed his olderst child take all that they could for its resources and leaving only what they didn't want. It wasn't that only event that turned his heart to stone but also his newly birthed child being kidnapped by bandits.</span>"
            }, {
                "Name": "Killage Soulflare",
                "Image": "https://cdna.artstation.com/p/assets/images/images/003/221/816/large/todor-hristov-dragonborn6f.jpg?1471280342",
                "Title": "Holy Knight of the White Hand",
                "Description": "<span title=''>'Honorable, Noble, Trusting, and Just. All qualaties that a I am as a Holy Knight of the White Hand. I will protect the people from evil be it inside our borders or outside. For now my life is in the capitiol but who knows maybe someday I will travel the land protecting it from all other threats.' A very good hearted DragonKin who seeks for truth and justice in the kingdom. As a defender of these he has a suspicion that something is going on int he capitiol that is dark and sinaster but has of yet had the chance to figure out what that is.</span>"
            }]
        },
        "Free Haven": {
            "Name": "Free Haven",
            "Crest": "./Transer_folder/Images/freeHavenEmblem.png",
            "History": "Free Haven was once a country under the rule of a selfish king. Under his reign the people where starving, suffering, and forced to labor harder than they ever have had to before. The king forced their country into wars with the Dragonkin and dragons. It was durring these times of war that things where at their harshest. The king issued orders to his royal guards to go out and take the people fathers and boys and force them to fight for him or face the family being wiped from history. Finally the people had reached their breaking point and a young man who was in hidding by the name of Von Zalir rallied the people and stormed the kings home and killed him. The people elected to have Von Zalir as their leader and he graciously accepted the call for a time. Over the next few years Von spent most of his time finding people that could help lead the country until one day he revealed his plans to the kingdom. 'From this day forward our country will be known as Free Haven and we will be a beacon for outcasts and welcome all to our home. We have experianced the power and corruption first hand that a king can have and so from this day forth we will be a kingdom ruled by the people working together for a better tomorrow.' With this he stepped down from the throne and the country became Free Haven working in unison with one another for a better tomorrow.",
            "Government": "Every city, town, and village in Free Haven has their own form of government and rules. This country was once ruled by a king but is now a country of free people who work together to make their day to day lives better.",
            "Law Enforcement": "Each city, town, village uses their own way to keep things in order and has their own system of rules.",
            "Religion": "All races are welcomed be it local or outsider. As such this has created a country with a plethera of differnt religious beliefs.",
            "Major Characters": [{
                "Name": "Dwennon",
                "Image": "https://s1.sinaimg.cn/bmiddle/63fe3cadxb342298e48a0&690",
                "Title": "The Scourage of the sea",
                "Description": "I was cutting throats and sinking war galleys when you were still pissing your britches, boy. You don’t want to take me on. As unpredictable as he is brutal, the reaver king known as Dwennon is feared far and wide. Where he goes, death and ruin follow, and such is his infamy and reputation that the merest sight of his black sails on the horizon causes panic among even the hardiest crew. Having grown rich preying upon the trade routes of the Twelve Seas, Dwennon has made himself many powerful enemies. He has incurred the wrath of the order of assasions  after ransacking the Temple of the Jagged Knife. While Dwennon has incurred the wrath of many, none have yet been able to bring him to justice, despite assassins, bounty hunters, and entire armadas being sent after him. He takes grim pleasure in the ever-increasing rewards posted for his head, and makes sure to nail them to the Bounty Board in Bilgewater for all to see whenever he returns to port, his ships heavy with loot. <br />Now with all the gold and power that he has mustered he has created a new city under the banner of the black flag with himself at the helm of the people. "
            }, {
                "Name": "Zaros Roseberg",
                "Image": "",
                "Title": "The Black Hearted",
                "Description": "<span title='Revived by a necromancer and becoming a Lich king he has been creating an army of undead, with the necromancers help, to reclaim the lands that he lost in death but first he must overcome the white necromancers living close by ho are getting aid from the warriors at DragonTail Keep.'>I am the rightful king of this land and all those who opposed me will now feel my wrath.<br/><br/> The former king of Free Haven, slain by Von, ruled the land with out mercy taking what he liked from the people until they had almost nothing left. Ruthless and despised by all what remains of him lay in is castle just south of the Dragon Tail Mountains.</span>"
            }, {
                "Name": "Von Zalir",
                "Image": "https://s-media-cache-ak0.pinimg.com/236x/76/76/8f/76768fff6bf203e784c614ddcb313ca6.jpg",
                "Title": "The Cursed Rebel",
                "Description": "Hey the name is Von. They call me a noble knight, a hero, and sometimes even savior. Truth is I am none of those. Im just a guy looking to have some adventure in my life.Von is reveared by everyone in Free Haven and lead the people in the rebellion against Zaros the Black Hearted. In the raid it was Von who struck the final blow to end the kings life. Though he had no interest in the throne he was elected to take the seat and for a time he did. But as usual he got bord of playing that game and ended up passing the power on to those that he though where a good fit. Though he may not have been great king material the decisions that he made while he was in the throne have impacted the kingdom in a far greater way than most expected it to.<br/> <br/> <strong>The Cure:</strong> Von has always had a nack for getting in trouble even when he was a kid. When he was a boy he snuck into the tower of a wizard curious of the wonders that he possed and stole a magical dagger. Little did he know that this dagger was cursed and when drawn from the scabbered that seals the curse he would mutate into a beast."
            }]
        },
        "Elen Veil": {
            "Name": "Elen Veil",
            "Crest": "./Transer_folder/Images/elenVeilEmblem.png",
            "History": "Here in the Dragon Circlet Elves where not native to the land in fact how they came to be in the Dragon Circlet came by sad circumstances. You see there are those in Galorion that hunt Elves and capture them to be sold for trade at a high value. One Elven slave can serve your famialy for generations compared to a normal slave. The Elves came to the Dragon Circlet as Slaves being bought by the biggest and most powerful kingdoms of Pruvell who desired them for a deeper understanding of their magical gifts but still treated them as though they where property. It has been many years and take some time but the Elves where finally freed from slavery and most moved as far away from the capitol as they could ending up in what is today called Elen Veil. This country was under the controll of Pruvell and it wasn't until a combined uprising from the Dwarves and the Elves that the Elves where finally able to create a kingdom that they can call home. Now Elves live in all manner of differnt enviroments ranging from forests to deserts and mountains building a kingdom that will last for centuries.",
            "Government": "Each region is ruled by its own leader but major decisions such as war and what is best for all are made in a council which is made up of those rulers.",
            "Law Enforcement": "<strong>The High Guard:</strong><br /> The Elven High Guard is summoned to deal with problems that cause a threat to the country and its people. ",
            "Religion": "The Elves worship the elements and the seasons.",
            "Major Characters": [{
                "Name": "Fainwen Dagnis and Angren Dagnis",
                "Image": "https://media-cache-ec0.pinimg.com/736x/9f/a8/a1/9fa8a174d2a047d435582da94424c7cb.jpg",
                "Title": "Pathfinder: High Guard",
                "Description": "My brother and I fought in the revolution to create our country. Durring that war we where assigned to a special legion designed to deal with threats of demonic nature. Durring that time we became known as Pathfinders paithing the way through the darkness for all other legions to follow so that we may reign victorious. Today we serve as High Guards for Elin Veil and have been tasked with keeping any demon or those that might consider summoning demons from doing so. "
            }, {
                "Name": "Fainwen Dagnis and Angren Dagnis",
                "Image": "https://www.blizz-art.com/illustrations/6/innj7sza255ikiswzebrh28u5ermss.jpg",
                "Title": "Pathfinder: High Guard",
                "Description": "My brother and I fought in the revolution to create our country. Durring that war we where assigned to a special legion designed to deal with threats of demonic nature. Durring that time we became known as Pathfinders paithing the way through the darkness for all other legions to follow so that we may reign victorious. Today we serve as High Guards for Elin Veil and have been tasked with keeping any demon or those that might consider summoning demons from doing so. "
            }]
        },
        "Dread Lands": {
            "Name": "Dred Lands",
            "Crest": "./Transer_folder/Images/orcBanner.png",
            "History": "These lands once belonged to the Pruvell Kingdom but the Orc's came to this land and pillage and killed until the lands could no longer be defended. Every year the Orcs fight the Pruvell Kingdom to increase their territory and quench their blood lust but for now they are at a stalemate.",
            "Government": "Tribal lands ruled by chieftans that follow the rule of one leader. Only one may be the leader but may be challenged for leadership at any time. In this wasteland only the strong survive.",
            "Law Enforcement": "What is Law",
            "Religion": "<a href='https://www.d20pfsrd.com/classes/core-classes/cleric/gods-3rd-party-publishers/gods-frog-god-games/bargrieke/'>Bargrieke</a> and <a href='https://www.d20pfsrd.com/classes/core-classes/cleric/gods-3rd-party-publishers/gods-frog-god-games/orcus/'>Orcus</a>",
            "Major Characters": [{
                "Name": "Eri Daughter of Kallel ",
                "Image": "https://pre13.deviantart.net/723b/th/pre/f/2016/309/a/3/eri_by_bayardwu-dandqac.jpg",
                "Title": "Warchief",
                "Description": "Don't think that just because I am she orc that you can best me.<br /><br /> A strong leader whose father was war chieftan before her. There are those that think that she only got the throne because of her lineage but her father taught her to be strong and how to fight. Many have challenged her but none have ever bested her and though things are changing in the world of the orcs one thing remains true. All land belongs to orcs, all lives belong to orcs. KILL THEM ALL. RAAAWWWWWAAARRRRGGGG! "
            }]
        },
        "Pruvell": {
            "Name": "Pruvell Kingdom",
            "Crest": "./Transer_folder/Images/pruvellEmblem.png",
            "History": "Once a large and beautiful kingdom full of magic and science that controlled more than half of the Dragon Circlet has fallen in to much despair and desperation. Since the Rupture they have had a large civil war which resulted in the loss of half of all the land and resource that they controlled including the lands to the north now occupied by the Dwarves and the island to the east now controlled by the Elves known as Elen Veil. And now what is worse is Orcs from other islands within the Lost Isles invaded their lands to the south and have taken control of them. The Orcs seem only interested in killing and Pruvell is locked in a war that threatens what remains of their home. They are seek aid to deal with this looming threat and warn other kingdoms that these Orcs threaten the whole of the Dragon Circlet if they do not help stop them before it is to late.",
            "Government": "Ruled by one King where the throne is passed on based on lineage and blood line.",
            "Law Enforcement": "<strong>Specters:</strong></br > The best trained warriors in the land in both the magical arts as well as martial skill with weapons. They are sent by the king on missions as well are put in charge of upholding the law. Most fallow the laws of the land in fear that they might have a Specter visit their door one day.",
            "Religion": "There is very little religion as both magic and science has taken its place. Though in the shadows forming cults that mix the three together.",
            "Major Characters": [{
                "Name": "Austen Dewitt",
                "Image": "https://cdna.artstation.com/p/assets/images/images/002/611/418/large/stephen-garrett-rusk-king.jpg?1463620029",
                "Title": "King of Pruvell",
                "Description": "The king is a good man at heart and believes in truth and justice. Though these things may be true it is now that he must make the hard choices to ensure the survival of his people and the kingdom. Under Austens rule the kingdom has been happier than ever before and the cival war that wounded the country has had time to heal with great help from him. Those that came before him used their power to destroy the relations with other countries but he has been working frivously to mend those relationships as they may be what saves the kingdom in the end."
            }, {
                "Name": "Avremegast",
                "Image": "https://s-media-cache-ak0.pinimg.com/564x/c8/88/70/c88870d14b5e8609293116f8aae579fb.jpg",
                "Title": "Grand Battle Mage",
                "Description": "Teacher, student, advisor, warrior. I am all of these. I grew up in Pruvell and studied magic at the school for mages by the capitol. Unlike many other who magic came naturally for I struggled but eventually found my skill in infusion magic. When I finished my schooling I was immediatly recruted to fight for the kingdom. I have since been in many victorious battles and eventually caught the kings gaze. I am now a royal advisor to the kingdom helping us teach future generations and fight back the onslaught of the orcish hords that threaten my home. "
            }]
        },
        "Dronem": {
            "Name": "Dronem Empire",
            "Crest": "./Transer_folder/Images/dwarfEmblem.png",
            "History": "Under the rule of the king of Pruvell the Dwarves where treated as more equals than other races but they where still looked down upon for their lack of magical prowess. Given lands to have as their own by the king they never truely felt as though the lands belonged to them due to the rediculous taxation that the kingdom charged them for owning these lands. It was becasue of this that a collective decision was made to form an alliance with the Elves and rebel against the kingdom and become independent of the Pruvell kingdom. It was a hard fought war but the Dwarven masters of the mountains where able to use the terrain to their advantage holding the armies of the Pruvell kingdom at bay. It wasn't long before the conceded and recognized the Dwarves and Elves as their own kingdoms. Shortly after the Dwarves where the first to feel the steel of the Orcish raiding parties when they first came to the Dragon Circlet. At this time the dwarves had no one ruler and many times ended up fighting amongst themselves over who had rights to the mountains and the wealth that it brought them. Once the war with the Orcs started everything changed. The Dwarves all banded together and fight back and while they where greater in number they where almost always outmatched. It wasn't until a great dwarven black smith named Hadrar IronHammer created the first black powder fire arms that the war started to turn. The Dwarves with these new weapons where able to drive back the Orc's and rid them of their land. They elected the greatest warrior of them all to be the king of the dwarves to help keep the peace between each Dwarven clan. Now the Orc's are a threat again but this time to the south. The Pruvell king beggs them for aid but the Dwarves currently refuse to help saying that they recieved no aid when they needed it. ",
            "Government": "Ruled by a dwarven king that was elected by the pepole. The position is passed on only to those called to be king.",
            "Law Enforcement": "<strong>The Unwritten Rule:</strong> If there is a problem then the issue is settled with our fists in an arena.",
            "Religion": "Dwarven Gods and a mix of others.",
            "Major Characters": [{
                "Name": "Hadrar IronHammer",
                "Image": "https://s-media-cache-ak0.pinimg.com/564x/cc/8d/b8/cc8db84a0f39fec0a578d607b5531b16.jpg",
                "Title": "The Earth Shaker and Master Forger",
                "Description": "I am Hadrar IronHammer the Master Forger. It was in those hard times that I turn to my mastery of Alchemy and Smithing to find peace of mind. It was in a time just as this that I created the first firearms and black powder. I can make masterworks of any material and can infuse magical properties into it. If you need something made my hammer and my anvil can make it.<br /> Hadrar is a master at his craft and a genious at that and he knows he but is a humble dwarf. After he created the mighty weapons that defeated the Orcs many a time was he praised and asked to be the new leader of the dwarves but he always declined saying I will be the master of none other than my hammer besides I am at peace when I work in the smithy. Though it was his creations that won the fight against the Orcs he is not to be triffled with. He fought on the front lines with his own personalized war hammer combined with the fire power of a canon. He is loyal and cool under pressure and though likes to be alone at times to tinker and create new things he also loves to travel and learn about other lands so that he may grow in wisdom and become better at his craft."
            }]
        }
    }]
};
module.exports = {
    markerData: markerData
};
console.log("Objects file is working");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
__webpack_require__(15)
__webpack_require__(5)
__webpack_require__(6)
__webpack_require__(7)
__webpack_require__(8)
__webpack_require__(9)
__webpack_require__(10)
__webpack_require__(14)
__webpack_require__(11)
__webpack_require__(12)
__webpack_require__(13)
__webpack_require__(4)

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);