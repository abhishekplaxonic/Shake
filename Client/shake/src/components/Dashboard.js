

import React from "react";

import { useState } from 'react';

import "./Dashboard.css";

import Inputform from "./Inputform";

export default function Dashboard() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div class="login-page">
    <div className="form">
     <div class="login">
          <div class="login-header">
            <h1>ADMIN LOGIN</h1>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <button className="button-container">
         Submit
        </button>
      </form>
    </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
  
        {isSubmitted ? <div><Inputform/></div> : renderForm}
      </div>
    </div>
  );

}