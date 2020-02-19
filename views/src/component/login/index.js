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

  onScreenChange = (event) => {
    this.props.changeScreen('screen changed!')
  }

  render() {
    return (
      <>
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">
                Login
              </span>
    
              <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                <span className="label-input100">Username</span>
                <input className="input100" type="text" name="username" placeholder="Type your username" />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>
    
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="pass" placeholder="Type your password" />
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>
              
              <div className="text-right p-t-8 p-b-31">
                <a href="#">
                  Forgot password?
                </a>
              </div>
              
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
              </div>
    
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>
                  Or register using
                </span>
              </div>
    
              <div className="flex-c-m">
                <a href="#" className="social-item bg1">
                  <i className="fa fa-facebook"></i>
                </a>
    
                <a href="#" className="social-item bg2">
                  <i className="fa fa-twitter"></i>
                </a>
    
                <a href="#" className="social-item bg3">
                  <i className="fa fa-google"></i>
                </a>
              </div>
            </form>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={this.onScreenChange}>
                  Register
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  }
}