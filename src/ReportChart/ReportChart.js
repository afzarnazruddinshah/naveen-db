import React, { Fragment } from "react";
import Chart from "react-google-charts";
import firebase from "firebase";
import { firestore } from "firebase";
import { Link } from "react-router-dom";

const ReportChart = () => {
  const [dataPresent, setDataPresent] = React.useState(false);
  const [records, setRecords] = React.useState({
    relatives: 0,
    friends: 0,
    dealers: 0,
    neighbours: 0,
    customers: 0,
    justDial: 0,
    google: 0,
    others: 0,
  });

  React.useEffect(() => {
    getChartsData();
  }, []);

  const getChartsData = () => {};

  const pieOptions = {
    title: "Recommendations Chart",
    pieHole: 0,
    slices: [
      {
        color: "#2BB673",
      },
      {
        color: "#d91e48",
      },
      {
        color: "#007fad",
      },
      {
        color: "#e9a227",
      },
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 30,
      top: 30,
      width: "50%",
      height: "30%",
    },
    fontName: "Roboto",
  };

  const data = JSON.parse(localStorage.getItem("reports_data"));
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
          data={[
            [
              "Relatives",
              "Friends"
            ],
            ["Relatives", data.relatives],
            ["Friends", data.friends],
            ["Dealers", data.dealers],
            ["Neighbours", data.neighbours],
            ["Customers", data.customers],
            ["JustDial", data.justDial],
            ["Google", data.google],
            ["Others", data.others],
          ]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    </Fragment>
  );
};

export default ReportChart;
