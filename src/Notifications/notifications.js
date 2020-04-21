import React, { Component } from "react";
// import * as firebase from "firebase";
import { firestore } from "firebase";
import { Link } from "react-router-dom";
import { getToday } from "../Utils/utilityFunctions";
class Notification extends Component {
  state = {
    recordsPresent: false,
    records: [],
  };

  componentDidMount() {
    this.getData();
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
          const idObj = { id: doc.id };
          const obj = { ...idObj, ...doc.data() };
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
          () => {}
        );
      })
      .catch((err) => {
        console.log(err);
      });
    db.collection("installations")
      .where("status", "==", "pending")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const idObj = { id: doc.id };
          const obj = { ...idObj, ...doc.data() };
          var a1 = recArr.find((item) => item.id === idObj.id);
          if (a1 === null || a1 === undefined) {
            recArr.push(obj);
          }
        });

        this.setState(
          () => {
            return {
              records: recArr,
              recordsPresent: true,
              count: recArr.length,
            };
          },
          () => {}
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateStatus = (id, value) => {
    var db = firestore();
    if (window.confirm("Are you sure to Change?")) {
      db.collection("installations")
        .doc(String(id))
        .set(
          {
            status: value,
          },
          { merge: true }
        )
        .then(() => {
          var records = this.state.records;
          var updatedRecord = this.state.records.find(
            (record) => record.id === id
          );
          records.pop(updatedRecord);
          updatedRecord.status = value;
          records.push(updatedRecord);
          this.setState(() => {
            return {
              records: records,
              recordsPresent: true,
              count: records.length,
            };
          });
        })
        .catch(function (error) {
          console.error("Error Adding Document: ", error);
        });
    }
  };
  render() {
    const recordMapper = this.state.records.map((item, index) => (
      <tr key={index}>
        <td>{item.custName}</td>
        <td>{item.plantInstalled}</td>
        <td>{item.dateOfInstallment}</td>
        <td>{item.nextServiceDate}</td>
        <td>{item.custAddress}</td>
        <td>{item.custPhone}</td>
        <td>
          <select
            value={item.status}
            onChange={(e) => this.updateStatus(item.id, e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </td>
      </tr>
    ));
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
