import React, {Component} from "react";
import BookingForm from "./BookingForm";



class Card extends Component {

  state = {
      openModal: false,
      confirmation:""
}

openModalEvent(){
    this.setState( {openModal: !this.state.openModal})
}
closeModalEvent(){
    this.setState({openModal:false})
}

// componentDidMount() {
//     firebase.auth().onAuthStateChanged(
//         user => {
//             if (user) {
//                 this.setState({ user: user.email })
//             }
//         }
//     )
// }

// onClickSaveToFirestore() {
//     const userfromLocal = localStorage.getItem("user");
//     console.log(userfromLocal);
//     var user = firebase.auth().currentUser;
//     console.log(user);
//     console.log(user.uid);

//     const docRef = firebase.firestore().collection("users").doc(user.uid.toString())
//         .collection("products").doc(this.props.docId.toString());

//     docRef.set({
//         id: this.props.docId,
//         title: this.props.title,
//         description: this.props.description,
//         price: this.props.price
//     })
// }

render() {

    return (
        <>
        {(this.state.confirmation) ?
        <div>Thanks for your booking. your booking time is {this.state.confirmation}</div>:
        <div className={"card"} style={{ width: "18rem" }}>
            <BookingForm 
            openModal={this.state.openModal}
            closeModal={this.closeModalEvent.bind(this)}
            Callback={ (time)=>{
                this.setState({ confirmation: time}) }}
            
            />
            <img src={this.props.image} className={"card-img-top"} alt={"img"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {this.props.title}</h5>
                <p className={"card-text"}>{this.props.description} </p>
                <span>{this.props.price} Kr</span><br />
                <button className={"btn btn-primary"}
                    onClick={this.openModalEvent.bind(this)}>Book</button>

            </div>
        </div>


            }
        </>

    )
}
}

export default Card;