import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/iconic/css/material-design-iconic-font.min.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './layout/Navbar';
import TabScreen from './layout/LoginTabScreen';
import CreateUser from './user/create';
import UserList from './user/list';
import EditUser from './user/edit';
import CreateSport from './sport/create';
import SportList from './sport/list';
import EditSport from './sport/edit';
import NotFound from './layout/404';

export default class App extends Component {
  render(){
    return (
      <Router>
        <Navbar />
        <div id="main-app" className="container col-10 my-3">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/account" />}></Route>
            <Route className="App-link" path="/account" component={TabScreen}></Route>
            <Route className="App-link" path="/users/list" component={UserList}></Route>
            <Route className="App-link" path="/user/create" componen={CreateUser}></Route>
            <Route className="App-link" path="/user/:userId/edit" component={EditUser}></Route>
            <Route className="App-link" path="/sport/list" component={SportList}></Route>
            <Route className="App-link" path="/sport/add" component={CreateSport}></Route>
            <Route className="App-link" path="/sport/:id/edit" component={EditSport}></Route>
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
