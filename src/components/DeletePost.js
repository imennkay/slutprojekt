import React, { Component } from "react";
import axios from "axios";

class DeletePost extends Component {
  state = {
    DelPost: " ",
  };


  async onSubmitToDelete(e) {
    e.preventDefault();

    const res = await axios.delete(`http://localhost:1337/products/${e.target.elements.del.value}`
      
      );

     console.log(res);

   
    
  }

  render() {
    return (
      <div>
 
        <h4>Delete Product</h4>
        <form onSubmit= {this.onSubmitToDelete.bind(this)}>

          <input type="number" placeholder="type product id to delete" name="del"/>
        <button>Delete</button>
        <br />

        </form>
      </div>
    );
  }
}

export default DeletePost;
