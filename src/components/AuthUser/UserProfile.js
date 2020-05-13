import React, {Component} from "react";
import firebase from "../FirebaseConfig";


class UserProfile extends Component{

    logOut(){

      firebase.auth().signOut();
      localStorage.clear();
    }
    render(){
        return(
            <div>
                <b>Welcome</b> {this.props.userData}

                <a href="/userpage" onClick= {this.logOut.bind(this)}>Sign out</a> 

            </div>
        )
    }
}

export default UserProfile;

