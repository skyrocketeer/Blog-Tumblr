// import React, {Component} from 'react'
import '../../styles/login.css';



import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      statusLogin : false,
      username:'',
      password:''
    }
  }
  changeLogin = () => {
    this.setState({
      statusLogin : !this.state.statusLogin
    })
    // console.log(this.state.statusLogin)
  }
  isLoginOrRegister = ()=>{
    if( this.state.statusLogin === false){
      return(
        <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">
                Login
              </span>
              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Username</span>
                <input className="input100" type="text" name="username" placeholder="Type your username" />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="pass" placeholder="Type your password" />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-31 mt-4 mb-4">
                <a href="#">
                  Forgot password?
                </a>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
              </div>
              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              <div onClick ={() => this.changeLogin()} className="tn btn-primary btn-lg btn-block text-sm-center mt-4 text-white cursorSignUp">Sign Up
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    }
    else{
      return(
        <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">
                Register
              </span>
              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">User Name</span>
                <input className="input100" type="text" name="UserName" placeholder="Type your username" />
                <span className="focus-input100" data-symbol="" />
              </div>

              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Email</span>
                <input className="input100" type="emai" name="email" placeholder="Type your email" />
                <span className="focus-input100" data-symbol="" />
              </div>

              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Tel</span>
                
                <input className="input100" type="text" name="tel" placeholder="Type your telephone" />
                <span className="focus-input100" data-symbol="" />
              </div>

              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="password" placeholder="Type your password" />
                <span className="focus-input100" data-symbol="" />
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Confirm Password</span>
                <input className="input100" type="password" name="confirmPassword" placeholder="Type your password" />
                <span className="focus-input100" data-symbol="" />
              </div>
            
              <div className="container-login100-form-btn mt mt-4">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">
                    Register
                  </button>
                </div>
              </div>
              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              <div onClick ={() => this.changeLogin()} className="tn btn-primary btn-lg btn-block text-sm-center mt-4 text-white cursorSignUp">Sign In
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    }
  }
  render() {
    return (
      <div>
        {
          this.isLoginOrRegister()
        }
      </div>
    );
  }
}

export default Login;
// export default class Login extends Component {
// constructor(props){
//   super(props);
//   this.state = {
//     statusLogin : false,
//     username:'',
//     password:''
//   }
// }
// isLoginOrRegister = ()=>{
//   if( this.state.statusLogin === false){
//     return(
//       <div className="limiter">
//       <div className="container-login100">
//         <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
//           <form className="login100-form validate-form">
//             <span className="login100-form-title p-b-49">
//               Login
//             </span>
//             <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
//               <span className="label-input100">Username</span>
//               <input className="input100" type="text" name="username" placeholder="Type your username" />
//               <span className="focus-input100" data-symbol="" />
//             </div>
//             <div className="wrap-input100 validate-input" data-validate="Password is required">
//               <span className="label-input100">Password</span>
//               <input className="input100" type="password" name="pass" placeholder="Type your password" />
//               <span className="focus-input100" data-symbol="" />
//             </div>
//             <div className="text-right p-t-8 p-b-31 mt-4 mb-4">
//               <a href="#">
//                 Forgot password?
//               </a>
//             </div>
//             <div className="container-login100-form-btn">
//               <div className="wrap-login100-form-btn">
//                 <div className="login100-form-bgbtn" />
//                 <button className="login100-form-btn">
//                   Login
//                 </button>
//               </div>
//             </div>
//             <div className="flex-c-m">
//               <a href="#" className="login100-social-item bg1">
//                 <i className="fa fa-facebook" />
//               </a>
//               <a href="#" className="login100-social-item bg2">
//                 <i className="fa fa-twitter" />
//               </a>
//               <a href="#" className="login100-social-item bg3">
//                 <i className="fa fa-google" />
//               </a>
//             </div>
//             <div className="tn btn-primary btn-lg btn-block text-sm-center mt-4 text-white cursorSignUp">Sign Up
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     )
//   }
// }
// handleClick(event){
//   // const self = this;
//   // let payload={
//   //   "email":this.state.username,
//   //   "password":this.state.password
//   // }

//   // axios.post(apiBaseUrl+'login', payload)
//   //  .then(function (response) {
//   //   console.log(response);
//   //   if(response.data.code == 200){
//   //     console.log("Login successfull");
//   //     let uploadScreen = [];
//   //     uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//   //     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//   //   }
//   //   else if(response.data.code == 204){
//   //     console.log("Username password do not match");
//   //     alert("username password do not match")
//   //   }
//   //   else{
//   //     console.log("Username does not exists");
//   //     alert("Username does not exist");
//   //   }
//   //  })
//   //  .catch(function (error) {
//   //   console.log(error);
//   //  });
//   }

// render() {
//     return (
//       {
//         isLoginOrRegister()
//       }
     
//       );
//   }
// }

const styles = {
  "backgroundImage": "url('../../images/bg-01.jpg')"
}