import React from "react";
import {Link} from "react-router-dom";
import Logout from "./Logout";


const Navbar = ()=>{



 

  
    return(
        
         
      <div className={"nav"}>
      <ul>
        <li> <Link to={"/home"}>Home </Link>         </li>
        <li> <Link to={"/products"}>Products</Link>  </li> 
        <li> <Link to={"/book"}>Book Now</Link>      </li>
        <li> <Link to={"/booking"}>My Booking</Link> </li>
        <li> <Link to={"/adminpage"}>Admin</Link>    </li>
        <li><Logout/></li>
        
        


      </ul>
    </div>
    


    )
}

export default Navbar;