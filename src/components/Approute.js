import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Card from "./Card";
import Book from "./Book";
import Navbar from "./Navbar";
import App from "./App";
import "../style/_main.scss"
import Booking from "./Mybooking";
import Notfoundpage from "./Notfoundpage";




const Approute = ()=>{
    return(
        <div>
           
            <BrowserRouter>
            <Navbar/>
            <Switch>
                   <Route path="/home" component= {App} exact ></Route>
                   <Route path="/products" component= {Card} exact ></Route>
                   <Route path="/book" component= {Book} exact></Route>
                   <Route path="/booking" component= {Booking} exact></Route>
                   <Route component={Notfoundpage}></Route>
                   
            </Switch>
            </BrowserRouter>
        </div>


    )
}

export default Approute;