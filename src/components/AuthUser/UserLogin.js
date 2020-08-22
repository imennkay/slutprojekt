import React, {Component} from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../FirebaseConfig";
import UserProfile from "./UserProfile";


class UserLogin extends Component{

    state={
        condition:true,
        user:"",
        email: ""
    }

    

    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/userprofile',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID

        ]
      };

      componentDidMount(){
          firebase.auth().onAuthStateChanged((user)=>{
              this.setState({user:user.email})

              console.log(user)

          })
      }

      component

    
    

    onClickRegister(){
        this.setState({condition:false})
       
    }

    onClickLogin(){
        this.setState({condition:true})
     }

     onSubmitLogin(e){
        e.preventDefault();


        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;


        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=> this.props.userCredential(res.user.email))
        
      
    }
    

    

    onSubmitRegister(e){
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const displayName = e.target.elements.username.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res)=>{

            res.user.sendEmailVerification()
             this.props.userCredential(res.user.email)
             this.props.showDisplayName(displayName)
        })
          
      
    }

    resetPassword(e){
        e.preventDefault()
        var auth = firebase.auth();
        var emailAddress = e.target.elements.resetEmail.value;

        auth.sendPasswordResetEmail(emailAddress).then(function () {
          // Email sent.

          console.log("email sent")
        });
    }

    render(){ 

        
        
        return(
            <div>
                Login Form:

                {this.state.condition && <form onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email" name="email" placeholder={"Enter your Email"}/>
                    <input type="password"  name="password" placeholder={"Enter your Password"}/><br/>
                    <button>Login</button>

                    <form onSubmit={this.resetPassword.bind(this)}>

<input type="email" name="resetEmail" placeholder="Write your email"></input>

<button>reset password</button>

</form>
                </form>}


                

                
                {!this.state.condition &&   <form onSubmit={this.onSubmitRegister.bind(this)}>
                    <input type="text" name="username" placeholder={"Type your Name"}/>
                    <input type="email" name="email" placeholder={"Type your Email"}/>
                    <input type="password" name="password" placeholder={"Type your Password"}/><br/>
                    <button>Register</button>

                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                </form>  }

               {this.state.user? <UserProfile userData={this.state.user} /> : <div>There is no user </div>}
               





                
                

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button onClick={this.onClickLogin.bind(this)}>Login</button>
<button  onClick={this.onClickRegister.bind(this)}> Register</button>   


            </div>
        )
    }
}

export default UserLogin;

