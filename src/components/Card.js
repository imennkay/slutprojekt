import React, {Component} from "react";
import firebase from "./FirebaseConfig"



class Card extends Component {

  onClickSaveToFirestore(){

    const docRef = firebase.firestore().collection("booking").doc(this.props.docId.toString());

    docRef.set({
      name: this.props.title,
      discription: this.props.description,
      price: this.props.price,
    })


  }
  render(){
    return(

        <div className={"card"} style={{width: "18rem"}}>
  <img src={this.props.image} className={"card-img-top"} alt={"pic"}/>
  <div className={"card-body"}>
    <h5 className={"card-title"}>{this.props.title}</h5>
    <p className={"card-text"}>{this.props.description}</p>
    <button className={"btn btn-primary"} onClick={this.onClickSaveToFirestore.bind(this)}>Book Now </button>
    <span>{this.props.price}</span>
  </div>
</div>
    )
  
}
}

export default Card;