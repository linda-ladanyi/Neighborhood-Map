import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

  //List of locations on the map
  state = {
    locations: [
      {name: "Basilica of Esztergom", 
      address: "Szent István tér 1", 
      flickr:"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e6b10d2df062428b361399c047fcd&user_id=156177810%40N07&tags=thumbnail&text=bazilika&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157700597045945-9287c8dee7e6edd9&api_sig=0f4e24d35ab7f00737cc0dbdec2c6ba7",
      location: {lat: 47.7990667, lng: 18.7365247}},
      {name: "Szent Anna's Parish Church", 
      address: "Rudnay Sándor tér 1", 
      flickr: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e6b10d2df062428b361399c047fcd&user_id=156177810%40N07&tags=thumbnail&text=kerek&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157700597045945-9287c8dee7e6edd9&api_sig=03677d0d08362d345562ffd94fce54e1",
      location: {lat: 47.7845086, lng: 18.7397583}},
      {name: "St Ignatius Church", 
      address: "Berényi Zsigmond u. 2", 
      flickr: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e6b10d2df062428b361399c047fcd&user_id=156177810%40N07&tags=thumbnail&text=ignac&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157700597045945-9287c8dee7e6edd9&api_sig=d911800df6a198ecfaa906ab2caf614c",
      location: {lat: 47.796928, lng: 18.735118}},
      {name: "Sorrowful Virgin Chapel", 
      address: "Zója St.", 
      flickr: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e6b10d2df062428b361399c047fcd&user_id=156177810%40N07&tags=thumbnail&text=szomoru&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157700597045945-9287c8dee7e6edd9&api_sig=27012c81b797bde4d64427854f703017",
      location: {lat: 47.7966723, lng: 18.7408807}},      
      {name: "Vaskapu Restaurant", 
      address: "Panoráma út", 
      flickr: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e6b10d2df062428b361399c047fcd&user_id=156177810%40N07&tags=thumbnail&text=vaskapu&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157700597045945-9287c8dee7e6edd9&api_sig=ac2b66304fd9d1cd0b52314fd2a7462f",
      location: {lat: 47.7869735, lng: 18.7718087}},
      {name: "Aqua Island", 
      address: "Táncsics Mihály u. 5", 
      flickr: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e6b10d2df062428b361399c047fcd&user_id=156177810%40N07&tags=thumbnail&text=aqua&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157700597045945-9287c8dee7e6edd9&api_sig=3ae12eb3ce825da50e846e6195caa94e",
      location: {lat: 47.7945548, lng: 18.7375308}},
      {name: "Castle Theatre of Esztergom", 
      address: "Szent István tér 1.", 
      flickr: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e6b10d2df062428b361399c047fcd&user_id=156177810%40N07&tags=thumbnail&text=varszinhaz&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157700597045945-9287c8dee7e6edd9&api_sig=4cce2041e44dc0e1f667bf6d293f0310",
      location: {lat: 47.7983623, lng: 18.737358}}
    ],
    query: '',
    markers: [],
    infowindow: new this.props.google.maps.InfoWindow(),
    highlightedIcon: null
  }

  componentDidMount() {
    this.loadMap()
    this.onclickLocation()
  }

  gm_authFailure() {
      alert("Google Map error. Please try refreshing the page.");
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props
      const maps = google.maps

      const mapRef = this.refs.map
      const node = ReactDOM.findDOMNode(mapRef)

      // map style
      var styles = [
        {
          featureType: 'water',
          stylers: [
            { color: '#19a0d8' }
          ]
        },{
          featureType: 'administrative',
          elementType: 'labels.text.stroke',
          stylers: [
            { color: '#ffffff' },
            { weight: 6 }
          ]
        },{
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [
            { color: '#e85113' }
          ]
        },{
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            { color: '#efe9e4' },
            { lightness: -40 }
          ]
        },{
          featureType: 'transit.station',
          stylers: [
            { weight: 9 },
            { hue: '#e85113' }
          ]
        },{
          featureType: 'road.highway',
          elementType: 'labels.icon',
          stylers: [
            { visibility: 'off' }
          ]
        },{
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [
            { lightness: 100 }
          ]
        },{
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            { lightness: -100 }
          ]
        },{
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            { visibility: 'on' },
            { color: '#f0e4d3' }
          ]
        },{
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#efe9e4' },
            { lightness: -25 }
          ]
        }
      ];

      const mapConfig = Object.assign({}, {
        center: {lat: 47.757734, lng: 18.698931},
        zoom: 12,
        mapTypeId: 'roadmap',
        styles: styles,
        mapTypeControl: false
      })

      this.map = new maps.Map(node, mapConfig)
      this.addMarkers()
    }

  }

  // When the user clicks on a location
  onclickLocation = () => {
    const that = this
    const {infowindow} = this.state

    const displayInfowindow = (e) => {
    const {markers} = this.state
    const markerInd =
      // checks if the marker title has the search text in itself
      markers.findIndex(m => m.title.toLowerCase() === e.target.innerText.toLowerCase())
      that.populateInfoWindow(markers[markerInd], infowindow);

      //Sets the marker animation
      if (markers[markerInd].getAnimation() !== null) {
        markers[markerInd].setAnimation(null);
      } else {
        markers[markerInd].setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(function() {
          markers[markerInd].setAnimation(null);
        }, 750);

        //Gets the marker position and zooms in
        this.map.setCenter(markers[markerInd].getPosition());
        this.map.setZoom(18);          
      }

    }

    document.querySelector('.locations-list').addEventListener('click', function (e) {
      if (e.target && e.target.nodeName === "LI") {
        displayInfowindow(e)
      }
    })
  }

  // Search box change
  handleValueChange = (e) => {
    this.setState({query: e.target.value})
  }

  // Adding markers on tha map
  addMarkers = () => {
    const {google} = this.props
    let {infowindow} = this.state
    const bounds = new google.maps.LatLngBounds()

    // Create a new blank array for all the listing markers.
    var markers = [];    

    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('E81313');
    // Create a "highlighted location" marker color for when the user mouses over the marker.
    var highlightedIcon = makeMarkerIcon('FFFE90');  

    // This function takes in a COLOR, and then creates a new marker icon of that color. 
    function makeMarkerIcon(markerColor) {
      var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(25, 41),
        new google.maps.Point(0, 0),
        new google.maps.Point(13, 41),
        new google.maps.Size(25,41));
      return markerImage;
    } 

    this.state.locations.forEach((location, ind) => {
      // variables for flickr picture parameters
      let pictitle = '';
      let picowner = '';
      let picfarm = '';
      let picserver = '';
      let picid = '';
      let picsecret = '';
      let picimg = '';

      // Creates new marker and sets default values from locations
      const marker = new google.maps.Marker({
        position: {lat: location.location.lat, lng: location.location.lng},
        map: this.map,
        animation: window.google.maps.Animation.DROP,
        icon: defaultIcon,
        title: location.name,
        address: location.address,
        flickr: location.flickr,
        pictitle: pictitle,
        picowner: picowner,
        picfarm: picfarm,
        picserver: picserver,
        picid: picid,
        picsecret: picsecret,
        picimg: picimg
      })

      // Push the marker to our array of markers.
      markers.push(marker);      

      // marker on click event
      marker.addListener('click', () => {
        //show infowindow
        this.populateInfoWindow(marker, infowindow);

        //set animation
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
            setTimeout(function() {
            marker.setAnimation(null);
          }, 750);

          //get marker position and zooms in
          this.map.setCenter(marker.getPosition());
          this.map.setZoom(18);          
        }
      })

      // Two event listeners - one for mouseover, one for mouseout, to change the colors back and forth.
      marker.addListener('mouseover', function() {
        this.setIcon(highlightedIcon);
      });
      marker.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
      });

    // get request in order to get data from flickr
    fetch(marker.flickr)
    .then(response => response.json()) 
    .then((photosResults) => {
      //log result for debug
      console.log(photosResults);
      //create picture array from result
      let pic = photosResults.photos.photo[0];
      //set marker properties from result
      if(pic.name === marker.name) {
        marker.picowner = pic.owner;  
        marker.pictitle = pic.title;
        marker.picowner = pic.owner;
        marker.picfarm = pic.farm;
        marker.picserver = pic.server;
        marker.picid = pic.id;
        marker.picsecret = pic.secret;
        marker.picimg = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
      } else {
        marker.address = "no data from Foursquare";
      }

    })
    //will display an alert if an image is missing
    .catch((photosResults) => {this.onImgError()})

      .catch(err => {
        console.log('Failed to fetch flickr data', err)
      })

      this.setState((state) => ({
        markers: [...state.markers, marker]
      }))

      bounds.extend(marker.position)
    })

    this.map.fitBounds(bounds)
  }

  populateInfoWindow = (marker, infowindow) => {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker !== marker) {
      infowindow.setContent('');
      infowindow.marker = marker;

      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });

      //creates streatview
      var streetViewService = new window.google.maps.StreetViewService();
      var radius = 50;
      // In case the status is OK, which means the pano was found, compute the position of the streetview image, 
      // then calculate the heading, then get a panorama from that and set the options
      function getStreetView(data, status) {
        if (status === window.google.maps.StreetViewStatus.OK) {
          var nearStreetViewLocation = data.location.latLng;
          var heading = window.google.maps.geometry.spherical.computeHeading(
            nearStreetViewLocation, marker.position);
            //set infowindow content
            infowindow.setContent(
              '<div role="info" tabIndex="0">' + 
                '<h3 tabIndex="0">' + marker.title +'</h3>' + 
                '<h4 tabIndex="0">' + marker.address + '</h4>' +
              '</div>' + 
              '<div id="pano" role="streetview" tabIndex="0"></div>' +
              '<img className="infopic" key="'+marker.title+'" alt="'+marker.title+'" src="'+marker.picimg+'"></img>' +
              '<p tabIndex="0">Piture id on flickr:'+marker.picid+'</p>'
            );
            var panoramaOptions = {
              position: nearStreetViewLocation,
              pov: {
                heading: heading,
                pitch: 30
              }
            };
          new window.google.maps.StreetViewPanorama(
            document.getElementById('pano'), panoramaOptions);
          } else {
            infowindow.setContent('<div role="infowindowerror" tabIndex="0">' + marker.title + '</div><div>No Street View Found</div>');
          }
      }
      // Use streetview service to get the closest streetview image within 50 meters of the markers position
      streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
      // Open the infowindow on the correct marker.
      infowindow.open(this.map, marker)
    }
  }

  // search for markers that match the query and hides that do not match
  render() {
    const {locations, query, markers, infowindow} = this.state

    if (query) {
      locations.forEach((l, i) => {
        if (l.name.toLowerCase().includes(query.toLowerCase())) {
          markers[i].setVisible(true)
        } else {
          if (infowindow.marker === markers[i]) {
            // close the info window if marker removed
            infowindow.close()
          }
          markers[i].setVisible(false)
        }
      })
    } else {
      locations.forEach((l, i) => {
        if (markers.length && markers[i]) {
          markers[i].setVisible(true)
        }
      })
    }

    return (
      <div>
        <div className="container" tabIndex="0">
          <div className="text-input" tabIndex="0">
            <input role="search" type='text' tabIndex="0"
                   value={this.state.value}
                   onChange={this.handleValueChange}/>
            <ul className="locations-list" tabIndex="0">{
              markers.filter(m => m.getVisible()).map((m, i) =>
                (<li key={i} role="button '+m.title+'">{m.title}</li>))
            }</ul>
          </div>
          <div role="application" className="map" ref="map" tabIndex="0">
            loading map...
          </div>
        </div>
      </div>
    )
  }
}