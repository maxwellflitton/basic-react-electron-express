import React, {Component} from 'react';
import axios from 'axios';
import '../css/BasicContainer.css'
import UserSelectionBar from "./users/userSelectionBar"


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usersLoaded: false,
            usersRequestSent: false,
            userProfile: {},
            users: []
        };
    }

    handleGetUsers = () => {
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

    handleDeleteUser = (firstName, secondName) => {

        let params = {"firstName": firstName, "secondName": secondName};
        this.setState({usersRequestSent: false, usersLoaded: false});

        axios.post("http://127.0.0.1:3001/users/delete", params).then(
            (response) => {
                this.handleGetUsers();
            }
        )
    };

    handleSelectUser(firstName, secondName) {
        console.log("selection is happening in the Home component");
    };

    selectionCallBack = (selectionData) => {
        console.log("call back data is: ", selectionData);

        if (selectionData.action === "delete") {
            this.handleDeleteUser(selectionData["firstName"], selectionData["secondName"]);
        } else {
            this.handleSelectUser(selectionData["firstName"], selectionData["secondName"]);
        }
    };

    render() {
        this.handleGetUsers();

        if (this.state.usersLoaded === false) {
            return (
                <div className="myDiv">
                    <p>loading users</p>
                </div>
            )
        }

        else {
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
                                <UserSelectionBar firstName={user.firstName} secondName={user.secondName} callBackFunction={this.selectionCallBack}>
                                </UserSelectionBar>
                            )}
                        </React.Fragment>
                    </div>
                </div>
                )
        }
    };
}

export default Home
