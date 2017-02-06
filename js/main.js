
/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
 $( document ).ready(function() {
   
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:
	 
var satMap = L.tileLayer( 'https://api.mapbox.com/styles/v1/adan206/ciymd5pg900372skuzqah5sch/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbjIwNiIsImEiOiJjaXltY3RnenUwMDA0NDRwZjVmZWpva3ViIn0.WUxuHhqpda4t7xPQ_m73Dg', {
  
 Attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
 
 id: 'your.mapbox.project.id',
  
  });
   
 brightMap = L.tileLayer ('https://api.mapbox.com/styles/v1/adan206/ciys4fzxo00072rmafnqpzd9j/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbjIwNiIsImEiOiJjaXltY3RnenUwMDA0NDRwZjVmZWpva3ViIn0.WUxuHhqpda4t7xPQ_m73Dg', {
   
  Attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
 
 id: 'your.mapbox.project.id',
   
 });
   
 streetMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbjIwNiIsImEiOiJjaXltY3RnenUwMDA0NDRwZjVmZWpva3ViIn0.WUxuHhqpda4t7xPQ_m73Dg', {
   
 Attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
 
 id: 'your.mapbox.project.id',
 
 });  
  
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
   
var myMaps = {
	"Brightgraphic": brightMap,
	"Satellite": satMap,
	"Streets": streetMap
};
	 
// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

var MNP = L.marker([46.8800, -121.7269]).bindPopup("Mount Rainier National Park"),
	NP = L.marker([47.0137, -121.3876]).bindPopup("Norse Peak"),
  SRT = L.marker([46.9148, -121.6423]).bindPopup("Sourdough Ridge Trail"),
	CM = L.marker([46.9282, -121.5045]).bindPopup("Crystal Mountain Peak")

var IntLoc = L.layerGroup([ MNP, NP, SRT, CM ]);
	
var oMaps = {
	"IntLoc": IntLoc
};

//var mymap = L.map('map-container').setView([46.85, -121.78], 10);
var myMap = L.map('map-container', {
	center: [46.85, -121.78],
	zoom: 10,
	layers: [satMap, IntLoc ]
});

L.control.layers(myMaps, oMaps ).addTo(myMap);
 

//stretch goals, use eventTrigger to properly link the tab links
   

   $(".clickBtn").on("click", function(event){
  event.stopPropagation();

  
  var eventTrigger = $(event.target);
  
  
    if ($(eventTrigger).is(".description-btn")){

     $('#descriptionTAB').tab('show');
      
    } else if($(eventTrigger).is(".history-btn")){
       $('#historyTAB').tab('show');
      
    }else{
      $('#statsTAB').tab('show');
    }
    
});

   
   

 
 
 
 
 
 
 
 });

