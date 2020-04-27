import React from "react";
//import Form from "./Form"



const Booking = ()=>{
    return(
        <div className="mybooking">
          
         <span>Name: {localStorage.getItem('valuefromForm1')}</span><br />
         
         <span>Time: {localStorage.getItem('valuefromForm2')}</span> <br />
         
         <span>Mobile: {localStorage.getItem('valuefromForm3')}</span><br />

         <span>Details: {localStorage.getItem('valuefromForm4')}</span><br />

         <button className="button">Book Now</button>
        
         
        </div>
    )
}

export default Booking;