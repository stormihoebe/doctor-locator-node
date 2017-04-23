## SearchDoctor

An easy to use web application for finding doctors in your area. SearchDoctor is powered by the BetterDoctor API.

#### Description

The SearchDoctor app contains a simple form for searching for doctors based on location, health issue, doctor specialty, and/or doctor name. The location field takes user location and uses geocomplete to auto complete location, then convert the location to latitude and longitude (which betterDoctor API accepts). Users then enter the maximum distance they are willing to travel to a doctor's location. There are 3 optional fields in the form: medical issue(text), doctor specialty(select option), and doctor name(text). After the form is submitted, the application will return up to 100 search results using BetterDoctor API.   

### Setup

To launch the application follow these steps:
1. Open command line console  
* Clone Github repository (https://github.com/stormihoebe/doctor-locator-node)
* Navigate to root directory
* Create file in in the root directory named ".env"
* In .env, store and export your personal API key, by replacing your own API key with YOUR API KEY HERE in the example below. Then save the .env file.

  `exports.apiKey = "YOUR API CODE HERE";`
* Install necessary node and bower packages shown below.
* In the command line, run:
$ `gulp build --production`
* Start up the gulp server:
 $ `gulp serve`
* Open http://localhost:3000/ in browser
* Enjoy the app.

#### Node & Bower Packages
`npm init`
`npm install gulp --save-dev`
`npm install browserify --save-dev`
`npm install gulp -g`
`npm install vinyl-source-stream --save-dev`
`npm install gulp-concat --save-dev`
`npm install gulp-uglify --save-dev`
`npm install gulp-util --save-dev`
`npm install del --save-dev`
`npm install jshint --save-dev`
`npm install gulp-jshint --save-dev`
`npm install bower -g`
`bower init`
`bower install jquery --save`
`bower install`
`bower install bootstrap --save`
`bower install moment --save`
`npm install bower-files --save-dev`
`npm install browser-sync --save-dev`
`npm install gulp-sass gulp-sourcemaps --save-dev`


#### Built with the following tools:

* Atom (https://atom.io/)
* GitHub (https://github.com/)
* Git (https://git-scm.com/)
* Node.js (https://nodejs.org/en/)
* Bower (https://bower.io/)
* Bootstrap (http://getbootstrap.com/)
* SCSS (http://sass-lang.com/)

#### Support and contact details

Contact Stormi at Epicodus
stormihoebe@gmail.com

#### License

Copyright (c) 2017 **_MIT License_**
