import React, { Component } from "react";
import * as firebase from "firebase";
import { Link } from "react-router-dom";
import { getToday } from "../Utils/utilityFunctions";

class Notification extends Component {
  state = {
    recordsPresent: false,
    records: [],
  };

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    var today = getToday();
    var db = firebase.firestore();
    var recArr = [];
    db.collection("installations")
      .where("nextServiceDate", "==", today)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          recArr.push(doc.data());
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
      });
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
            </tr>
          </thead>
          <tbody>{feed2}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Notification;
