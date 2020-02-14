import React, { Component } from 'react';
import Login from '../../login';

export default class TabScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  // componentWillMount(){
  //   let loginscreen=[];
  //   loginscreen.push(<Login />);
  //   const loginmessage = "Not registered yet, Register Now";
  //   this.setState({
  //                 loginscreen:loginscreen,
  //                 loginmessage:loginmessage
  //                 })
  // }

  // handleClick(event){
  //   // console.log("event",event);
  //   let loginmessage = '';
  //   let loginscreen=[];

  //   if(this.state.isLogin){
  //     loginscreen.push(<Register/>);
  //     loginmessage = "Already registered.Go to Login";
  //     this.setState({
  //                    loginscreen:loginscreen,
  //                    loginmessage:loginmessage,
  //                    buttonLabel:"Login",
  //                    isLogin:false
  //                  })
  //   }
  //   else{
  //     loginscreen.push(<Login />);
  //     loginmessage = "Not Registered yet.Go to registration";
  //     this.setState({
  //                    loginscreen:loginscreen,
  //                    loginmessage:loginmessage,
  //                    buttonLabel:"Register",
  //                    isLogin:true
  //                  })
  //   }
  // }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <Login />
        </div>
      </div>
    );
  }
}

