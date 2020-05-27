import React, {Component} from "react";
import axios from "axios";
import DeletePost from "./DeletePost";



class Adminform extends Component{

    state={
        
        image:" "
    }

    eventChange(e){
        console.log(e.target.files[0])
        this.setState({image:e.target.files[0]})

    }


  async onSubmitToApi(e){
        e.preventDefault();

       // this.setState({title: e.target.elements.title.value})

       const res = await axios.post("http://localhost:1337/products",{
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value,
            image: "text"
        })
      

        console.log(res) 

        const data=  new FormData();

        data.append("files", this.state.image)
        data.append("ref", "products")
        data.append("refId", res.data.id)
        data.append("field", "image")


        const resPic = await axios.post("http://localhost:1337/upload",data) 

      console.log(resPic)

    }
 
    render(){
        return(
            <div>
                <h5>Welcome </h5>{this.props.userData}
                <h4>Add Product</h4>
                <form onSubmit={this.onSubmitToApi.bind(this)}>
                    <input type="text" name="title" placeholder="Product Title" />
                    <input type="text" name="description" placeholder="Product Description" />
                    <input type="number" name="price" placeholder="Product Price"/>
                    <br/><h5>Upload an image</h5>
                    <input type="file" name="file" onChange={this.eventChange.bind(this)}/><br/>

               
                    <button>Save</button><br/>

                </form>

                <DeletePost/>  

            </div>
        )
    }
}

export default Adminform;