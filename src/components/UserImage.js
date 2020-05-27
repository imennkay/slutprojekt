import React, {Component} from "react";
import UserProfile from "./AuthUser/UserProfile";
import axios from "axios";
//import Home from "./Home";



class UserImage extends Component {

    state={
        users: []
    }

    
async componentDidMount(){

    const res = await axios.get("http://localhost:1337/users")
             console.log(res.data);
             this.setState({users:res.data})
    
    
}


    render(){
    return(
        
     <div>
            
            
            {this.state.users.map((user)=>(

            <UserProfile
            key={user.id}
            docId={user.id}
            username={user.username}
            email={user.email}
            image={user.image.url}
             />
            )
            )}
            
        

        </div>
       
    )
}
}

export default UserImage;