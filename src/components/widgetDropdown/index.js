import React, { Component } from 'react';
import './style.css';

import Dropdown from '../dropdown';

export default class WidgetDropdown extends Component {
 constructor(props){
    super(props);
  }
 
 render() {
    let data = [
        {name: 'Saso Markoski', job:  '#PRODUCT DEVELOPERS'},
        {name: 'Jack Manlosa', job:  '#PRODUCT DEVELOPERS'},
        {name: 'Raju Mazumder', job:  '#PRODUCT DEVELOPERS'},
        {name: 'Ihor Kit', job:  '#PRODUCT DEVELOPERS'},
        {name: 'Eslam Mahmoud', job:  '#PRODUCT DEVELOPERS'},
        {name: 'John Ngujo', job:  '#PRODUCT DEVELOPERS'},
        {name: 'Sandy Tarke', job:  '#PRODUCT DEVELOPERS'},
        {name: 'Nataliya Olyeynyk', job:  '#PRODUCT DEVELOPERS'},
        {name: 'Elle Javier - Quingco', job:  '#SUPPORT'},
        {name: 'Junovie Kitamura', job:  '#SERVERS'},
        {name: 'Jessica Manhit', job:  '#PRODUCT MANAGERS'},
        {name: 'Nong Binlaman', job:  '#PRODUCT DEVELOPERS'}
    ]
    let colors = ['#FFB200', '#657FAC', '#657FAC', '#657FAC'];

    return(
        <div className="widget-dropdown-wrapper">
            {data.map((person, i) => <Dropdown key={i} name={person.name} job={person.job} />)}
        </div>
    
  )
 }
}
