import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import './App.css';
import MapContainer from './MapContainer'
import logo from './img/LL50.png';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header" role="banner">
          <img className="logo" alt="Logo" src={logo}/>
          <div>
            <h1 className="app-title">Linda's favourite places in Esztergom</h1>
          </div>
        </header>
        
        <main role="main">
          <MapContainer google={this.props.google} />
        </main>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB6giKd1lmzQo4mgiICiSkRkdbhLcGGwMQ'
})(App)