import React, { Component } from 'react';
import Home from "./components/Home";
import './App.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';

class App extends Component {

    state = {
        userProfile: {},
        users: []
    };

    handleUserSelection = (data) => {
            this.setState({
              userProfile: {
                firstName: data["first_name"],
                secondName: data["last_name"]
            },
        })
      };

    handleGetUserSelection = (data) => {
        this.setState({
            users: []
        })
    };

    render () {
        return (
            <BrowserRouter className="App">
                <div className="App">
                    {/* This is where state is defined */}
                    {/*userProfile = {this.state.userProfile}*/}
                    {/*  This is where the routes are defined  */}
                    <Route exact path="/" component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
