import React, {Component} from "react";

class Form extends Component{

    state={dataFromName:" ",
    dataFromTime:" ",
    dataFromMobile:" "
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



    render(){
        return(
            <div> 
                <form onSubmit={this.onSubmitForm.bind(this)}>
                <input onChange={this.onChangeInputName.bind(this)} type="text" name={"fullname"} placeholder={"Full Name"}></input>
                <input onChange={this.onChangeInputTime.bind(this)} type="text" name={"booktime"} placeholder={"ex: 15:00"}></input>
                <input onChange={this.onChangeInputMobile.bind(this)} type="number" name={"mobile"} placeholder={"Mobile Number"}></input>
                


                    <button> Submit </button>
                </form>

            </div>
        )
    }
}

export default Form;