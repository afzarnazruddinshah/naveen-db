import React, { Component, useState, useEffect } from "react";
// import firebase from 'firebase/app';
// import * as firebase from 'firebase';
import { firestore } from "firebase";
import { Link, Redirect, withRouter } from "react-router-dom";
import firebase from "firebase";
import "./addrecords.css";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

// class AddRecord extends Component
const AddRecord = (props) => {
  const classes = useStyles();
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [model, setModel] = useState(null);
  const [dateofinstallment, setDateOfInstallment] = useState(null);
  const [nextservicedate, setNextServiceDate] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    getCurrentUser();
    console.log("count");
  });

  const getCurrentUser = (e) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null || user === undefined) {
        props.history.push("/login");
      }
    });
  };

  //To handle Input change // Value typed in input fields being recorded to state variables
  const handleInputChange = (e) => {
    e.persist();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      case "model":
        setModel(e.target.value);
        break;
      case "dateofinstallment":
        setDateOfInstallment(e.target.value);
        break;
      case "nextservicedate":
        setNextServiceDate(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      default:
        break;
    }
  };

  //Checking whether all required fields are added
  const validateInput = () => {
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
  const addRecord = (e) => {
    e.preventDefault();
    if (validateInput()) {
      if (window.confirm("Are you sure you want to add this Record?")) {
        var db = firestore();
        db.collection("installations")
          .add({
            custName: name,
            custPhone: number,
            plantInstalled: model,
            dateOfInstallment: dateofinstallment,
            nextServiceDate: nextservicedate,
            custAddress: address,
          })
          .then(() => {
            alert("Record Added Successfully..!");
            props.history.push("/dashboard");
          })
          .catch(function (error) {
            console.error("Error Adding Document: ", error);
          });
      }
    }
    return false;
  };

  return (
    <div className="login-form">
      <p>
        <Link to="/dashboard">
          <Button color="secondary" variant="contained">
            <HomeIcon />
            &nbsp;{" Go To Dashboard"}
          </Button>
        </Link>
      </p>
      <form>
        <div>
          <div></div>&nbsp;
        </div>
        <h2>Add New Record</h2>
        <TextField
          name="name"
          type="text"
          onChange={handleInputChange}
          label="Customer Name"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          name="number"
          type="number"
          onChange={handleInputChange}
          label="Customer Phone Number"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          name="model"
          type="text"
          onChange={handleInputChange}
          label="RO Plant Model"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          className={classes.textField}
          name="dateofinstallment"
          type="date"
          onChange={handleInputChange}
          label="Date of Installment"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          className={classes.textField}
          name="nextservicedate"
          type="date"
          onChange={handleInputChange}
          label="Next Service Date"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          name="address"
          type="text"
          onChange={handleInputChange}
          label="Customer Address"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <div>
          <div></div>&nbsp;
        </div>
        <div>
          <div></div>&nbsp;
        </div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={addRecord}
        >
          Add New Record &nbsp; <SaveIcon />
        </Button>
      </form>
      <div>
        {" "}
        <div>&nbsp;</div>
      </div>
    </div>
  );
};
export default withRouter(AddRecord);