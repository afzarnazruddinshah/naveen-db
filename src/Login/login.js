import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import firebase from 'firebase';

import './login.css';
class Login extends Component {
    state = {
        authMessage: '',
    }

    handleInputChange = e => {
        e.persist();
        this.setState(
            ()=> { return { [e.target.name]: e.target.value}},
            ()=> {}
        );
    }

    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( (res)=> {
            //Move Route
            localStorage.setItem('loggedIn', true);
            this.props.history.push('/dashboard');
        })
        .catch( (err)=> {
            if(err.code === 'auth/wrong-password')
            {
                this.setState(
                    ()=> { return { authMessage: "The email or Password is incorrect !" }}
                );
            }
        });
    }

    // For getting Password Reset Email - and Move to Password Reset Info Page
    resetPassword =  (e) => {
        console.log(this.state.email);
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then( (res)=> {
             this.props.history.push('/resetpwd');
        })
        .catch( err=> { console.log(err);})
    }

    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <h2 className="title">Naveen's Db</h2>
                </div>
                <h3 className="title">Login</h3>
        <div className="form">
            <form>
                <small className="err">{this.state.authMessage}</small>
                <p htmlFor="email">Email</p>
                <input placeholder="Your Email Id here" type="email" name="email" onChange={this.handleInputChange} required/>
                <p htmlFor="password">Password</p>
                <input placeholder="Your Password here" type="password" name="password" onChange={this.handleInputChange} required/>
                <button type="submit" name="submit" onClick={this.login}>Login Now</button>
                <div>
                    <small className="err">Forgot Password? <span onClick={this.resetPassword}><u>Click Here to Reset</u></span></small>
                </div>
            </form>
            <p>Don't have an account? <Link to="/signup"><u>Sign Up here</u></Link></p>
        </div>

        
        </React.Fragment> );
    }
}
export default withRouter(Login);