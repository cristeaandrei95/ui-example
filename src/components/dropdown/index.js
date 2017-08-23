import React, { Component } from 'react';
import './style.css';

export default class Dropdown extends Component {
 constructor(props){
    super(props);
    this.state = {
        color: '',
        colors : ['#FFB200', '#36C398', '#657FAC', '#EE352E']    
    }
  }

 componentWillMount() {
    switch(this.props.job) {
        case '#PRODUCT DEVELOPERS':
            this.setState({color: this.state.colors[0]});
            break;
        case '#SUPPORT':
            this.setState({color: this.state.colors[1]});
            break;
        case '#SERVERS':
            this.setState({color: this.state.colors[2]});
            break;            
        case '#PRODUCT MANAGERS':
            this.setState({color: this.state.colors[3]});
            break;            
        default:    
    }
 }

 render() {
    
    


    return(
            <div className="dropdown-names">
             <div className="widget-names-left">
               {this.props.name}
             </div>
             <div className="widget-progress-right">
                <span className="spanWidget" style={{background: this.state.color}}>{this.props.job}</span>
             </div>
            </div>
  )
 }
}
