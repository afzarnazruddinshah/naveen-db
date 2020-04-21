import React, { Component } from "react";
// import firebase from 'firebase/app';
// import * as firebase from 'firebase';
import { firestore } from "firebase";
import { Link, Redirect, withRouter } from "react-router-dom";
import firebase from "firebase";
import "./addrecords.css";
class AddRecord extends Component {
  state = {
    redirect: false,
    dashboardStmt: "< Go To Dashboard",
    name: null,
    number: null,
    model: null,
    dateofinstallment: null,
    nextservicedate: null,
    address: null,
  };

  componentDidMount() {
    this.getCurrentUser(); //To verify Login
  }

  getCurrentUser = (e) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null || user === undefined) {
        this.props.history.push("/login");
      }
    });
  };

  //To handle Input change // Value typed in input fields being recorded to state variables
  handleInputChange = (e) => {
    e.persist();
    this.setState(() => {
      return { [e.target.name]: e.target.value };
    });
  };

  //Checking whether all required fields are added
  validateInput = () => {
    const {
      name,
      number,
      model,
      dateofinstallment,
      nextservicedate,
      address,
    } = this.state;
    if (
      name !== null &&
      number !== null &&
      model !== null &&
      dateofinstallment !== null &&
      nextservicedate !== null &&
      address !== null
    ) {
      return true;
    }
    return false;
  };

  //Add to database
  addRecord = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      if (window.confirm("Are you sure you want to add this Record?")) {
        var db = firestore();
        db.collection("installations")
          .add({
            custName: this.state.name,
            custPhone: this.state.number,
            plantInstalled: this.state.model,
            dateOfInstallment: this.state.dateofinstallment,
            nextServiceDate: this.state.nextservicedate,
            custAddress: this.state.address,
          })
          .then(() => {
            alert("Record Added Successfully..!");
            this.setState(
              () => {
                return { redirect: true };
              },
              () => {}
            );
          })
          .catch(function (error) {
            console.error("Error Adding Document: ", error);
          });
      }
    }
    return false;
  };
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="form">
        <p>
          <Link to="/dashboard">
            <button id="home">{this.state.dashboardStmt}</button>
          </Link>
        </p>
        <form>
          <h2>Add New Record</h2>
          <p htmlFor="name">Customer Name:</p>
          <input
            type="text"
            placeholder="Customer Name"
            onChange={this.handleInputChange}
            name="name"
            required
          />
          <p htmlFor="number">Customer Contact Number:</p>
          <input
            type="number"
            placeholder="Customer Phone Number"
            onChange={this.handleInputChange}
            name="number"
            required
          />
          <p htmlFor="model">Plant Installed:</p>
          <input
            type="text"
            placeholder="Plant Model"
            onChange={this.handleInputChange}
            name="model"
            required
          />
          <p htmlFor="dateofinstallment">Date of Installment:</p>
          <input
            type="date"
            placeholder="Date of Installment"
            onChange={this.handleInputChange}
            name="dateofinstallment"
            required
          />
          <p htmlFor="nextservicedate">Next Service Date:</p>
          <input
            type="date"
            placeholder="Next Service Date"
            onChange={this.handleInputChange}
            name="nextservicedate"
            required
          />
          <p htmlFor="address">Customer Address:</p>
          <input
            type="text"
            placeholder="Address"
            onChange={this.handleInputChange}
            name="address"
            required
          />
          <div></div>
          <button type="submit" onClick={this.addRecord}>
            {" "}
            Add New Record
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(AddRecord);