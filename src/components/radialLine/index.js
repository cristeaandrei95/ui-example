import React, { Component } from 'react';
import './style.css';

export default class RadialLine extends Component {
 constructor(props){
  super(props);
  this.state = {
   props: props 
  }
 }
 render() {
  var radius = this.state.props.radius 
  var π =  Math.PI
  var circumference = 2 * π * radius;
  var percent = this.state.props.percent
  var dash = circumference * (1 - percent/100) 
  return(
<g> 
   <circle className="outer first" style={{strokeDasharray: circumference, stroke: "#D8DDE6", strokeDashoffset: 0 }} cx="95" cy="95" r={radius}  transform="rotate(-90, 95, 95)"/>

     <circle className="outer first" style={{strokeDasharray: circumference, stroke: this.props.color, strokeDashoffset: dash}} cx="95" cy="95" r={radius}  transform="rotate(-90, 95, 95)"/>
</g>
)
 }
}
