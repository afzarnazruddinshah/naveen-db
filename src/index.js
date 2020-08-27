import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/App/app";
// import * as firebase from "firebase";
import firebase from 'firebase/app';
import * as serviceWorker from './serviceWorker';
export const firebaseConfig = {
  apiKey: "AIzaSyCmGN1TXfG9dTYXx80HvckdQkJpE9nTLXY",
  authDomain: "naveen-s-db.firebaseapp.com",
  databaseURL: "https://naveen-s-db.firebaseio.com",
  projectId: "naveen-s-db",
  storageBucket: "naveen-s-db.appspot.com",
  messagingSenderId: "941064666107",
  appId: "1:941064666107:web:17532e787616deadbf695e",
  measurementId: "G-34S1Z2T39Q",
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Service Worker
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();