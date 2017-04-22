var apiKey = require('./../.env').apiKey;
function Search(lat, long, range, medicalIssue, specialties, doctor) {
  this.lat = lat;
  this.long = long;
  this.range = range;
  this.medicalIssue = medicalIssue;
  this.specialties = specialties;
  this.doctor = doctor;
}

Search.prototype.fixUndefinedParams = function(){
  if (this.medicalIssue === undefined){

    this.medicalIssue = "";
  }
  if (this.specialties === undefined){
    this.specialties = "";
  }
  if (this.doctor === undefined){
    this.doctor = "";
  }
  return this;
};
// https://api.betterdoctor.com/2016-03-01/doctors?name=DOCTORNAME&specialty_uid=SPECIALTY&location=37.773%2C-122.413%2C3000&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=ddc9e16aada8d7bbc57c23bb4b14aa56
Search.prototype.getDoctors = function(displayDoctors) {
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?name=" + this.doctor + "&specialty_uid=" + this.specialties + "&query="+this.medicalIssue+"&location="+this.lat+"%2C"+this.long+"%2C"+this.range+"&user_location="+this.lat+"%2C"+this.long+"&skip=0&limit=100&user_key=" + apiKey)
   .then(function(result) {
      displayDoctors(result.data);
    })
   .fail(function(error){
      console.log(error);
    });
};

Search.prototype.getSpecialties = function(displaySpecialties) {
  $.get("https://api.betterdoctor.com/2016-03-01/specialties?user_key="+ apiKey
)
  .then(function(result) {
     displaySpecialties(result.data);
   })
  .fail(function(error){
     console.log(error);
   });
};

exports.searchModule = Search;
