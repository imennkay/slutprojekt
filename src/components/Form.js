import React, {Component} from "react";

class Form extends Component{

    state={dataFromName:" ",
    dataFromTime:" ",
    dataFromMobile:" ",
    dataFromDetails:""
};



    onSubmitForm(e){
        e.preventDefault();
       

this.setState({dataFromName:e.target.elements.fullname.value})
       // this.setState({dataFromTime:e.target.elements.booktime.value})
       // this.setState({dataFromMobile:e.target.elements.mobile.value})



 

    }
    
    componentDidUpdate(){
        
        localStorage.setItem('valuefromForm1', this.state.dataFromName);
        localStorage.setItem('valuefromForm2', this.state.dataFromTime);
        localStorage.setItem('valuefromForm3', this.state.dataFromMobile);
        localStorage.setItem('valuefromForm4', this.state.dataFromDetails);


    }
    onChangeInputName(e){


        this.setState({dataFromName:e.target.value})

        //localStorage.setItem('valuefromForm1', this.state.dataFromName);



    }

    onChangeInputTime(e){


      this.setState({dataFromTime:e.target.value})




    }
    onChangeInputMobile(e){


       this.setState({dataFromMobile:e.target.value})




    }

    onChangeInputDetails(e){


        this.setState({dataFromDetails:e.target.value})
 
 
 
 
     }
 



    render(){
        return(
            <div className="formular">
                <form onSubmit={this.onSubmitForm.bind(this)}>
                <input onChange={this.onChangeInputName.bind(this)} type="text" name={"fullname"} placeholder={"Write your name"}></input><br/>
                <input onChange={this.onChangeInputTime.bind(this)} type="text" name={"booktime"} placeholder={"Enter your item name or item number"}></input><br/>
                <input onChange={this.onChangeInputMobile.bind(this)} type="number" name={"mobile"} placeholder={"Your phone number"}></input><br/>
                <textarea onChange={this.onChangeInputDetails.bind(this)} name={"textarea1"} placeholder="How can we help you?"></textarea><br/>
                


                    <button> Submit </button>
                </form>

            </div>
        )
    }
}

export default Form;