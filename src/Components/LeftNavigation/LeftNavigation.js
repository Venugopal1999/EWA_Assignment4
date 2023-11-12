// LeftNavigation.js

import React from 'react'
import './LeftNavigation.css';
import './LeftNavigationStyles.css';
const LeftNavigation = () => {
  return (
    <div id="sidebar">
      <ul>
        <li>
          <h2>Doorbells</h2>
          <ul>
            <li id="first"><a href="ConsoleList?maker=Ring">Ring</a></li>
            <li><a href="ConsoleList?maker=Nest">Nest Hello</a></li>
            <li><a href="ConsoleList?maker=Arlo">Arlo</a></li>
          </ul>
        </li>
        <li>
          <h2>Doorlocks</h2>
          <ul>
            <li id="first"><a href="GamesList?maker=Schlage">Schlage</a></li>
            <li><a href="GamesList?maker=Kwikset">Kwikset</a></li>
            <li><a href="GamesList?maker=Yale">Yale</a></li>
          </ul>
        </li>
        <li>
          <h2>Speakers</h2>
          <ul>
            <li id="first"><a href="TabletList?maker=Bose">Bose</a></li>
            <li><a href="TabletList?maker=Sonos">Sonos</a></li>
            <li><a href="TabletList?maker=JBL">JBL</a></li>
          </ul>
        </li>
        <li>
          <h2>Lightings</h2>
          <ul>
            <li id="first"><a href="LightingList?maker=Philips">Philips Lighting</a></li>
            <li><a href="LightingList?maker=GE">GE Lighting</a></li>
            <li><a href="LightingList?maker=Osram">Osram</a></li>
          </ul>
        </li>
        <li>
          <h2>Thermostats</h2>
          <ul>
            <li id="first"><a href="ThermostatList?maker=Trane">Trane</a></li>
            <li><a href="ThermostatList?maker=Sensi">Sensi</a></li>
            <li><a href="ThermostatList?maker=Lennox">Lennox</a></li>
          </ul>
        </li>
        <li>
          <h2>Accessories</h2>
          <ul>
            <li id="first"><a href="AccessoryList?maker=Ring">Ring</a></li>
            <li><a href="AccessoryList?maker=Nest">Nest</a></li>
            <li><a href="AccessoryList?maker=Arlo">Arlo</a></li>
          </ul>
        </li>
        <li>
          <h2>Trending</h2>
          <ul>
            <li><a href="Trending"><span className="glyphicon">Trending </span></a></li>
          </ul>
        </li>
      </ul>
      
    </div>
  );
};  

export default LeftNavigation;