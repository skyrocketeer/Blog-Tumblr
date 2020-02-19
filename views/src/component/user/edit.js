import React, {Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component{
    constructor(props){
        super(props);

        this.state = { 
            id: '',
            username : '',
            age: '',
        };
    }
    componentDidMount(){
        const { match: { params } } = this.props;
        
        axios.get(`/users/${params.userId}`)
          .then(response => {
            if(response.status === 200) {
                this.setState({
                    id: response.data._id,
                    username: response.data.username,
                    age: response.data.age
                })
            }
          })
          .catch(err => console.log(err))
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }
    onChangeAge = e => {
        this.setState({
            age: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        
        const payload = {
            username: this.state.username,
            age: this.state.age
        }
        
        axios.put(`/users/${this.state.id}/update`, payload)
         .then( response  => {
            let x = document.createElement('div');
            const success = ["alert","alert-success"]
            const fail = ["alert","alert-danger"]

            if(response.status === 200){
                x.classList.add(...success);
                x.innerHTML = `<strong>${response.data}</strong>`
                document.querySelector('#main-app').appendChild(x);
                window.setTimeout(()=>this.props.history.push('/users/list'),1000)
                x.remove();
            } else {
                x.classList.add(...fail)
                x.innerHTML = `<strong>Fail</strong>`
                document.querySelector('#main-app').appendChild(x)
                window.setTimeout(() => x.remove(),1000);
            }
         })
        
    }
    render() {
        return(
            <>
                <h3 style={{textAlign: "center"}}>Edit User</h3>
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" 
                            className="form-control form-control-sm"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                        <small className="form-text text-danger font-weight-light">Please type in more than 6 characters</small>
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="text" 
                               className="form-control form-control-sm"
                               name="age"
                               value={this.state.age}
                               onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Edit user"/>
                    </div>
                </form>
            </>
        )
    }
}