import React, {Component} from 'react';
import '../../css/users/userSelectionBar.css';


class UserSelectionBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            secondName: props.secondName,
            width: 600
        }
    }

    mouseEnterBar = () => {
        this.setState({width: 610});
    };

    mouseLeaveBar = () => {
        this.setState({width: 600});
    };

    delete = () => {
        console.log("user to be deleted: ", this.state.firstName);
    };

    select = () => {
        console.log("user to be selected: ", this.state.firstName);
    };


    render() {
        return (
            <div className="UserSelectionDiv" style={{width: this.state.width}}
            onMouseEnter={this.mouseEnterBar} onMouseLeave={this.mouseLeaveBar}>

                <div style={{flex: 50}}>
                    <React.Fragment>
                        <p>{this.state.firstName} {this.state.secondName}</p>
                    </React.Fragment>
                </div>

                <div style={{flex: 50}}>
                    <button className="SelectButton" onClick={this.select}>SELECT</button>
                    <p></p>
                    <button className="DeleteButton" onClick={this.delete}>DELETE</button>
                </div>

            </div>
        )
    }

}

export default UserSelectionBar;
