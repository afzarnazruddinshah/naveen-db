import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { getToday } from '../Utils/utilityFunctions';

class Home extends Component {
    state = { 
        count: 0
    }

    constructor(props)
    {
        super(props);
        this.audioRef = React.createRef();
    }
    // componentDidMount()
    // {
    //     this.getNotificationCount();
    // }

   
    getNotificationCount = () => {
       var today = getToday();
        var db = firebase.firestore();
        var recArr =[];
        db.collection("installations").where("nextServiceDate", "==", today).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                recArr.push(doc.data());
                this.setState(
                    ()=> { return {count: recArr.length}},
                    ()=> { this.playNotificationSound(recArr.length)}
                );
            });
        });
        // this.playNotificationSound();
    }

    playNotificationSound = (count) => {
        if(count > 0)
        {
            this.audioRef.current.play();
        }
    }
    render() {
        return (
            <Fragment>
                Welcome to Naveen's DB
                <p>
                    <Link to="/addrecords">Add Records</Link> &nbsp;
                    <Link to="/viewrecords">View Records</Link> &nbsp;
                    <Link to="/notifications">Notifications ({this.state.count})</Link>  &nbsp;
                    <a href="##" onClick={this.getNotificationCount}>Refresh</a>
                </p>
                <audio  webkit-playsinline="true" playsInline={true}  ref={this.audioRef} id="notificationSound" src="https://notificationsounds.com/soundfiles/b2f627fff19fda463cb386442eac2b3d/file-sounds-1142-inflicted.mp3" />
            </Fragment>
         );
    }
}
 
export default Home;