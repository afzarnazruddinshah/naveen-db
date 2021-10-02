import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { firestore } from "firebase";
import { getToday } from "../Utils/utilityFunctions";
import "./home.css";
import firebase from "firebase";
//Material UI
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import GetAppIcon from "@material-ui/icons/GetApp";
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
//For Excel Generation
import * as alasql from "alasql";
import SideNavigationBar from "../SideNavigationBar/SideNavigationBar";
var XLSX = require("xlsx");
alasql.setXLSX(XLSX);


const Home = (props) => {
  const [count, setCount] = useState(0);
  // const [records, setRecords] = useState([]);
  // const [recordsPresent, setRecordsPresent] = useState(false);
  const audioRef = useRef(document.createElement("audio"));
  // const [totalRecords, setTotalRecords] = React.useState([]);
  const [allRecords, setAllRecords] = React.useState();
  const badgeProps = {
    color: "secondary",
    children: <NotificationsIcon />,
  };

  useEffect(() => {
    getCurrentUser();
    getNotificationCount();
    getAllData();
  }, []);

  const getCurrentUser = (e) => {
    firebase.auth().onAuthStateChanged((user) => {
      localStorage.setItem('uid', user.uid);
      if (user === null || user === undefined) {
        props.history.push("/login");
      }
    });
  };
  
  const getAllData = () => {
    var db = firestore();
    var recArr = [];
    db.collection("installations")
    .where("uid", "==", localStorage.getItem("uid"))
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const idObj = { id: doc.id };
          const obj = { ...idObj, ...doc.data() };
          recArr.push(obj);
        });
        const recommenders = recArr.reduce((recommenders, item) => {
          const group = (recommenders[item.recommended] || []);
          group.push(item);
          recommenders[item.recommended] = group;
          return recommenders;
        }, {});

        const dataObject = {
          customers: recommenders.Customers!== undefined?recommenders.Customers.length: 0,
          relatives: recommenders.Relatives!== undefined?recommenders.Relatives.length: 0,
          friends: recommenders.Friends!== undefined?recommenders.Friends.length: 0,
          dealers: recommenders.Dealers !== undefined? recommenders.Dealers.length: 0,
          neighbours: recommenders.Neighbours !== undefined? recommenders.Neighbours.length: 0,
          justDial: recommenders.JustDial!== undefined?recommenders.JustDial.length: 0,
          google: recommenders.Google!== undefined?recommenders.Google.length: 0,
          others: recommenders.Others!== undefined?recommenders.Others.length: 0
        }
        setAllRecords(recArr);
        localStorage.setItem('reports_data', JSON.stringify(dataObject));
      });
  }

  //For Getting the notification Count on Refresh button click
  const getNotificationCount = () => {
    var today = getToday();
    var db = firestore();
    var recArr = [];
    //Getting records with today as their Next service Date
    db.collection("installations")
      .where("nextServiceDate", "==", today)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const idObj = { id: doc.id };
          const obj = { ...idObj, ...doc.data() };
          recArr.push(obj);
        });
        setCount(recArr.length);
      })
      .catch((err) => {
        console.log(err);
      });
    // Getting Pending Service Records and adding them to above Array
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
        setCount(recArr.length);
        playNotificationSound(recArr.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //For Playing Notification Sound
  const playNotificationSound = (count) => {
    if (count > 0) {
      audioRef.current.play();
    }
  };

  const exportFile = () => {

    //extract data
    var opts = [{ sheetid: "On Time Service Records", header: true }];
        var res = alasql(
          'SELECT * INTO XLSX("OnTimeServiceRecords.xlsx",?) FROM ?',
          [opts, [allRecords]]
        );
  };

  const logoutUser = (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("uid");
        props.history.push("/login"); //Move to Login Route on Logout
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="dashboardform">
      <h2>On Time Service <HomeIcon variant="filled" color="primary"/></h2>
      <div>
        <div>&nbsp;</div>
      </div>
      <p>
        <Link to="/addrecords">
          <Button
            size="large"
            variant="contained"
            color="primary"
            type="button"
          >
            Add Records
          </Button>
        </Link>{" "}
      </p>
      <div>
        <div>&nbsp;</div>
      </div>
      <div>
        <div>&nbsp;</div>
      </div>
      <p>
        <Link to="/viewrecords">
          <Button
            size="large"
            variant="contained"
            color="primary"
            type="button"
          >
            View Records
          </Button>
        </Link>
      </p>
      <div>
        <div>&nbsp;</div>
      </div>
      <div>
        <div>&nbsp;</div>
      </div>
      <p>
        <Link to="/notifications">
          <Button
            size="large"
            variant="contained"
            color="primary"
            type="button"
          >
            Notifications &nbsp;{" "}
            <Badge
              max={10}
              color="secondary"
              badgeContent={count}
              {...badgeProps}
            ></Badge>
          </Button>
        </Link>{" "}
      </p>
      <div>
        <div>&nbsp;</div>
      </div>
      <div>
        <div>&nbsp;</div>
      </div>
      <Button size="large" color="primary" variant="contained" onClick={exportFile}>
        Export As File&nbsp; <GetAppIcon />
      </Button>
      <div>
        <div>&nbsp;</div>
      </div>
      <div>
        <div>&nbsp;</div>
      </div>
      <Link to="/reports">
        <Button size="large" color="primary" variant="contained">
          Reports &nbsp;<AssessmentIcon/>
        </Button>
      </Link>
      <div>
        <div>&nbsp;</div>
      </div>
      <div>
        <div>&nbsp;</div>
      </div>
      <p>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={logoutUser}
        >
          Logout
        </Button>
      </p>
      <div>
        <div>&nbsp;</div>
      </div>
      <audio
        webkit-playsinline="true"
        playsInline={true}
        ref={audioRef}
        id="notificationSound"
        src="https://notificationsounds.com/soundfiles/acc3e0404646c57502b480dc052c4fe1/file-sounds-1140-just-saying.mp3"
      />
      <SideNavigationBar />
    </div>
  );
};
export default withRouter(Home);
