/*Add a git remote in the Cloud9 console. Should look like this (replace the git url with your repo url):

git remote add origin git@github.com:C9Support/testPush.git 
Add files and commit them:

git add . 
git commit -m "First commit"
Push to github:

git push -u origin master
*/

import * as L from "../Transer_folder/Leaflet/leaflet.js";
import "bootstrap";
import {
    markerData
}
from "../objects.js";

var mymap = L.map('map', {
    zoomControl: false,
    attributionControl: false,
}).setView([0, 0], 2);
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
let Capitol = L.layerGroup([]);
let Citadel = L.layerGroup([]);
let Docs = L.layerGroup([]);
//let Dragon = L.layerGroup([]);
let OrcTown = L.layerGroup([]);
let Outpost = L.layerGroup([]);
let Ruins = L.layerGroup([]);
let DungeonTower = L.layerGroup([]);
let MilitaryBase = L.layerGroup([]);
let City = L.layerGroup([]);
let Village = L.layerGroup([]);
let Farms = L.layerGroup([]);
let Temple = L.layerGroup([]);
let OrcCitadel = L.layerGroup([]);
let Town = L.layerGroup([]);

let portalGroup = L.layerGroup([]);
let markers = L.layerGroup([Town, OrcCitadel, Temple, Farms, Village, City, MilitaryBase, DungeonTower, Ruins, Outpost, /*Dragon,*/ Docs, Citadel, Capitol]).addTo(mymap);

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
    //"Dragons": Dragon,
    "Outpost": Outpost,
    "Ruins": Ruins,
    "Dungeon Tower": DungeonTower,
    "Millitary Tower": MilitaryBase,
    "Orc Citadel": OrcCitadel,
    "Portal": portalGroup,
    "Orc Town": OrcTown,

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
/*var dragon = L.icon({
    iconUrl: '/Transer_folder/Markers/dragon.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});*/
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
let portal = L.icon({
    iconUrl: '/Transer_folder/Markers/Portal.svg',
    iconSize: [75, 75],
    iconAnchor: [37.5, 37.5],
    popupAnchor: [0, 0]
});
var popup = L.popup();

