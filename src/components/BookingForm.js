import React, { Component } from 'react';
import Modal from "react-modal";

const customStyles = {
    content : {
      background: "gray",
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default class BookingForm extends Component {

    state={
        dataFromName:"",
        dataFromTime:"",
        dataFromMobile:"",
        dataFromDetails:""
    }

    onHandleChange = (e)=>{

        this.setState({[e.target.dataFromName]:e.target.value})

    }

    onSubmitForm(e){
        e.preventDefault()
        this.props.Callback(this.state.dataFromTime)
        console.log("save this in database")

    }

    render() {
        return (
            <>
            <div>
                <Modal
                isOpen={this.props.openModal}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel="Booking form">
                
                <h2>Booking  form</h2>
          <button onClick={this.props.closeModal}>close</button>
          <div>Write Booking Information</div>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                <input value={this.state.dataFromName} onChange={this.onHandleChange} type="text" name={"DataFromName"} ></input><br/>
                <input value={this.state.dataFromTime} onChange={this.onHandleChange} type="text" name={"DataFromTime"} ></input><br/>
                <input value={this.state.dataFromMobile} onChange={this.onHandleChange} type="text" name={"DataFromMobile"} ></input><br/>
                <textarea value={this.state.dataFromDetails} onChange={this.onHandleChange} name={"DataFromDetails"}></textarea><br/>
                <button onClick={this.props.closeModal}> Submit </button>
                </form>
                </Modal>
                
            </div>
            </>
        )
    }
}
