import React, {Component} from 'react';
import { withRouter } from 'react-router'; 
import '../../styles/register.css';
import axios from 'axios';

function AlertText(props) {
  return (
    <div className="text-danger font-weight-light">
      <span>{props.type} does not match</span>
    </div>
  );
}
export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      is_pass_matched: true,
      nickname: '',
      sign: '',
      zodiac_signs:  ['Leo', 'Cancer', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
      alert: false
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  checkPassword = (event) => {
    if (event.target.value !== this.state.password) {
      this.setState({ is_pass_matched: false })
    }
    else this.setState({ is_pass_matched: true })
  }

  onSelected = (e) => {
    this.setState({ sign: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.is_pass_matched) {
      const isProduction = process.env.NODE_ENV === 'production';
      const API_URI = isProduction? process.env.HOST : process.env.REACT_APP_API;
      const payload = {
        email: this.state.email,
        password: this.state.password,
        zodiac_sign: this.state.sign,
        nickname: this.state.nickname
      }
      
      axios.post(`${API_URI}/auth/register`, payload)
      .then(response => {
        if(response.status === 409 ) return this.setState({alert: true})
        this.context.history.push('/users');
      })
      .catch(err => console.log(err))  
    }
  }

  render() {
    return (
      <>
        <div className="container-register100">
          <div className="wrap-register100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="register100-form validate-form" onSubmit={this.onSubmit}>
              <span className="register100-form-title p-b-49">
                Register
              </span>
              
              <div className="wrap-input100">
                <span className="label-input100">Email</span>
                <input className="input100" 
                       pattern="[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}"
                       title="Username should only contain lowercase letters. e.g. john"
                       type="text" 
                       name="email" 
                       placeholder="Type in your email" 
                       onChange={this.handleInputChange} 
                       required />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              {this.alert? ( <AlertText type="email" />) : (null)}

              <div className="wrap-input100">
                <span className="label-input100">Password</span>
                <input className="input100" 
                      pattern="[A-Z0-9a-z]{6,8}"
                      title="Username should only contain lowercase letters. e.g. john"
                       type="password" 
                       name="password" 
                       placeholder="Type in your password" 
                       onChange={this.handleInputChange} 
                       required/>
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>

              <div className="wrap-input100">
                <span className="label-input100">Password check</span>
                <input className="input100" 
                      pattern="[A-Z0-9a-z]{6,8}"
                      title="Username should only contain lowercase letters. e.g. john"
                       type="password" 
                       name="confirm-password" 
                       placeholder="retype your password" 
                       onChange={this.checkPassword}
                       required/>
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>
              { !this.state.is_pass_matched? ( <AlertText type='Password'/>) : (null) }
              
              <div className="wrap-input100">
                <span className="label-input100">Nickname</span>
                <input className="input100"
                      pattern="[A-Z0-9a-z]{6,8}"
                      title="Username should only contain lowercase letters. e.g. john" 
                       type="text" 
                       name="nickname" 
                       placeholder="Type in your name" 
                       onChange={this.handleInputChange} 
                />
                <span className="focus-input100" data-symbol="&#9773;"></span>
              </div>

              <div className="wrap-input100" style={{borderBottom: "none"}}>
                <span className="label-input100">Zodiac sign</span>
                <select className="input100"  
                        id="select-box" 
                        onChange={this.onSelected} 
                >
                  <option value="" hidden>Choose your sign</option>
                  {this.state.zodiac_signs.map((sign,id) => <option key={sign} value={id+1}>{sign}</option>)}
                </select>
                <span className="focus-input100" data-symbol="&#9806;"></span>
              </div>

              <div className="register-btn-wrapper">
                  <input type="submit" className="register-btn-text" value="Register" />
              </div>
    
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>
                  Or register using
                </span>
              </div>
    
              <div className="flex-c-m">
                <a href="localhost:9000" className="social-item bg1">
                  <i className="fa fa-facebook"></i>
                </a>
    
                <a href="localhost:9000" className="social-item bg2">
                  <i className="fa fa-twitter"></i>
                </a>
    
                <a href="localhost:9000" className="social-item bg3">
                  <i className="fa fa-google"></i>
                </a>
              </div>
            </form>
            
            <div className="register-btn-wrapper">
              <input type="button" className="register-btn-text" value="Login" />
            </div>
            
          </div>
        </div>
      </>
    );
  }
}