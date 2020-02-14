import React, {Component} from 'react';
import '../../styles/login.css';

export default class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    username:'',
    password:''
  }
}

handleClick(event){
  // const self = this;
  // let payload={
  //   "email":this.state.username,
  //   "password":this.state.password
  // }

  // axios.post(apiBaseUrl+'login', payload)
  //  .then(function (response) {
  //   console.log(response);
  //   if(response.data.code == 200){
  //     console.log("Login successfull");
  //     let uploadScreen = [];
  //     uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
  //     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  //   }
  //   else if(response.data.code == 204){
  //     console.log("Username password do not match");
  //     alert("username password do not match")
  //   }
  //   else{
  //     console.log("Username does not exists");
  //     alert("Username does not exist");
  //   }
  //  })
  //  .catch(function (error) {
  //   console.log(error);
  //  });
  }

render() {
    return (
      <div class="limiter">
        <div class="container-login100" style={styles}>
          <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form class="login100-form validate-form">
              <span class="login100-form-title p-b-49">
                Login
              </span>
    
              <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                <span class="label-input100">Username</span>
                <input class="input100" type="text" name="username" placeholder="Type your username" />
                <span class="focus-input100" data-symbol="&#xf206;"></span>
              </div>
    
              <div class="wrap-input100 validate-input" data-validate="Password is required">
                <span class="label-input100">Password</span>
                <input class="input100" type="password" name="pass" placeholder="Type your password" />
                <span class="focus-input100" data-symbol="&#xf190;"></span>
              </div>
              
              <div class="text-right p-t-8 p-b-31">
                <a href="#">
                  Forgot password?
                </a>
              </div>
              
              <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                  <div class="login100-form-bgbtn"></div>
                  <button class="login100-form-btn">
                    Login
                  </button>
                </div>
              </div>
    
              <div class="txt1 text-center p-t-54 p-b-20">
                <span>
                  Or Sign Up Using
                </span>
              </div>
    
              <div class="flex-c-m">
                <a href="#" class="login100-social-item bg1">
                  <i class="fa fa-facebook"></i>
                </a>
    
                <a href="#" class="login100-social-item bg2">
                  <i class="fa fa-twitter"></i>
                </a>
    
                <a href="#" class="login100-social-item bg3">
                  <i class="fa fa-google"></i>
                </a>
              </div>
    
              <div class="flex-col-c p-t-155">
                <span class="txt1 p-b-17">
                  Or Sign Up Using
                </span>
    
                <a href="#" class="txt2">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
    </div>
    );
  }
}

const styles = {
  "backgroundImage": "url('../../images/bg-01.jpg')"
}