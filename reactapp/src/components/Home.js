import React, {Component} from 'react';
import axios from 'axios';
import '../css/BasicContainer.css'
import UserSelectionBar from "./users/userSelectionBar"


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.Users
        };
    }

    render() {
        return (
            <div>
                <div className="myDiv">
                    <h1>Basic Game</h1>
                    <p>By Maxwell Flitton</p>
                </div>
                <div className="userDiv">
                    <h2>Users</h2>
                    <React.Fragment>
                        {this.state.users.map( (user) =>
                            <UserSelectionBar firstName={user.firstName} secondName={user.secondName}>
                            </UserSelectionBar>
                        )}
                    </React.Fragment>
                </div>
            </div>
            )
    };
}

export default Home
