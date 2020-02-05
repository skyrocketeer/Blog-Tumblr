import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/button.css';
// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './component/navbar';
import CreateUser from './component/user/create';
import UserList from './component/user/list';
import EditUser from './component/user/edit';
import CreateSport from './component/sport/create';
import SportList from './component/sport/list';
import EditSport from './component/sport/edit';

function App() {
  return (
    <Router>
      <Navbar />
      <div id="main-app" className="container col-8 my-3">
        <Route className="App-link" path="/users/list" component={UserList}></Route>
        <Route className="App-link" path="/user/create" component={CreateUser}></Route>
        <Route className="App-link" path="/user/:userId/edit" component={EditUser}></Route>
        <Route className="App-link" path="/sport/list" component={SportList}></Route>
        <Route className="App-link" path="/sport/add" component={CreateSport}></Route>
        <Route className="App-link" path="/sport/:id/edit" component={EditSport}></Route>
      </div>
    </Router>
  );
}

export default App;
