import React, { useState, useEffect } from "react";
// import firebase from 'firebase/app';
// import * as firebase from 'firebase';
import { firestore } from "firebase";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";
import "./addrecords.css";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


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
  const selectClasses = useStyles();
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [dateofinstallment, setDateOfInstallment] = useState(null);
  const [nextservicedate, setNextServiceDate] = useState(null);
  const [natureOfWork, setNatureOfWork] = useState(null);
  const [product, setProduct] = React.useState('select');
  const [brandModel, setBrandModel] = React.useState(null);
  const [amountReceived, setAmountReceived] = React.useState(null);
  const [recommendedBy, setRecommendedBy] = React.useState(null);
  const [recommended, setRecommended] = React.useState('select');
  const [userId, setUserId] = React.useState('');
  useEffect(() => {
    getCurrentUser();
  });

  const getCurrentUser = (e) => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserId(user.uid);
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
      case "dateofinstallment":
        setDateOfInstallment(e.target.value);
        break;
      case "nextservicedate":
        setNextServiceDate(e.target.value);
        break;
      case "natureofwork":
        setNatureOfWork(e.target.value);
        break;
      case "product":
        setProduct(e.target.value);
        break;
      case "brandmodel":
        setBrandModel(e.target.value);
        break;
      case "amountreceived":
        setAmountReceived(e.target.value);
        break;
      case "recommendedby":
        setRecommendedBy(e.target.value);
        break;
      case "recommended":
        setRecommended(e.target.value);
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
      dateofinstallment !== null &&
      natureOfWork !== null &&
      brandModel !== null &&
      amountReceived !== null &&
      recommendedBy !== null &&
      recommended !== null
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
            product: product,
            dateOfInstallment: dateofinstallment,
            nextServiceDate: nextservicedate,
            natureOfWork: natureOfWork,
            brandModel: brandModel,
            amountReceived:amountReceived,
            recommendedBy:recommendedBy,
            recommended:recommended,
            uid: userId
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
          label="Customer Name, Addr"
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
        <FormControl className={selectClasses.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="product"
          value={product}
          onChange={handleInputChange}
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
        </FormControl>
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          className={classes.textField}
          name="dateofinstallment"
          type="date"
          onChange={handleInputChange}
          label="Date"
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
          label="Next Due Date"
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          name="natureofwork"
          type="text"
          onChange={handleInputChange}
          label="Nature of Work"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          name="brandmodel"
          type="text"
          onChange={handleInputChange}
          label="Brand and Model"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          name="amountreceived"
          type="text"
          onChange={handleInputChange}
          label="Amount Received"
          required={true}
        />
        <div>
          <div></div>&nbsp;
        </div>
        <FormControl className={selectClasses.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="recommended"
          value={recommended}
          onChange={handleInputChange}
        >
          <MenuItem value={'select'} disabled>Recommended By</MenuItem>
          <MenuItem value={'Relatives'}>Relatives</MenuItem>
          <MenuItem value={'Friends'}>Friends</MenuItem>
          <MenuItem value={'Dealers'}>Dealers</MenuItem>
          <MenuItem value={'Neighbours'}>Neighbours</MenuItem>
          <MenuItem value={'Customers'}>Customers</MenuItem>
          <MenuItem value={'JustDial'}>JustDial</MenuItem>
          <MenuItem value={'Google'}>Google</MenuItem>
          <MenuItem value={'Others'}>Others</MenuItem>
        </Select>
        </FormControl>
        <div>
          <div></div>&nbsp;
        </div>
        <TextField
          name="recommendedby"
          type="text"
          onChange={handleInputChange}
          label="Recommender Name"
          required={true}
        />
        {/* <Input 
          name="billimage"
          type="file"
          placeholder="Bill Image"
          onChange={handleInputChange}
          label="Bill image"
          /> */}
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
