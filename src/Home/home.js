import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { getToday } from '../Utils/utilityFunctions';
import './home.css';
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
            <div className="dashboardform">
                <h2>Welcome to Naveen's DB</h2>
                    <p><Link  to="/addrecords"><button className="link">Add Records</button></Link> </p>
                    <p><Link  to="/viewrecords"><button className="link">View Records</button></Link></p> 
                    <p><Link  to="/notifications"><button className="link">Notifications ({this.state.count})</button></Link> </p>
                   <p> <a href="##" onClick={this.getNotificationCount}><button className="link">Refresh</button></a></p>
                <audio  webkit-playsinline="true" playsInline={true}  ref={this.audioRef} id="notificationSound" src="https://notificationsounds.com/soundfiles/b2f627fff19fda463cb386442eac2b3d/file-sounds-1142-inflicted.mp3" />
            </div>
         );
    }
}
 
export default Home;