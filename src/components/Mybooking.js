import React from "react";
//import Form from "./Form"



const Booking = ()=>{
    return(
        <div>
          <center>
         <span>{localStorage.getItem('valuefromForm1')}</span><br />
         
         <span> {localStorage.getItem('valuefromForm2')}</span> <br />
         
         <span> {localStorage.getItem('valuefromForm3')}</span><br />
         </center>
         
        </div>
    )
}

export default Booking;