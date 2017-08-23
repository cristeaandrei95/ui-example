import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Dashboard from './routes/dashboard';
import WidgetDropdown from './components/widgetDropdown';

class App extends Component {
 render() {
  return (
   <div className="App">
    <Header />
    <div className="Layout">     
     <Dashboard />
    </div>

   </div>
  );
 }
}

export default App;
