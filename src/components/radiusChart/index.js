import React, { Component } from 'react';
import './style.css';

export default class RadialChart extends Component {
 constructor(props){
  super(props);
  this.state = {
   props: props 
  }
 }
 render() {
  return(
   <figure className="chart" data-nr="1">
    <svg className="svg" >
     {this.props.children} 
    </svg>
   </figure>
  )
 }
}
