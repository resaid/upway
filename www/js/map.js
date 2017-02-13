/**
 * Created by PC_Rem on 10/02/2017.
 */

function InitialiserCarte() {
    var map = L.map('map').setView([45.7531152, 4.827906], 17);
    var tuileUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    var attrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    L.TileLayer(tuileUrl, {minZoom: 8, maxZoom: 18, attribution: attrib}).addTo(map);

}


