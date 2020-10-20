import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import "./login.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
// import logo from '../../public/logo.png';
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

  React.useEffect(()=> {
    localStorage.clear();
    localStorage.removeItem('reports_data');
    localStorage.removeItem('uid');
  }, []);

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
          setAuthMessage("Email or Password is incorrect");
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
      <div className="App">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/logo-3.png"}
            width="360"
            height="96.33"
            alt="logo-here"
          />
        </div>
      </div>

      {/* <h3 className="logo">Login</h3> */}
      <div className="login-form">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          size="large"
          variant="contained"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <form className={classes.textfield}>
          <small></small>
          <TextField
            variant="outlined"
            type="email"
            onChange={handleInputChange}
            required={true}
            error={authMessage === "" ? false: true}
            name="email"
            id="standard-basic"
            label="Email Address"
            helperText={authMessage}
          />
          <div>
            <div></div>&nbsp;
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            type="password"
            variant="outlined"
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
          <Button
          style={{backgroundColor: "red", color: "white"}}
            size="large"
            variant="contained"
            type="submit"
            name="submit"
            onClick={resetPassword}
          >
            Forgot Password?
          </Button>
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
