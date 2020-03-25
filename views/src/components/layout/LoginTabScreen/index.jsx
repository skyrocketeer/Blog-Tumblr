import React, { Component } from 'react';
import Login from '../../login';
import Register from '../../register';

export default class TabScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      isLogin: true
    }
  }
  
  shouldComponentUpdate(){
    return true;
  }

  changeScreen = () => {
    this.setState({ isLogin: !this.state.isLogin });
  }

  render() {
    return (
      <div className="tab_screen">
        {this.state.isLogin? <Login changeScreen={this.changeScreen}/> : <Register changeScreen={this.changeScreen} /> }
      </div>
    );
  }
}

