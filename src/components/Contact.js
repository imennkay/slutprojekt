import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class Contact extends Component{

    onSubmitForm(e){
        e.preventDefault();
        const docRef= firebase.firestore().collection("contactformdata").doc("userId")

       
    docRef.set({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        message: e.target.elements.textarea.value

    })


    }


    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" name="name"/>
                    <input type="email" name="email"/>
                    <textarea name="textarea" rows="4" cols="50">
 you will learn how to make a website. We offer free tutorials in all web development technologies.
</textarea> <br/>
                    <button>Contact Us</button>


                </form>

            </div>
        )
    }
}


export default Contact;

