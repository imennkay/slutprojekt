import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import AdminLogin from "./AdminLogin";
import Adminform from "./Adminform";
import Logout from "./Logout";
import DeletePost from "./DeletePost";

class AdminSida extends Component {
  state = {
    user: null || localStorage.getItem("user"),
    jwt:null
  };
  render() {


    const loggedIn = this.state.user || localStorage.getItem("jwt");
    return (
      <div>
        {!loggedIn ? (
          <AdminLogin
            userCredential={(e,jwt) => {
                 this.setState({ user: e.username, jwt:jwt })
                localStorage.setItem("jwt", this.state.jwt)
                
                
                }
                
            }
            
          />
          
        ) : (
          <Adminform userData={this.state.user}  />

          
         
          
        )}


        

       
         
      </div>
    );
  }
}

export default AdminSida;
