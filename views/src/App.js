import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import TabScreen from './component/layout/LoginTabScreen';
import CreateUser from './component/user/create';
import UserList from './component/user/list';
import EditUser from './component/user/edit';
import CreateSport from './component/sport/create';
import SportList from './component/sport/list';
import EditSport from './component/sport/edit';
import NotFound from './component/layout/404/404page.js';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Navbar />
        <div id="main-app" className="container col-10 my-3">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/account" />}></Route>
            <Route className="App-link" path="/account" component={TabScreen}></Route>
            <Route className="App-link" path="/users/list" component={UserList}></Route>
            <Route className="App-link" path="/user/create" component={CreateUser}></Route>
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
