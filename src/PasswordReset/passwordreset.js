import React from 'react';
import './pwdreset.css';
import { Link } from 'react-router-dom';


const PasswordReset = (props) => {
    return ( 
        <div id="pwdreset">
            <h2>Password Reset</h2>
            <p>Hi User, Please check your Mail Inbox for Password Reset Link</p>
            <small>Note: It might take a minute or two to send password reset mail. Please be patient for the time being.</small>
            <small> Once you reset the Password, <Link to="/login"><u>Click here</u></Link></small>
        </div>
     );
}

export default PasswordReset;