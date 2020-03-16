import React, { Component } from 'react';
import axios from 'axios';
import Home from "./components/Home";
import './App.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';

class App extends Component {

    state = {
        usersLoaded: false,
        usersRequestSent: false,
        userProfile: {},
        users: []
    };


    render () {
        return (
            <BrowserRouter className="App">
                <div className="App">
                    {/* This is where state is defined */}
                    {/*userProfile = {this.state.userProfile}*/}
                    {/*  This is where the routes are defined  */}
                    <Route exact path="/" component={() => <Home Users={this.state.users} />} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
