import React, { Component } from 'react';
import './style.css';

export default class WidgetWrapper extends Component {
 constructor(props){
  super(props);
  this.state = {
   date: props.date,
   dateList: ["Monthly","Weekly","Last 7 Days","Daily"],
   widgetOptions: 0 
  }
  this.toggleOptions = this.toggleOptions.bind(this)
  this.toggleDropdown = this.toggleDropdown.bind(this)

 }
toggleOptions() {
 var elem = document.querySelector('.widget-options')
 elem.classList.toggle('expanded') 
}
toggleDropdown() {
 var elem = document.querySelector('.widget-dropdown')
 elem.classList.toggle('expanded') 
 console.log(elem)
}

 render() {
  return(
   <div className="widget-wrapper">
    <div className="widget-header">
     <h2 className="widget-title">{this.props.title}</h2>
     <div className="right">
     <span className="widget-date" onClick={ this.toggleDropdown}>{this.state.date}
           <img className="widget-symbol" src="./assets/Arrowdown-icon-default.svg" /></span>
     <ul className="widget-dropdown">
      <li>{this.state.dateList[0]}</li>
      <li>{this.state.dateList[1]}</li>
      <li>{this.state.dateList[2]}</li>
     </ul>
     <ul className="widget-options" >
       <li className="widget-options-space"></li>
       <li>Edit widget</li>
       <li>Delete widget</li>
      </ul>
     <img className="widget-more" onClick={ this.toggleOptions } src="./assets/Settings-icon-default.svg" />
    </div>    
</div> 
    {this.props.children}
   </div> 
  )
 }
}
