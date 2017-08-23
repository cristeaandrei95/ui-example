import React, { Component } from 'react';
import './Header.css';
//import { Link } from 'react-router';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
    this.onClickToggleMenu = this.onClickToggleMenu.bind(this);
  }

  onClickToggleMenu() {
    var divResponsive = document.querySelector("#divResponsive");
    divResponsive.classList.toggle('Header-menu-items-down');
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-topbar">
          <div className="Header-logo">
            <img src="header/logo.png" />
          </div>

          <div className="Header-menu">
            <div id="divResponsive" className="Header-menu-items">
              <ul>
                <li><a className="active" href="/">Dashboard</a></li>
                <li><a href="/edit">Edit Time</a></li>
                <li><a href="/screenshots">Screenshots</a></li>
                <li><a href="/reports">Reports</a></li>
                <li><a href="/payments">Payments</a></li>
              </ul>
            </div>
            <div className={"Header-menu-icon"}>
              <a id="btnResponsive" onClick={this.onClickToggleMenu}><img className="iconResponsive" src="header/icon_responsive.svg" /></a>
            </div>  
          </div>   
          
          <div className="Header-right">
            <img className="shape1Shaped" src="header/shape1.png" alt="shape1" width="18" />
            <img className="shape2Shaped" src="header/shape2.png" alt="shape2" width="23" />
            <img className="shape3Shaped" src="header/shape3.png" alt="shape3" width="22" />

            <img className="personShaped" src="header/personLogged.png" alt="person" />
            <img className="verticalShaped" src="header/vertical-line.png" />
            <a href="">
              <img className="okShaped" src="header/okicon.png" alt="okicon" />
              <img className="dropdownArrow" src="header/dropdownarrowdown.png" alt="dropdown arrow" />
            </a>
          </div>      

        </div>  
      </div>
    );
  }
}

export default Header;