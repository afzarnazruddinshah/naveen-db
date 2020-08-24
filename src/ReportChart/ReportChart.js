import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import Chart from "react-google-charts";
import firebase from "firebase";
import { firestore } from "firebase";
import { Link } from "react-router-dom";

const ReportChart = () => {

    const [records, setRecords] = React.useState([]);
    React.useEffect(() => {
        // getCurrentUser();
        // getNotificationCount();
        getChartsData();
      }, []);
    
      const getChartsData = () => {
        var db = firestore();
        var recArr = [];
        //extract data
        db.collection("installations")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const obj = { ...doc.data() };
              recArr.push(obj);
            });
            //update state
            setRecords(recArr);
            console.log(recArr);
          });
      };

    const pieOptions = {
        title: "Recommendations Chart",
        pieHole: 0,
        slices: [
          {
            color: "#2BB673"
          },
          {
            color: "#d91e48"
          },
          {
            color: "#007fad"
          },
          {
            color: "#e9a227"
          }
        ],
        legend: {
          position: "bottom",
          alignment: "center",
          textStyle: {
            color: "233238",
            fontSize: 14
          }
        },
        tooltip: {
          showColorCode: true
        },
        chartArea: {
          
          left: 30,
          top: 30,
          width: "50%",
          height: "30%"
        },
        fontName: "Roboto"
      };
    
    return ( 
    <Fragment>
        <p>
          <Link to="/dashboard">
            <button id="home">{"< Go To Dashboard"}</button>
          </Link>
        </p>
        <div className="form">
        <Chart
          chartType="PieChart"
          data={[ ["Friends", "Relatives"], ["a", 10], ["b", 20] ]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
        </div>
    </Fragment> );
}
 
export default ReportChart;