import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class UserList extends Component{
    constructor(props){
        super(props);

        this.state = { 
            users: [{
              id: '',
              username: '',
              age: '',
            }],
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
      console.log(id);
    }

    componentDidMount(){
      axios.get(`/users`)
        .then(response => {
          if(response.data.length > 0) {
            const data = response.data.map(user => { 
              console.log(typeof user._id)
              return ({
                  id: user._id,
                  username: user.username, 
                  age: user.age
              })
            })
            this.setState({ users: data })  
          }
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <>
              <h4 style={{textAlign: "center"}}>User List</h4>
              <table className="table">
                <thead>
                  <tr style={{textAlign: "center"}}>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.users.map( (user,index) => { 
                    return (
                      <tr key={index} style={{textAlign: "center"}}>
                        <th scope="row">{index+1}</th>
                        <td>{user.username}</td>
                        <td>{user.age}</td>
                        <td>
                          <Link to={`/user/${user.id}/edit`} 
                                className="btn btn-success btn-sm round-btn"
                                style={{margin: "auto 2px"}}>
                                    Edit 
                          </Link>
                          <button className="btn btn-danger btn-sm round-btn" 
                                  style={{margin: "auto 2px"}}
                                  onClick={()=>this.handleDelete(user.id)}>
                              Delete
                          </button>
                        </td>
                      </tr>  
                    )} 
                  )}
                </tbody>
              </table>
            </>
        )
    }
}