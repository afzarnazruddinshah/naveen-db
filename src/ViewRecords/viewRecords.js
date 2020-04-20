import React, { Component, Fragment } from 'react';
import * as firebase from 'firebase';
import './viewRecords.css';
import { Link } from 'react-router-dom';
class ViewRecords extends Component {

    state ={
        records: [],
        recordsPresent: false
    }
    
    componentDidMount()
    {
        var db = firebase.firestore();
        var recArr =[];
        db.collection("installations").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                recArr.push(doc.data());
                this.setState(
                    ()=> { return { records: recArr, recordsPresent: true}},
                    ()=> { }
                )
            });
        });
    }
    render() { 
        const recordMapper = this.state.records.map(
            (item, index)=> <tr key={index}><td>{item.custName}</td><td>{item.plantInstalled}</td><td>{item.dateOfInstallment}</td><td>{item.nextServiceDate}</td><td>{item.custAddress}</td><td>{item.custPhone}</td></tr> 
        );
        const feed = this.state.recordsPresent === true ? recordMapper : <tr><td>Loading</td></tr>
        return ( 
            <Fragment>
                <p>Our Clients:</p>
                <table id="records-table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Plant Installed</td>
                            <td>Date of Installment</td>
                            <td>Next Service Date</td>
                            <td>Address</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {feed}
                    </tbody>
                </table>
                <p>
                <Link to="/dashboard">Go to Dashboard</Link>
                </p>
            </Fragment>
         );
    }
}
 
export default ViewRecords;