import React from "react";
import {Link} from "react-router-dom";


const Navbar = ()=>{



 

  
    return(
        
         
      <div className={"nav"}>
      <ul>
        <li> <Link to={"/home"}>Home </Link>         </li>
        <li> <Link to={"/products"}>Products</Link>  </li> 
        <li> <Link to={"/userpage"}>Login</Link>    </li>
        <li> <Link to={"/contact"}>Contact Us</Link>    </li>

     
        
        


      </ul>
    </div>
    


    )
}

export default Navbar;