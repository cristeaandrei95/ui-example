import React, { Component } from 'react';
import './style.css';

export default (props) => {
 console.log(props)
  return(
   <div className="widget-users">
    <div className="dot" style={{background: props.color}} ></div>
    <div className="user-info">
    <p className="user-name">{props.name}</p>
    <h3 className="user-time">{props.time}</h3> 
    </div>
   </div>
  )
}
