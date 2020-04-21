import React, { Component } from "react";
// import * as firebase from "firebase";
import  {firestore} from 'firebase';
import { Link } from "react-router-dom";
import { getToday } from "../Utils/utilityFunctions";
import { FaEdit, FaTrash } from "react-icons/fa";
class Notification extends Component {
  state = {
    recordsPresent: false,
    records: [],
  };

  componentDidMount() {
    this.getData();
  }

  editRecord = (id) => {
    this.props.history.push('/editrecord/'+id);
  }

  deleteRecord = (id) => {
    if(window.confirm("Are you sure you want to delete?"))
    {
        var db = firestore();
        //Delete From DB
        db.collection("installations").doc(String(id)).delete().then(()=> {
            alert("Record Deleted Successfully");
           var updatedRecords = this.state.records.filter( item => item.id !== id);
           this.setState(
               ()=> { return { records: updatedRecords}},
               ()=> {}
           );
           
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        
        //Delete from records Array
       

    }
  }

  getData = () => {
    var today = getToday();
    var db = firestore();
    var recArr = [];
    db.collection("installations")
      .where("nextServiceDate", "==", today)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const idObj = { id: doc.id};
          const obj = { ...idObj, ...doc.data()};
          recArr.push(obj);
        });
        this.setState(
          () => {
            return {
              records: recArr,
              recordsPresent: true,
              count: recArr.length,
            };
          },
          () => { }
        );
      })
      .catch( (err)=> {
        console.log(err);
      });
    db.collection("installations")
    .where("status", "==", "pending")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const idObj = { id: doc.id};
        const obj = { ...idObj, ...doc.data()};
        recArr.push(obj);
      });
      // console.log(recArr);
      // var rec = recArr.concat(this.state.records);

      this.setState(
        () => {
          return {
            records: recArr,
            recordsPresent: true,
            count: recArr.length,
          };
        },
        () => { }
      );
    })
    .catch( (err)=> {
      console.log(err);
    });
  }

  updateStatus = (id, value) => {
    console.log(id, value);
    var db = firestore();
    if(window.confirm("Are you sure to Change?"))
    {
        var db = firestore();
        db.collection("installations").doc(String(id)).set({
            status: value,
        }, { merge: true })
        .then(()=> {
            window.location.reload();
        })
        .catch(function(error) {
            console.error("Error Adding Document: ", error);
        });
    }
  }
  render() {
    const recordMapper = this.state.records.map((item, index) => 
      <tr key={index}>
        <td>{item.custName}</td>
        <td>{item.plantInstalled}</td>
        <td>{item.dateOfInstallment}</td>
        <td>{item.nextServiceDate}</td>
        <td>{item.custAddress}</td>
        <td>{item.custPhone}</td>
        <td>
          <select value={item.status} onChange={(e)=> this.updateStatus(item.id, e.target.value)}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </td>
        
      </tr>
    );
    const feed =
      this.state.recordsPresent === true ? (
        recordMapper
      ) : (
        <tr>
          <td>Loading</td>
        </tr>
      );
    const feed2 =
      this.state.count === 0 ? (
        <tr>
          <td>No Notification</td>
        </tr>
      ) : (
        feed
      );

    return (
      <React.Fragment>
        <p>
          <Link to="/dashboard">
            <button id="home">{"< Go To Dashboard"}</button>
          </Link>
        </p>
        <p>Notifications ({this.state.count})</p>
        <table id="records-table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Plant Installed</td>
              <td>Date of Installment</td>
              <td>Next Service Date</td>
              <td>Address</td>
              <td>Phone</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>{feed2}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Notification;