function addMarkers() {
    markerData.Markers.forEach(function() {
        for (let m in markerData.Markers[0]) {
            let i = 0;
            switch (m) {
                case 'Capitol':
                    markerData.Markers[0]["Capitol"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Capitol"][i]["Cordidinates"], {
                            icon: capitol,
                            riseOnHover: true
                        }).bindPopup(markerData.Markers[0]["Capitol"][i]["Name"]);
                        Capitol.addLayer(newMarker)

                        i++;
                    })
                    break;
                case 'City':
                    markerData.Markers[0]["City"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["City"][i]["Cordidinates"], {
                            icon: town2,
                            riseOnHover: true
                        }).bindPopup(markerData.Markers[0]["City"][i]["Name"]);
                        City.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Docs':
                    markerData.Markers[0]["Docs"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Docs"][i]["Cordidinates"], {
                            icon: docs
                        }).bindPopup(markerData.Markers[0]["Docs"][i]["Name"]);
                        Docs.addLayer(newMarker)
                        i++;
                    })
                    break;
                /*case 'Dragon':

                    markerData.Markers[0]["Dragon"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Dragon"][i]["Cordidinates"], {
                            icon: dragon
                        }).bindPopup(markerData.Markers[0]["Dragon"][i]["Name"]);
                        Dragon.addLayer(newMarker)
                        i++;
                    })
                    break;*/
                case 'Dungeon Tower':
                    markerData.Markers[0]["Dungeon Tower"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Dungeon Tower"][i]["Cordidinates"], {
                            icon: tower2
                        }).bindPopup(markerData.Markers[0]["Dungeon Tower"][i]["Name"]);
                        DungeonTower.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Military Tower':
                    markerData.Markers[0]["Military Tower"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Military Tower"][i]["Cordidinates"], {
                            icon: tower
                        }).bindPopup(markerData.Markers[0]["Military Tower"][i]["Name"]);
                        MilitaryBase.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Orc Capitol':
                    markerData.Markers[0]["Orc Capitol"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Orc Capitol"][i]["Cordidinates"], {
                            icon: orc_citadel
                        }).bindPopup(markerData.Markers[0]["Orc Capitol"][i]["Name"]);
                        OrcCitadel.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Outpost':
                    markerData.Markers[0]["Outpost"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Outpost"][i]["Cordidinates"], {
                            icon: outpost
                        }).bindPopup(markerData.Markers[0]["Outpost"][i]["Name"]);
                        Outpost.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Ruins':
                    markerData.Markers[0]["Ruins"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Ruins"][i]["Cordidinates"], {
                            icon: ruins
                        }).bindPopup(markerData.Markers[0]["Ruins"][i]["Name"]);
                        Ruins.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Temple':
                    markerData.Markers[0]["Temple"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Temple"][i]["Cordidinates"], {
                            icon: temple
                        }).bindPopup(markerData.Markers[0]["Temple"][i]["Name"]);
                        Temple.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Town':
                    markerData.Markers[0]["Town"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Town"][i]["Cordidinates"], {
                            icon: town,
                            riseOnHover: true
                        }).bindPopup(markerData.Markers[0]["Town"][i]["Name"]);
                        Town.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Village':
                    markerData.Markers[0]["Village"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Village"][i]["Cordidinates"], {
                            icon: village,
                            riseOnHover: true
                        }).bindPopup(markerData.Markers[0]["Village"][i]["Name"]);
                        Village.addLayer(newMarker)
                        i++;
                    })
                    break;
                case 'Windmill':
                    markerData.Markers[0]["Windmill"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Windmill"][i]["Cordidinates"], {
                            icon: windmill
                        }).bindPopup(markerData.Markers[0]["Windmill"][i]["Name"]);
                        Farms.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Citadel':
                    markerData.Markers[0]["Citadel"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Citadel"][i]["Cordidinates"], {
                            icon: citadel
                        }).bindPopup(markerData.Markers[0]["Citadel"][i]["Name"]);
                        Citadel.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Portal':
                    markerData.Markers[0]["Portal"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Portal"][i]["Cordidinates"], {
                            icon: portal,
                            riseOnHover: true
                        }).bindPopup(markerData.Markers[0]["Portal"][i]["Name"]);
                        portalGroup.addLayer(newMarker);
                        i++;
                    });
                    break;
                case 'Orc Town':
                    markerData.Markers[0]["Orc Town"].forEach(function() {
                        var newMarker = L.marker(markerData.Markers[0]["Orc Town"][i]["Cordidinates"], {
                            icon: orcTown,
                            riseOnHover: true
                        }).bindPopup(markerData.Markers[0]["Orc Town"][i]["Name"]);
                        OrcTown.addLayer(newMarker);
                        i++;
                    });
                    break;
            }
        }
    })
}
addMarkers();
var mBar = document.getElementById('markerInfo');
var mBarState = false;
var mMarker = document.getElementsByClassName("leaflet-marker-icon");
var menu = document.getElementById("sidebar");
var map = document.getElementById("map");
var mButton = document.getElementById("hide-sidebar");
let mBarTitle = document.getElementsByClassName('title');
var exitBTN = document.getElementsByClassName('exit');
let worldHistoryContent = document.getElementsByClassName('worldHistory');
let section = document.getElementsByTagName('section');
let images = document.getElementById('image');

