var apiKey = require(./../.env).apiKey;
function Search(lat, long, range, medicalIssue) {
  this.lat = lat;
  this.long = long;
  this.range = range;
  this.medicalIssue = medicalIssue;
}

exports.getDoctors = function(displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ this.medicalIssue +'&location='+this.lat+'%2C'+this.long+'%2C'+this.range+'&user_location='+this.lat+'%2C'+this.long+'&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log(error);
    });
};
