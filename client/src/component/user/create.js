import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            age: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const payload = {
            username: this.state.username,
            age: this.state.age
        } 
        
        axios.post('/users/add',payload)
          .then(response => {
              let x = document.createElement('div');
              const success = ["alert","alert-success"]
              const fail = ["alert","alert-danger"]
              
            if(response.status === 200) {
                x.classList.add(...success);
                x.innerHTML = `<strong>${response.data}</strong>`
                document.querySelector('#main-app').firstChild.appendChild(x)
            } else {
                x.classList.add(...fail)
                x.innerHTML = `<strong>Fail</strong>`
                document.querySelector('#main-app').firstChild.appendChild(x)
            }
         })
          .catch(err => console.log(err))
    }

    render() {
        return(
            <>
               <h3 style={{textAlign: "center"}}>Create User</h3>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" 
                               className="form-control form-control-sm"
                               name="username"
                               onChange={this.handleInputChange} 
                        />
                        <small className="form-text text-danger font-weight-light">Please type in more than 6 characters</small>
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="text" 
                               className="form-control form-control-sm"
                               name="age"
                               onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Create user"/>
                    </div>
                </form>
            </>
        )
    }
}