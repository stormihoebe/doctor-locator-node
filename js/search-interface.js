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
  });
});
