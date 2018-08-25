# Udacity FEND Project 8 - React Neighborhood Map

## Description

This is the 8th project during the Udacity Front-End Web Developer Nanodegree Program.

This project is a React application, which displays a google Map with 7 markers of Esztergom. A clik on each marker displays infos associated to that marker.The names and markers can be filtered to display only the searched results. Additional information about the locations, along with photos fetched from Flickr API, is accessible via an infowindow.

## Dependencies and Attributions

- gh-pages
- Flickr API (https://www.flickr.com/services/api/)
- Google Maps JavaScript API (https://developers.google.com/maps/documentation/)
- google-maps-react (https://www.npmjs.com/package/google-map-react)
- Map styling: [Snazzy Maps] (https://snazzymaps.com)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Run in Development Mode

1. Install Node to have NPM
2. To run the project download the .zip file and unpack it.
3. Open a terminal and navigate to project folder and install depenencies with _npm install_.
4. Start the development version with _npm start_. This opens [localhost:3000](http://localhost:3000/) in your browser window.
5. Start interacting with the app!

***NOTE:*** *The app will only be available offline in production mode. (service workers only cache the site in that case)*

6. Alternatively, open the [live version of the project](https://linda-ladanyi.github.io/Neighborhood-Map).

## Run in Production Mode

1. Install Phython (preferably 3.x)
2. Download the repository on your local computer
3. Open a terminal and navigate to project folder
4. Run: npm run build
5. Navigate to the `build` directory and run Phython localhost server: -m http.server 8080. If you have Python 2.x installed you can run: python -m SimpleHTTPServer 8080
6. Navigate in your browser to [http://localhost:8000](http://localhost:8000)
7. Start interacting with the app!