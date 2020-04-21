import React, { Component } from "react";
import { Link , withRouter} from "react-router-dom";
import { firestore } from "firebase";
import { getToday } from "../Utils/utilityFunctions";
import "./home.css";
import firebase from 'firebase';
class Home extends Component {
  state = {
    count: 0,
  };
  constructor(props) {
    super(props);
    this.audioRef = React.createRef(); //For Notification Audio Tag
  }

  componentDidMount()
  {
      this.getCurrentUser(); //To Verify Authentication
  }

  getCurrentUser = e => {
    firebase.auth().onAuthStateChanged(user => {
      if (user === null || user === undefined) 
      {
        this.props.history.push('/login');
      } 
    });
  }
  //For Getting the notification Count on Refresh button click
  getNotificationCount = () => {
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
        this.setState(
          () => {
            return {
              records: recArr,
              recordsPresent: true,
              count: recArr.length,
            };
          },
          () => {
            this.playNotificationSound(this.state.count);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //For Playing Notification Sound
  playNotificationSound = (count) => {
    if (count > 0) {
      this.audioRef.current.play();
    }
  };

  logoutUser = e => {
    firebase.auth().signOut().then(()=> {
      this.props.history.push('/login'); //Move to Login Route on Logout
    }).catch(function(error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="dashboardform">
        <h2>Welcome to Naveen's DB</h2>
        <p>
          <Link to="/addrecords">
            <button className="link">Add Records</button>
          </Link>{" "}
        </p>
        <p>
          <Link to="/viewrecords">
            <button className="link">View Records</button>
          </Link>
        </p>
        <p>
          <Link to="/notifications">
            <button className="link">Notifications ({this.state.count})</button>
          </Link>{" "}
        </p>
        <p>
          {" "}
          <a href="##" onClick={this.getNotificationCount}>
            <button className="link">Refresh</button>
          </a>
        </p>
        <p>
          <button className="link" onClick={this.logoutUser}>Logout</button>
        </p>
        <audio
          webkit-playsinline="true"
          playsInline={true}
          ref={this.audioRef}
          id="notificationSound"
          src="https://notificationsounds.com/soundfiles/b2f627fff19fda463cb386442eac2b3d/file-sounds-1142-inflicted.mp3"
        />
      </div>
    );
  }
}
export default withRouter(Home);