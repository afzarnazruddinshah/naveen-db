import React, { Component, Fragment, useEffect, useState } from "react";
// import * as firebase from 'firebase';
import { firestore } from "firebase";
import "./viewRecords.css";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";
//Table 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//Material Ui
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    maxHeight: 500,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#8ECDCC",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#CD8EBF",
    },
  },
}))(TableRow);

const ViewRecords = (props) => {
  const classes = useStyles();
  const [records, setRecords] = useState([]);
  const [recordsPresent, setRecordsPresent] = useState(false);
  const [searchBox, setSearchBox] = useState("");
  const [searchOn, setSearchOn] = useState(false);
  const [searchRecords, setSearchRecords]= useState([]);

  useEffect( ()=> {
    getCurrentUser();
    getData();
  }, [])

  const getCurrentUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null || user === undefined) {
        props.history.push("/login");
      }
    });
  };

  //Get all records of installations
  const getData = () => {
    var db = firestore();
    var recArr = [];
    db.collection("installations")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const idObj = { id: doc.id };
          const obj = { ...idObj, ...doc.data() };
          recArr.push(obj);
        });
        setRecords(recArr);
        setRecordsPresent(true);
      });
  };

  //Search based on Customer Name Column
  const search = (e) => {
    setSearchOn(true);
    var records1 = records.filter((item) => {
      return (
        String(item.custName)
          .toLowerCase()
          .search(String(searchBox).toLowerCase()) !== -1
      );
    });
    var records2 = records.filter((item)=>{
      return (
        String(item.product)
          .toLowerCase()
          .search(String(searchBox).toLowerCase()) !== -1
      )
    });
    var records3 = records.filter((item)=>{
      return (
        String(item.custPhone)
          .toLowerCase()
          .search(String(searchBox).toLowerCase()) !== -1
      )
    });
    var records4 = records.filter((item)=>{
      return (
        String(item.brandModel)
          .toLowerCase()
          .search(String(searchBox).toLowerCase()) !== -1
      )
    });
    var records5 = records.filter((item)=>{
      return (
        String(item.recommendedBy)
          .toLowerCase()
          .search(String(searchBox).toLowerCase()) !== -1
      )
    });
    var resRecords = records1.concat(records2, records3,records4,records5);
    setSearchRecords(resRecords);
  };

  //For storing text from search box
  const handleSearchBox = (e) => {
    e.persist();
    setSearchBox(e.target.value);
  };

  //Resetting the Records table and Search Box
  const handleReset = (e) => {
    setSearchOn(false);
    setSearchBox("");
  };

  //Moving to Edit page and having Record id as Route parameter
  const editRecord = (id) => {
    props.history.push("/editrecord/" + id);
  };

  //Deleting the Record on del button click
  const deleteRecord = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      var db = firestore();
      //Delete From DB
      db.collection("installations")
        .doc(String(id))
        .delete()
        .then(() => {
          alert("Record Deleted Successfully");
          //Delete from records Array
          var updatedRecords = records.filter(
            (item) => item.id !== id
          );
          setRecords(updatedRecords);
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    }
  };

  const dispRecords =
      searchOn === true
        ? searchRecords
        : records;
  const recordMapper = dispRecords.map((item) => (
    <StyledTableRow key={item.id}>
        <StyledTableCell component="th" scope="row">{ item.custName}</StyledTableCell>
        <StyledTableCell align="right">{item.custPhone}</StyledTableCell>
        <StyledTableCell align="right">{item.product}</StyledTableCell>
        <StyledTableCell align="right">{item.dateOfInstallment}</StyledTableCell>
        <StyledTableCell align="right">{item.nextServiceDate}</StyledTableCell>
        <StyledTableCell align="right">{item.natureOfWork}</StyledTableCell>
        <StyledTableCell align="right">{item.brandModel}</StyledTableCell>
        <StyledTableCell align="right">{item.amountReceived}</StyledTableCell>
        <StyledTableCell align="right">{item.recommendedBy}</StyledTableCell>
        <StyledTableCell onClick={() => editRecord(item.id)} align="right"><EditIcon /></StyledTableCell>
        <StyledTableCell onClick={() => deleteRecord(item.id)} align="right"><DeleteIcon /></StyledTableCell>
    </StyledTableRow>
  ));

  const feed =
      recordsPresent === true ? (
        recordMapper
      ) : (
        <TableRow>
          <TableCell>Loading</TableCell>
        </TableRow>
      );
    return (
      <div className="login-form">
        <p>
          <Link to="/dashboard">
          <Button color="secondary" variant="contained"><HomeIcon />&nbsp;{" Go To Dashboard"}</Button>
          </Link>
        </p>
        <h2 id="title">
          Viewing All Records</h2>
        <TextField value={searchBox} label="Search any record" type="text" name="searchbox" onChange={handleSearchBox} /> &nbsp; &nbsp;
        <Button color="primary" variant="contained" type="button" onClick={search}><SearchIcon /></Button>&nbsp; {"  "}{" "}
        <Button color="primary" variant="contained" type="button" onClick={handleReset}><RefreshIcon /></Button>
        <div><div>&nbsp;</div></div>
        <div><div>&nbsp;</div></div>
        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} stickyHeader size="small" aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Name and Address</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">Product</StyledTableCell>
                <StyledTableCell align="right">Date </StyledTableCell>
                <StyledTableCell align="right">Next Due Date</StyledTableCell>
                <StyledTableCell align="right">Nature Of Work</StyledTableCell>
                <StyledTableCell align="right">Brand and Model</StyledTableCell>
                <StyledTableCell align="right">Amount Received</StyledTableCell>
                <StyledTableCell align="right">Recommended By</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {feed}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
export default withRouter(ViewRecords);