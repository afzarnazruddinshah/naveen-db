import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import * as firebase from 'firebase';
import { firestore } from "firebase";

class EditRecord extends Component {
  state = {
    name: "",
    number: "",
    model: "",
    address: "",
    dateofinstallment: "",
    nextservicedate: "",
  };

  componentDidMount() {
    this.getData();
  }

  handleInputChange = (e) => {
    e.persist();
    this.setState(() => {
      return { [e.target.name]: e.target.value };
    });
  };

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

  addRecord = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      if (window.confirm("Are you sure to edit?")) {
        var id = this.props.match.params.id;
        var db = firestore();
        db.collection("installations")
          .doc(String(id))
          .set({
            custName: this.state.name,
            custPhone: this.state.number,
            plantInstalled: this.state.model,
            dateOfInstallment: this.state.dateofinstallment,
            nextServiceDate: this.state.nextservicedate,
            custAddress: this.state.address,
          })
          .then(() => {
            alert("Record Edited Successfully..!");
            this.props.history.push("/dashboard");
            // this.setState(
            //     ()=> { return { redirect: true}},
            //     ()=> { }
            // );
          })
          .catch(function (error) {
            console.error("Error Adding Document: ", error);
          });
      }
    }
    return false;
  };

  getData = () => {
    var id = this.props.match.params.id;
    var db = firestore();
    db.collection("installations")
      .doc(String(id))
      .get()
      .then((doc) => {
        if (doc.exists) {
          var rec = doc.data();
          this.setState(
            () => {
              return {
                name: rec.custName,
                number: rec.custPhone,
                model: rec.plantInstalled,
                address: rec.custAddress,
                dateofinstallment: rec.dateOfInstallment,
                nextservicedate: rec.nextServiceDate,
              };
            },
            () => {}
          );
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <p>
          <Link to="/dashboard">
            <button id="home">{"< Go To Dashboard"}</button>
          </Link>
        </p>
        <div className="form">
          <form>
            <h2>Edit Record</h2>
            <p htmlFor="name">Customer Name:</p>
            <input
              type="text"
              value={this.state.name}
              placeholder="Customer Name"
              onChange={this.handleInputChange}
              name="name"
              required
            />
            <p htmlFor="number">Customer Contact Number:</p>
            <input
              type="number"
              value={this.state.number}
              placeholder="Customer Phone Number"
              onChange={this.handleInputChange}
              name="number"
              required
            />
            <p htmlFor="model">Plant Installed:</p>
            <input
              type="text"
              value={this.state.model}
              placeholder="Plant Model"
              onChange={this.handleInputChange}
              name="model"
              required
            />
            <p htmlFor="dateofinstallment">Date of Installment:</p>
            <input
              type="date"
              value={this.state.dateofinstallment}
              placeholder="Date of Installment"
              onChange={this.handleInputChange}
              name="dateofinstallment"
              required
            />
            <p htmlFor="nextservicedate">Next Service Date:</p>
            <input
              type="date"
              value={this.state.nextservicedate}
              placeholder="Next Service Date"
              onChange={this.handleInputChange}
              name="nextservicedate"
              required
            />
            <p htmlFor="address">Customer Address:</p>
            <input
              type="text"
              value={this.state.address}
              placeholder="Address"
              onChange={this.handleInputChange}
              name="address"
              required
            />
            <div></div>
            <button type="submit" onClick={this.addRecord}>
              {" "}
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(EditRecord);
