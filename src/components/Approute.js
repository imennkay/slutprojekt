import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
//import Card from "./Card";
import Book from "./Book";
import Navbar from "./Navbar";
import App from "./App";
import "../style/_main.scss"
import Notfoundpage from "./Notfoundpage";
import Home from "./Home";
import Adminform from "./Adminform";
import AdminLogin from "./AdminLogin";
import AdminSida from "./AdminSida";
import Logout from "./Logout";
import FirebaseTest from "./FirebaseTest";
import UserLogin from "./AuthUser/UserLogin";
import UserPage from "./AuthUser/UserPage";
import UserProfile from "./AuthUser/UserProfile";
import Contact from "./Contact";
import MinBooking from "./MinBooking";
import UserUpdateProfile from "./AuthUser/UserUpdateProfile";
import Card from "./Card";




const Approute = ()=>{
    return(
        <div>
           
            <BrowserRouter>
            <Navbar/>
            <Switch>
                   <Route path="/home" component= {Home} exact ></Route>
                   <Route path="/products" component= {App} exact ></Route>
                   <Route path="/book" component= {Book} exact></Route>
                   <Route path="/admin" exact component={Adminform}></Route>
                   <Route path="/testuser" exact component={UserLogin}></Route>
                   <Route path="/adminlogin" exact component={AdminLogin}></Route>
                   <Route path="/adminpage" exact component={AdminSida}></Route>
                   <Route path="/Logout" exact component={Logout}></Route>
                   <Route path="/userprofile" exact component={UserProfile}></Route>
                   <Route path="/firebasetest" exact component={FirebaseTest}></Route>
                   <Route path="/userpage" exact component={UserPage}></Route>
                   <Route path="/contact" exact component={Contact}></Route>
                   <Route path="/minbooking" exact component={MinBooking}></Route>
                   <Route path="/card" exact component={Card}></Route>
                   <Route path="/userPage/updateProfile" exact component={UserUpdateProfile}></Route>





                   <Route component={Notfoundpage}></Route>
                   
            </Switch>
            </BrowserRouter>
        </div>


    )
}

export default Approute;