import React, {Component} from "react";
import Logout from "./Logout";


class AdminProfile extends Component{

    logOut(){

        localStorage.clear();
        window.location.reload(false);
    }
    render(){
        return(
            <div>
                <b>Welcome</b> {this.props.userData}

            </div>
        )
    }
}

export default AdminProfile;

