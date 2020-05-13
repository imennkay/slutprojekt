import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
import firebase from "../FirebaseConfig";


class UserPage extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        
    }

    render() {

        const loggedIn = this.state.user || localStorage.getItem("user");
        return (
            <div>
                {!loggedIn ?
                    <UserLogin userCredential={(user) => {
                        this.setState({ user: user.email })
                        localStorage.setItem("user", this.state.user)
                    }
                    } /> :
                    <UserProfile userData={this.state.user} />
                }
            </div>
        )
    }
}

export default UserPage; 