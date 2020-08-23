import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import * as firebase from 'firebase';
import { firestore } from "firebase";
import firebase from "firebase";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
class EditRecord extends Component {
  state = {
    name: "",
    number: "",
    product: "",
    dateofinstallment: "",
    nextservicedate: "",
    natureOfWork: "",
    brandModel: "",
    amountReceived: "",
    recommendedBy: "",
  };

  componentDidMount() {
    this.getCurrentUser();
    this.getData();
  }

  getCurrentUser = (e) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null || user === undefined) {
        this.props.history.push("/login");
      }
    });
  };
  //Saving values from input fields
  handleInputChange = (e) => {
    e.persist();
    this.setState(() => {
      return { [e.target.name]: e.target.value };
    });
  };
  // Checking all required fields are filled
  validateInput = () => {
    const {
      name,
      number,
      product,
      dateofinstallment,
      nextservicedate,
      natureOfWork,
      brandModel,
      amountReceived,
      recommendedBy
    } = this.state;
    if (
      name !== null &&
      number !== null &&
      product !== null &&
      dateofinstallment !== null &&
      nextservicedate !== null &&
      natureOfWork !== null &&
      brandModel !== null &&
      amountReceived !== null &
      recommendedBy !== null
    ) {
      return true;
    }
    return false;
  };

  //Add the edited record to the Database
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
            product: this.state.product,
            dateOfInstallment: this.state.dateofinstallment,
            nextServiceDate: this.state.nextservicedate,
            natureOfWork: this.state.natureOfWork,
            brandModel: this.state.brandModel,
            amountReceived: this.state.amountReceived,
            recommendedBy: this.state.recommendedBy
          })
          .then(() => {
            alert("Record Edited Successfully..!");
            this.props.history.push("/dashboard");
          })
          .catch(function (error) {
            console.error("Error Adding Document: ", error);
          });
      }
    }
    return false;
  };

  //Get record data based on Id from Firestore
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
                product: rec.product,
                dateofinstallment: rec.dateOfInstallment,
                nextservicedate: rec.nextServiceDate,
                natureOfWork: rec.natureOfWork,
                brandModel: rec.brandModel,
                amountReceived: rec.amountReceived,
                recommendedBy: rec.recommendedBy
              };
            },
            () => {}
          );
        } else {
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
            <p htmlFor="name">Customer Name, Addr:</p>
            <input
              type="text"
              value={this.state.name}
              placeholder="Customer Name, Addr"
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
            <p htmlFor="product">Product:</p>
            {/* <FormControl className={selectClasses.formControl}> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="product"
              value={this.state.product}
              onChange={this.handleInputChange}
            >
              <MenuItem value={'select'} disabled>Select a Product</MenuItem>
              <MenuItem value={'Air Conditioner'}>Air Conditioner</MenuItem>
              <MenuItem value={'RO'}>RO</MenuItem>
              <MenuItem value={'Washing Machine'}>Washing Machine</MenuItem>
              <MenuItem value={'Refrigerator'}>Refrigerator</MenuItem>
              <MenuItem value={'TV'}>TV</MenuItem>
              <MenuItem value={'Microwave Oven'}>Microwave Oven</MenuItem>
              <MenuItem value={'Others'}>Others</MenuItem>
            </Select>
            {/* </FormControl> */}
            <p htmlFor="dateofinstallment">Date:</p>
            <input
              type="date"
              value={this.state.dateofinstallment}
              placeholder="Date of Installment"
              onChange={this.handleInputChange}
              name="dateofinstallment"
              required
            />
            <p htmlFor="nextservicedate">Next Due Date:</p>
            <input
              type="date"
              value={this.state.nextservicedate}
              placeholder="Next Service Date"
              onChange={this.handleInputChange}
              name="nextservicedate"
            />
            <p htmlFor="natureOfWork">Nature Of Work:</p>
            <input
              type="text"
              value={this.state.natureOfWork}
              placeholder="Nature Of Work"
              onChange={this.handleInputChange}
              name="natureOfWork"
              required
            />
            <p htmlFor="brandModel">Brand and Model:</p>
            <input
              type="text"
              value={this.state.brandModel}
              placeholder="Brand and Model"
              onChange={this.handleInputChange}
              name="brandModel"
              required
            />
            <p htmlFor="amountReceived">Amount Received:</p>
            <input
              type="text"
              value={this.state.amountReceived}
              placeholder="Amount Received"
              onChange={this.handleInputChange}
              name="amountReceived"
              required
            />
            <p htmlFor="recommendedBy">Recommended By:</p>
            <input
              type="text"
              value={this.state.recommendedBy}
              placeholder="Recommended By"
              onChange={this.handleInputChange}
              name="recommendedBy"
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