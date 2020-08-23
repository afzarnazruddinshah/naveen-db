import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import "./login.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStylesBackDrop = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const useStyles = makeStyles((theme) => ({
  textfield: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const classesBackDrop = useStylesBackDrop();
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleInputChange = (e) => {
    e.persist();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPwd(e.target.value);
    }
  };

  const closeBackDrop = (e) => {
    setOpenBackDrop(false);
  };

  const login = (e) => {
    e.preventDefault();
    setOpenBackDrop(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then((res) => {
        props.history.push("/dashboard");
      })
      .catch((err) => {
        setOpenBackDrop(false);
        if (err.code === "auth/wrong-password") {
          setAuthMessage("The email or Password is incorrect !");
        }
      });
  };

  // For getting Password Reset Email - and Move to Password Reset Info Page
  const resetPassword = (e) => {
    if (String(email).trim() === "") {
      alert("Enter email address and then click Forgot Password Link");
    } else {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then((res) => {
          props.history.push("/resetpwd");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <React.Fragment>
      <div>
        <h2 className="title">On Time Service</h2>
      </div>
      <h3 className="title">Login</h3>
      <div className="login-form">
        <form className={classes.textfield}>
          <small className="err">{authMessage}</small>
          <TextField
            type="email"
            onChange={handleInputChange}
            required={true}
            name="email"
            id="standard-basic"
            label="Email Address"
          />
          <div>
            <div></div>&nbsp;
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            type="password"
            onChange={handleInputChange}
            required={true}
            name="pwd"
            id="standard-basic"
            label="Password"
          />
          <div>
            <div></div>&nbsp;
          </div>
          <div></div>
          <Button
            size="large"
            variant="contained"
            color="primary"
            type="submit"
            name="submit"
            onClick={login}
          >
            Login Now
          </Button>
          <div>
            <div></div>&nbsp;
          </div>
          <div>
            <div></div>&nbsp;
          </div>
          <p className="red stmt login-form">
            Forgot Password?{" "}
            <span onClick={resetPassword}>
              <u>Click Here</u>
            </span>
          </p>
        </form>
      </div>
      <Backdrop
        className={classesBackDrop.backdrop}
        open={openBackDrop}
        onClick={closeBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
};
export default withRouter(Login);