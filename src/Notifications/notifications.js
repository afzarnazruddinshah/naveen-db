import React, { Component, useState, useEffect } from "react";
// import * as firebase from "firebase";
import { firestore } from "firebase";
import { Link, withRouter } from "react-router-dom";
import { getToday } from "../Utils/utilityFunctions";
import firebase from "firebase";
import HomeIcon from '@material-ui/icons/Home';
import './notifications.css';
//Table 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//Drop Down
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//Notification Badge
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    maxHeight: 440,
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
const Notification = (props) => {
  const classes = useStyles();
  const ddclasses = useStyles2();

  const [recordsPresent, setRecordsPresent] = useState(false);
  const [records, setRecords] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCurrentUser(); //to verify authentication
    getData(); //Get notificationd data from db
  });
  
  const getCurrentUser = (e) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null || user === undefined) {
        props.history.push("/login");
      }
    });
  };

  const getData = () => {
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
        setRecordsPresent(true); setRecords(recArr); setCount(recArr.length);
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
        setRecordsPresent(true); setRecords(recArr); setCount(recArr.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Status update - pending and completed - store changes to db
  const updateStatus = (id, value) => {
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
          setRecordsPresent(true); setRecords(records); setCount(records.length);
        })
        .catch(function (error) {
          console.error("Error Adding Document: ", error);
        });
    }
  };

    const recordMapper = records.map((item, index) => (
      <StyledTableRow key={index}>
        <StyledTableCell>{item.custName}</StyledTableCell>
        <StyledTableCell>{item.plantInstalled}</StyledTableCell>
        <StyledTableCell>{item.dateOfInstallment}</StyledTableCell>
        <StyledTableCell>{item.nextServiceDate}</StyledTableCell>
        <StyledTableCell>{item.custAddress}</StyledTableCell>
        <StyledTableCell>{item.custPhone}</StyledTableCell>
        <StyledTableCell>
          <FormControl className={ddclasses.formControl}>
            <Select
              defaultValue={"pending"}
              value={item.status}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => updateStatus(item.id, e.target.value)}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </StyledTableCell>
      </StyledTableRow>
    ));
    const feed =
      recordsPresent === true ? (
        recordMapper
      ) : (
        <StyledTableRow>
          <StyledTableCell>Loading</StyledTableCell>
        </StyledTableRow>
      );
    const feed2 =
      count === 0 ? (
        <tr>
          <td>No Notification</td>
        </tr>
      ) : (
        feed
      );

      const badgeProps = {
        color: 'secondary',
        children: <NotificationsIcon />,
      };

    return (
      <div className="login-form">
        <p>
          <Link to="/dashboard">
          <Button color="secondary" variant="contained"><HomeIcon />&nbsp;{" Go To Dashboard"}</Button>
          </Link>
        </p>
        <h2>Notifications <Badge color="secondary" badgeContent={count} {...badgeProps}></Badge></h2>
        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} stickyHeader size="small" aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Plant Installed</StyledTableCell>
                <StyledTableCell align="right">Date of Installment</StyledTableCell>
                <StyledTableCell align="right">Next Service Date</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {feed2}
          </TableBody>
          </Table>
          </TableContainer>
      </div>
    );
}
export default withRouter(Notification);