import React, { Component } from "react";
// import * as firebase from 'firebase/auth';
import firebase from "firebase";
import { withRouter, Link } from "react-router-dom";
import "./signin.css";
class SignUp extends Component {
  state = {
    authMessage: "",
  };

  handleInputChange = (e) => {
    e.persist();
    this.setState(
      () => {
        return { [e.target.name]: e.target.value };
      },
      () => {}
    );
  };

  signIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        alert("Account Created Successfully ! Please Login Now");
        this.props.history.push("/login");
      })
      .catch((err) => {
        this.setState(() => {
          return { authMessage: err.message };
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <h2 className="title">Naveen's Db</h2>
        </div>
        <h3 className="title">Sign Up</h3>
        <div className="form">
          <form>
            <small id="err">{this.state.authMessage}</small>
            <p htmlFor="email">Email</p>
            <input
              placeholder="eg., xxx@example.com"
              type="email"
              name="email"
              onChange={this.handleInputChange}
              required
            />
            <p htmlFor="password">Password</p>
            <input
              placeholder="Must be atleast 8 characters"
              type="password"
              name="password"
              onChange={this.handleInputChange}
              required
            />
            <button type="submit" name="submit" onClick={this.signIn}>
              Sign In
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <u>Login here</u>
            </Link>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(SignUp);