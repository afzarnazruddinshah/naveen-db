import React, { Component, Fragment } from 'react';
import * as firebase from 'firebase';
import './viewRecords.css';
import { Link } from 'react-router-dom';
class ViewRecords extends Component {

    state ={
        records: [],
        recordsPresent: false,
        searchbox: "",
        searchOn: false
    }
    
    componentDidMount()
    {
        this.getData();
    }

    getData = ()=> {
        var db = firebase.firestore();
        var recArr =[];
        db.collection("installations").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                recArr.push(doc.data());
            });
            this.setState(
                ()=> { return { records: recArr, recordsPresent: true}},
                ()=> { console.log(this.state.records);}
            )
        });
    }

    search = e => {
        this.setState(
            ()=> { return { searchOn: true}},
            ()=> {}
        );
        // console.log(e.target.value);
        // e.persist();
        // var records = this.state.records.filter((item) => { String(item).toLowerCase().search(
        //       e.target.value.toLowerCase()) !== -1;
        //   });
        var records = this.state.records.filter( item => { return String(item.custName).toLowerCase().search(String(this.state.searchbox).toLowerCase()) !== -1})
        this.setState(
            ()=> { return { searchRecords: records}},
            ()=> { }
        );
    }

    handleSearchBox = e => {
        e.persist();
        this.setState(
            ()=> { return { searchbox: e.target.value}},
            ()=> {}
        );
    }

    handleReset = e => {
        this.setState(
            ()=> { return { searchOn: false, searchbox: ""}}
        )
    }
    render() { 

        const dispRecords = this.state.searchOn === true ? this.state.searchRecords: this.state.records;
        const recordMapper = dispRecords.map(
            (item, index)=> <tr key={index}><td>{item.custName}</td><td>{item.plantInstalled}</td><td>{item.dateOfInstallment}</td><td>{item.nextServiceDate}</td><td>{item.custAddress}</td><td>{item.custPhone}</td></tr> 
        );
        const feed = this.state.recordsPresent === true ? recordMapper : <tr><td>Loading</td></tr>
        return ( 
            <Fragment>
                <p>
                <Link to="/dashboard"><button id="home">{"< Go To Dashboard"}</button></Link>
                </p>
                <h2>Viewing All Records</h2>
                <input id="" value={this.state.searchbox} placeholder="search" type="text" name="searchbox" onChange={this.handleSearchBox} />
                <button type="button" onClick={this.search}>Search</button>
                <button type="button" onClick={this.handleReset}> Reset</button>
                  

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
                
            </Fragment>
         );
    }
}
 
export default ViewRecords;