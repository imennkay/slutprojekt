import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class MinBooking extends Component {

  state = {
    products: null,
    user: null || localStorage.getItem("user"),
    
    
    
  }

  componentDidMount() {
    //get username

  
    var user = firebase.auth().currentUser;
    console.log(user);
    console.log(user.displayName);
    console.log(user.email)

    this.setState({
      username: user.displayName,
      email: user.email
    });

    //get products
   const docRef = firebase.firestore().collection("users").doc(user.uid.toString())
      .collection("products");

    docRef.get().then(snapshot => {
      const products = []
      snapshot.forEach(doc => {
        const data = doc.data()
        products.push(data)
      })
      this.setState({ products: products })
    })
  }

  render() {
    const loggedIn = this.state.user || localStorage.getItem("user");
    console.log(loggedIn)
    return (
      <div>  {
        this.state.products &&
        this.state.products.map(product => {
          return (
            <div key={product.id}>
               <img src={this.props.image} className={"card-img-top"} alt={"img"} />
              <h3>{product.title}</h3>
              <h4 id="bookingsTableDescription">{product.description}</h4>
              <h5 id="bookingsTablePrice">{product.price}</h5>
            </div>
          )
        })
      } </div>

    )

  }
}

export default MinBooking;