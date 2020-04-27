import React, {Component} from "react";
import Card from "./Card";
import axios from "axios";
import Home from "./Home";



class App extends Component {

    state={
        products: []
    }

    onClickApi(){
        axios
         .get("http://localhost:1337/products").then(res=>{
             console.log(res.data);
             this.setState({products:res.data})
    })

}
componentDidMount(){

    axios
         .get("http://localhost:1337/products").then(res=>{
             console.log(res.data);
             this.setState({products:res.data})
    })
    
}


    render(){
    return(
        <div className="bgcolor">


        <div className="flex">
            
            
            
            {this.state.products.map((product)=>(

            <Card  
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={"http://localhost:1337"+product.image.formats.thumbnail.url}
             />
            )
            )}
        

        </div>
        </div>
       
    )
}
}

export default App;