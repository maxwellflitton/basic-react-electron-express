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

    handleUserSelection = (data) => {
            this.setState({
              userProfile: {
                firstName: data["first_name"],
                secondName: data["last_name"]
            },
        })
      };

    handleGetUsers() {
        if (this.state.usersRequestSent === false) {
            this.state.usersRequestSent = true;
            axios.get("http://127.0.0.1:3001/users/all").then(
            (response) => {
                this.state.usersLoaded = true;
                this.setState({users: response.data});
            }
        )
        } else {}
    };

    render () {
        this.handleGetUsers();

        if (this.state.usersLoaded === false) {
            return (
                <div className="App">
                    <p>loading users</p>
                </div>
            )
        }

        else {
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
}

export default App;
