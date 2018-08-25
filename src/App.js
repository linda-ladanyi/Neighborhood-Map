import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import './App.css';
import MapContainer from './MapContainer'
import logo from './img/LL50.png';

//Display alert if the map does not load
window.gm_authFailure = () => {
  alert('Google Map error. Please try refreshing the page.');
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="header" role="banner" tabIndex="0">
          <img className="logo" alt="Logo" src={logo}/>
          <div tabIndex="0">
            <h1 className="app-title">Linda's favourite places in Esztergom</h1>
          </div>
        </header>
        
        <main role="main" tabIndex="0">
          <MapContainer google={this.props.google} />
        </main>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB6giKd1lmzQo4mgiICiSkRkdbhLcGGwMQ'
})(App)