let modalContent = document.getElementsByClassName('modal-content');
let oModal = document.getElementsByClassName("openModal");
let cModal = document.getElementsByClassName("closeModal");
let mySlides = document.getElementsByClassName("slides");
let special = document.getElementById("religionSpecial");
let description = document.getElementById('description');
let races = document.getElementById('races');
let ruler = document.getElementById('ruler');
let government = document.getElementById('government');
let religion = document.getElementById('religion');
let history = document.getElementById('history');
let events = document.getElementById('events');
let ammenaties = document.getElementById('ammenaties');
let jobs = document.getElementById('jobs');
let navHist = document.getElementsByClassName('HIST');
let navKC = document.getElementsByClassName('KC');
let navLogo = document.getElementById('logo');
let navHome = document.getElementById('home');
let historySection = document.getElementById("worldHistory");
let kingdomsAndBorders = document.getElementById('kingdomsAndBorders');
let column = document.getElementById('column');
let localImg = document.getElementsByClassName('localImages');
let kingdomHistory = document.getElementsByClassName("kingdomHistory");
let accordianImage = document.getElementsByClassName("accordianImage");
let panelThumbImg = document.getElementsByClassName('panelThumbImg');
let kingdomGov = document.getElementsByClassName('kingdomGov');
let kingdomLE = document.getElementsByClassName('kingdomLE');
let kingdomReligion = document.getElementsByClassName('kingdomReligion');
let kingdomMajorCharactersName = document.getElementsByClassName('kingdomMajorCharactersName');
let majorCharacterImage = document.getElementsByClassName("majorCharacterImage");
let kingdomMajorCharactersTitle = document.getElementsByClassName('kingdomMajorCharactersTitle');
let kingdomMajorCharactersDescription = document.getElementsByClassName('kingdomMajorCharactersDescription');
let markerItemTitle = document.getElementsByClassName('markerItemTitle');
let navMHome = document.getElementById("mHome");




var i = 0;
var eleNum = 0;
for (var b in markerData.KingdomData[0]) {

    kingdomHistory[i].innerHTML = markerData.KingdomData[0][b]["History"];
    accordianImage[i].src = markerData.KingdomData[0][b]["Crest"];
    panelThumbImg[i].src = markerData.KingdomData[0][b]["Crest"];
    kingdomGov[i].innerHTML = markerData.KingdomData[0][b]["Government"];
    kingdomLE[i].innerHTML = markerData.KingdomData[0][b]["Law Enforcement"];
    kingdomReligion[i].innerHTML = markerData.KingdomData[0][b]["Religion"];
    for (var c = 0; c < markerData.KingdomData[0][b]['Major Characters'].length; c++) {
        majorCharacterImage[eleNum].src = markerData.KingdomData[0][b]['Major Characters'][c]["Image"];
        kingdomMajorCharactersName[eleNum].innerHTML = "<strong>Name:</strong> " + markerData.KingdomData[0][b]['Major Characters'][c]["Name"];
        kingdomMajorCharactersTitle[eleNum].innerHTML = "<strong>Title:</strong> " + markerData.KingdomData[0][b]['Major Characters'][c]["Title"];
        kingdomMajorCharactersDescription[eleNum].innerHTML = "<strong>Description:</strong> " + markerData.KingdomData[0][b]['Major Characters'][c]["Description"];

        eleNum++
    }
    i++
}

for (let i = 0; i < navHist.length; i++) {
    navHist[i].addEventListener('click', rotate);
    navKC[i].addEventListener('click', rotate);
    navHome.addEventListener('click', rotate);
};



oModal[0].addEventListener('click', openModal);
cModal[0].addEventListener('click', closeModal);
worldHistoryContent[0].innerHTML = markerData["World History"];
mymap.addEventListener('click', function() {
    mBarState = false;
    mBar.style.display = 'none';
});

