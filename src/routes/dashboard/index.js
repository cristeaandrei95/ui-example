import React, { Component } from 'react';
import './style.css';

import WidgetWrapper from '../../components/widget';
import KeyboardAndMouseActivity from '../../components/keyboardAndMouseActivity'
import HighestMobileUsers from '../../components/highestMobileUsers'

export default class Dashboard extends Component {
 render() {
  return (
   <div className="dashboard">
    <h2 className="page-title">Company Dashboard</h2> 
    
    <div className="right-buttons">
     <button className="white">Edit Layout</button>
     <button className="has-icon blue"><img src="./assets/Addwidget.png" />Add Widget</button>
    </div>
    <div className="widget-area">
     <WidgetWrapper date="Monthly" title="Keyboard & Mouse Activity">
      <KeyboardAndMouseActivity />
     </ WidgetWrapper> 
     <WidgetWrapper date="Weekly" title="Highest Mobile users">
      <HighestMobileUsers />
     </ WidgetWrapper> 
    </div> 
   </div>
  );
 }
}

