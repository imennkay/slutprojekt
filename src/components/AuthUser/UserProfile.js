import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import { Link } from "react-router-dom";



class UserProfile extends Component {

    state = {
        email: "",
        username: ""
    }

    componentDidMount() {
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);
        console.log(user.displayName);
        console.log(user.email)

        this.setState({
            username: user.displayName,
            email: user.email
        });
    }

    logOut() {

        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
    }


    deleteAccount() {
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);

        if (user) {
            user.delete().then(function () {
                // User deleted.
            }).catch(function (error) {
                // An error happened.
            });
        }

    }

    resetPassword(e) {
        var auth = firebase.auth();
        var emailAddress = e.target.elements.resetEmail.value;

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
            console.log("email sent")
        })
        e.preventDefault();
    }



    render() {
        return (
            <div>
                <h1> Welcome <span id="loginname"> {this.props.userData}</span></h1>
                <br />
                <button id="btnedit" onClick={this.deleteAccount.bind(this)}>Delete Account</button>
                <button id="btnedit" onClick={this.logOut.bind(this)}> Logout</button>
                <button id="btnedit"> <Link to={"/minbooking"}>My Booking</Link> </button>
                <Link
                    to={{
                        pathname: "/userPage/updateProfile",
                        params: {
                            username: this.state.username,
                            email: this.state.email
                        }
                    }}
                >
                    <button id="btnedit">Edit Profile</button>
                </Link>
            </div>
        )
    }
}


export default UserProfile;