import React, {Component} from "react";
import firebase from "./FirebaseConfig"




class FirebaseTest extends Component{

    onClickFirebase(){

        const docRef= firebase.firestore().collection("booking").doc("info")

        docRef.get().then(booking=> {
            if(booking.exists) {
            console.log("document data:", booking.data())
        }
        else{
            console.log("error")
        }
    
    })

    docRef.set({
        item: "hi",
        price: 20
    })


}

    


    
        render(){
        return(
            <div>
                <button onClick={this.onClickFirebase.bind(this)}>Get firestore info</button>
            </div>
        )
    }

}

export default FirebaseTest;