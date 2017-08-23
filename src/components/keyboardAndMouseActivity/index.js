import React, { Component } from 'react';
import './style.css';

import WidgetDropdown from '../widgetDropdown';

export default class KeyboardAndMouseActivity extends Component {
 constructor(props){
  super(props);
  this.state = {
   filter: props 
  };
  this.onClickToggleDrop = this.onClickToggleDrop.bind(this);
 }
    onClickToggleDrop() {
    var widgetDrop = document.querySelector(".widget-drop");
    console.log(widgetDrop);    
    widgetDrop.classList.toggle('expanded');
  }

 render() {
  return(
   <div className="widget-inner">
    <div className="widget-content">
     <table>
     <tbody>
      <tr>
       <td><img src="./assets/User-Avatar2.png" /></td>
       <td className="username">Samuel Barrett</td>
       <td><div className="pb-parent"><div className="pb-child" style={{width: '98%'}}></div></div></td>
       <td className="percentage">98%</td>
      </tr>
      <tr>
       <td><img src="./assets/User-Avatar2.png" /></td>
       <td className="username">Scott Love</td>
       <td><div className="pb-parent"><div className="pb-child" style={{width: '88%'}}></div></div></td>
       <td className="percentage">88%</td>
      </tr>
  <tr>
       <td><img src="./assets/User-Avatar3.png" /></td>
       <td className="username">Michael McDaniel</td>
       <td><div className="pb-parent"><div className="pb-child" style={{width: '81%'}}></div></div></td>
       <td className="percentage">81%</td>
      </tr>
  <tr>
       <td><img src="./assets/User-Avatar4.png" /></td>
       <td className="username">Alejandro Wilkerson</td>
       <td><div className="pb-parent"><div className="pb-child" style={{width: '78%'}}></div></div></td>
       <td className="percentage">78%</td>
      </tr>
  <tr>
       <td><img src="./assets/User-Avatar5.png" /></td>
       <td className="username">Ivan Fowler</td>
       <td><div className="pb-parent"><div className="pb-child" style={{width: '71%'}}></div></div></td>
       <td className="percentage">71%</td>
      </tr>
     </tbody>
     </table>
    </div>
    <div className="widget-footer">
     <img className="icons" src="./assets/User-Avatar3.png" />
     <img className="icons" src="./assets/User-Avatar4.png" />
     <img className="icons" src="./assets/User-Avatar5.png" />
     <p onClick={this.onClickToggleDrop} className="more">+10 more</p>
     <div className="widget-drop">
        <WidgetDropdown />
     </div>
    </div>

   </div> 
  )
 }
}
