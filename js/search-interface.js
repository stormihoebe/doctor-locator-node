var Search = require('./../js/search.js').searchModule;

var displayDoctors = function(doctorData){
  $("#resultNumber").text("We found " + doctorData.length + " doctors that matched your search results.");
  console.log(doctorData.length);
  doctorData.forEach(function(doctor){
    $("#doctorList").append("<li>" + doctor.profile.first_name + "</li>");
  });
};

$(document).ready(function(){
  // Call Geo Complete
  $("#address").geocomplete({details:"form#property"});
  $("#property").submit(function(event){
    event.preventDefault();
    var lat = $("#lat").val();
    var long = $("#long").val();
    var range = $("#range").val();
    var issue = $("#issue").val();
    console.log("lat--" + lat);
    console.log("long--" + long);
    console.log("range--" + range);
    console.log("issue--" + issue);
    var newSearch = new Search(lat, long, range, issue);
    console.log("newSearch--" + newSearch);
    newSearch.getDoctors(displayDoctors);
  });
});
