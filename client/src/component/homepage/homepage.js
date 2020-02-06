import React, {Component} from 'react';
import './homepage.css'

export default class Homepage extends Component{
  render(){
    return (
      <div className="img-wrapper col-6 mx-auto">
       {/* eslint-disable-next-line */}
        <img src={require('../../images/Billie Eilish.jpg')} />
        <span id="cover-title">Billie Eilish</span>
      </div>
    )
  }
}