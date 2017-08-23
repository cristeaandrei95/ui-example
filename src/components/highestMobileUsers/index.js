import React, { Component } from 'react'
import './style.css'
import RadialChart from '../radiusChart'
import RadialLine from '../radialLine'
import RadialUsers from '../radialUsers'

export default class HighestMobileUsers extends Component {
 constructor(props){
  super(props);
  this.state = {
   filter: props,
   users: [{ name: 'Benjamin Tayler', time:'20h 45m', percent : 87, radius: 85, color: '#fbd20a' },
           { name: 'Darell Hart', time:'20h 45m', percent : 80, radius: 72, color: '#ec505f' },
           { name: 'Lester Douglas', time:'20h 45m', percent : 73, radius: 59, color: '#48d2ef' },
           { name: 'Georgia Harper', time:'20h 45m', percent : 60, radius: 46, color: '#606cc2' }, 
           { name: 'Olga Simpson', time:'20h 45m', percent : 35, radius: 33, color: '#51c397' }
   ]
  } 
 }

render() {
var users = this.state.users
return(
 <div className="widget-inner">
  <div className="widget-content">
   <div className="users-wrapper">
    {users.map((user, i) => ( <RadialUsers key={i} name={user.name} time={user.time} color={user.color}/>))}
   </div>
   <div className="chart-wrapper">
   <RadialChart>
    {users.map((user, i) => ( <RadialLine key={i} percent={user.percent} radius={user.radius} color={user.color}/>))}
   </ RadialChart>
   </div>
   </div>
    <div className="widget-footer">
     <div className="first-color"></div>
     <p className="footer-first-text">Actual Hours</p>
     <div className="second-color"></div>
     <p className="footer-second-text">Hours Worked More</p>
    </div>
   </div> 
  )
 }
}