exitBTN[0].addEventListener('click', removeSlideImages)
Array.from(mMarker).forEach(function(element) {
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
    }
    else if (navElement.target.classList.contains("KC")) {
        var audio = document.getElementById("audio");
        audio.autoplay = false;
        audio.load();
        map.style.height = "0vh";
        historySection.style.height = "0vh";
        kingdomsAndBorders.style.height = "100vh";
        kingdomsAndBorders.style.overflow = "auto";
        kingdomsAndBorders.className += " padding-top";
        historySection.classList.remove("padding-top");
    }
    else if (navElement.target.id == navHome.id) {
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
    }
    else {
        mBarState = false;
        mBar.style.display = 'none';
    }
}
//This whole thing needs to be redone to make it more dynamic. 
mymap.on('popupopen', function(e) {

    var marker = e.popup._content;
    let i;

    for (var c in markerData.Markers[0]) {
        console.log("start first for loop")
        for (i = 0; i < markerData.Markers[0][c].length; i++) {
            let b = markerData.Markers[0][c][i]["Name"];
            let obj = markerData.Markers[0][c][i];
            //These two arrays and the html elements are order specific. If you change the order you have to change it everywhere.
            let k = [];
            let jsonArray = [];
            //let jsonArray = [obj["Races"], obj["Ruler"], obj["Description"], obj["Government"], obj["Religion and Gods"], obj["History"], obj["Ammenaties"], obj["Local Events"], obj["Local Jobs"]];
            let domArray = [races, ruler, description, government, religion, special, history, ammenaties, events, jobs];
            var d = 0;
            let q = 0;
            if (marker == b) {
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
                            jsonArray.push(obj[r])

                    }
                    q++
                }
                console.log(k)

                mBarTitle[0].innerHTML = b;
                while (d < domArray.length) {
                    var s = 0;
                    for (var s = 0; s < k.length; s++) {
                        if (k[s].toLowerCase() == domArray[d].id) {
                            if (jsonArray[s] != "" && jsonArray[s] != undefined) {
                                console.log(domArray[d].id + "    " + k[s])
                                switch (k[s]) {
                                    case 'Religion':
                                        console.log(domArray[d + 1].id)

                                        domArray[d].style.display = "block";
                                        domArray[d].innerHTML = jsonArray[s]["Gods"];
                                        markerItemTitle[d].style.display = "block";
                                        
                                        console.log(jsonArray[s]["special"]);
                                        special.style.display = "block !import";
                                        special.innerHTML = jsonArray[s]["special"];
                                        markerItemTitle[d+1].style.display = "block";


                                        break;
                                        /*case undefined:
                                            domArray[d].style.display = "none";
                                            markerItemTitle[d].style.display = "none";
                                            break;*/
                                    default:
                                        domArray[d].style.display = "block";
                                        domArray[d].innerHTML = jsonArray[s];
                                        markerItemTitle[d].style.display = "block";
                                }
                            }
                            else {
                                domArray[d].style.display = "none";
                                markerItemTitle[d].style.display = "none";
                            }
                            break;
                        }
                        else {
                            domArray[d].style.display = "none";
                            markerItemTitle[d].style.display = "none";
                        }
                    }
                    d++;
                }
                images.src = markerData.Markers[0][c][i]["Images"][0]['Main Image'];
                images.style.width = '100%';
                mySlides[0].src = markerData.Markers[0][c][i]["Images"][1]['Regional Images'][0];
                sliderImages(c, i);
            }
        }
    }
});

function sliderImages(c, i) {
    for (let h = 0; h < markerData.Markers[0][c][i]["Images"][1]['Regional Images'].length; h++) {
        let img = document.createElement('img');
        let li = document.createElement('li');
        li.className = "flex-item localImages";
        img.src = markerData.Markers[0][c][i]["Images"][1]['Regional Images'][h];
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
    for (var c in markerData.Markers[0]) {
        for (let i = 0; i < markerData.Markers[0][c].length; i++) {
            if (markerData.Markers[0][c][i]["Images"] != undefined) {
                for (let h = 0; h < markerData.Markers[0][c][i]["Images"][1]['Regional Images'].length; h++) {
                    if (e.target.src == markerData.Markers[0][c][i]["Images"][1]['Regional Images'][h]) {
                        mySlides[0].src = markerData.Markers[0][c][i]["Images"][1]['Regional Images'][h];
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
    acc[i].onclick = function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    }
}
let menuButton = document.getElementsByClassName('menu-open-button');
let footer = document.getElementsByTagName('footer');
menuButton[0].addEventListener('click',function(){
    console.log(footer[0].style.height)
    if (footer[0].style.height == '0px') {
        footer[0].style.height = '120px';    
        
    } else {
        footer[0].style.height = '0px';
    }
    
})

console.log("everything is working");
