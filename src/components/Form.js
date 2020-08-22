import React, {Component} from "react";

class Form extends Component{

    constructor(props) {
    super(props);
    

    this.state={
    dataFromName:"Write your name",
    dataFromTime:"ex: 10:00",
    dataFromMobile:"07x-xxxx-xx",
    dataFromDetails:""
};

}



    onSubmitForm(e){
        e.preventDefault()
       

/* this.setState({dataFromName:e.target.elements.fullname.value}) */
       // this.setState({dataFromTime:e.target.elements.booktime.value})
       // this.setState({dataFromMobile:e.target.elements.mobile.value})



 

    }
    
    componentDidUpdate(){
        
        localStorage.setItem('valuefromForm1', this.state.dataFromName);
        localStorage.setItem('valuefromForm2', this.state.dataFromTime);
        localStorage.setItem('valuefromForm3', this.state.dataFromMobile);
        localStorage.setItem('valuefromForm4', this.state.dataFromDetails);


    }
    onHandleChange = (e)=>{


        this.setState({[e.target.dataFromName]:e.target.value})

        //localStorage.setItem('valuefromForm1', this.state.dataFromName);



    }

    
 



    render(){
        return(
            <div className="formular">
                <form onSubmit={this.onSubmitForm.bind(this)}>
                <input value={this.state.dataFromName} onChange={this.onHandleChange} type="text" name={"fullname"} placeholder={"Write your name"}></input><br/>
                <input value={this.state.dataFromTime} onChange={this.onHandleChange} type="text" name={"booktime"} placeholder={"Enter your item name or item number"}></input><br/>
                <input value={this.state.dataFromMobile} onChange={this.onHandleChange} type="text" name={"mobile"} ></input><br/>
                <textarea value={this.state.dataFromDetails} onChange={this.onHandleChange} name={"textarea1"} placeholder="How can we help you?"></textarea><br/>
                


                    <button> Submit </button>
                </form>

                {this.state.dataFromName}
                {this.state.dataFromTime}
                {this.state.dataFromMobile}

            </div>
        )
    }
}

export default Form;