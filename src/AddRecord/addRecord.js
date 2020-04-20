import React, { Component } from 'react';
// import firebase from 'firebase/app';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

class AddRecord extends Component {

    constructor(props)
    {
        super(props);
    }

    handleInputChange = e => {
        e.persist();
        this.setState(
            ()=> { return { [e.target.name] : e.target.value }}
        );
    }
    
    addRecord = e => {
        e.preventDefault();
        var db = firebase.firestore();
        db.collection("installations").add({
            custName: this.state.name,
            custPhone: this.state.number,
            plantInstalled: this.state.model,
            dateOfInstallment: this.state.dateofinstallment,
            nextServiceDate: this.state.nextservicedate,
            custAddress: this.state.address
        })
        .then(function(docRef) {
            alert("Record Added Successfully!");
        })
        .catch(function(error) {
            console.error("Error Adding Document: ", error);
        });
    }
    render() { 
        return ( 
            <React.Fragment>
                <input type="text" placeholder="Customer Name" onChange={this.handleInputChange} name="name" />
                <input type="number" placeholder="Customer Phone Number"  onChange={this.handleInputChange} name="number" />
                <input type="text"  placeholder="Plant Model" onChange={this.handleInputChange} name="model" />
                <input type="date" placeholder="Date of Installment" onChange={this.handleInputChange} name="dateofinstallment" />
                <input type="date" placeholder="Next Service Date" onChange={this.handleInputChange} name="nextservicedate" />
                <input type="text" placeholder="Address" onChange={this.handleInputChange} name="address" />
                <button type="button" onClick={this.addRecord}> Add New Record</button>
                <p>
                <Link to="/dashboard">Go to Dashboard</Link>
                </p>
            </React.Fragment>
         );
    }
}
 
export default AddRecord;