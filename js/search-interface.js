var Search = require('./../js/search.js').searchModule;

var displayDoctors = function(doctorData){
  var special;
  if (doctorData.length < 1) {
    $("#resultNumber").text("Sorry. We were not able to locate any doctors based on your search. To get better results try the search again with a more general Medical Issue or increase the Maximum Distance.");
  } else{
    $("#resultNumber").text("We found " + doctorData.length + " doctors that matched your search results.");
    doctorData.forEach(function(doctor){
        if (!doctor.specialties || doctor.specialties.length === 0){
          special = "";
        } else if (doctor.specialties.length > 1) {
          special = doctor.specialties[0].name + ", " + doctor.specialties[1].name;
        } else if (doctor.specialties.length === 1){
          special = doctor.specialties[0].name;
        } else {
          special = "";
        }
      $("#doctorList").append(
        "<div class='panel panel-default'> <div class='panel-heading'><h3 class='panel-title'>"+
        doctor.profile.first_name +" " + doctor.profile.last_name + " ("+doctor.profile.title+")"+
        "</h3></div><div class='panel-body'>" +
        "Specialties: "+ special + "<br>" +
         doctor.profile.bio + "<br>" +
        "Gender: "+ doctor.profile.gender + "<br><strong>Location</strong><br>" +
        doctor.practices[0].visit_address.street + "<br>" +
        doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + " " + doctor.practices[0].visit_address.zip + "<br>" +
        "</div></div>"
      );
    });
  }
  $('html,body').animate({
     scrollTop: $("#resultNumber").offset().top},
     'slow');
}; //end displayDoctors
var displaySpecialties = function(specialtiesData) {
  specialtiesData.forEach(function(specialty) {
    $("#specialties").append(
      "<option value='" + specialty.uid + "'>" + specialty.name + "</option>"
    );
  });
};



$(document).ready(function(){
  var dummySearch = new Search("", "", "", "", "", "");
  dummySearch.getSpecialties(displaySpecialties);
  // Call Geo Complete
  $("#address").geocomplete({details:"form#property"});
  $("#property").submit(function(event){
    event.preventDefault();
    $("#resultNumber").empty();
    $("#doctorList").empty();
    var lat = $("#lat").val();
    var long = $("#long").val();
    var range = $("#range").val();
    var issue = $("#issue").val();
    var doctor = $("#doctor").val();
    var specialties = $("#specialties").val();
    var newSearch = new Search(lat, long, range, issue, specialties, doctor);
    newSearch.fixUndefinedParams().getDoctors(displayDoctors);
    // $('html,body').animate({
    //    scrollTop: $("#doctorList").offset().top},
    //    'slow');
  });
});
