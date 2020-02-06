import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">Menu</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/users/list" className="nav-link"> View user list </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user/create" className="nav-link"> Create user </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/sport/list" className="nav-link"> View sport list </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/sport/create" className="nav-link"> Create sport </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}