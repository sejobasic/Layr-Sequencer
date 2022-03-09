import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'

function SignupForm({onLogin, setShowLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((error) => setErrors(error.errors));
      }
    });
  }
  

  return (
    <div className="form-container">
    <div className="d-grid age-100 justify-content-center align-items-center" id="form-container">
      <Form className="text-center rounded p-4 p-sm-3" onSubmit={handleSubmit} id="sign-in-form">
        <Form.Group id="form-text" className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group id="form-text" className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>
        <Form.Group id="form-text" className="mb-3">
          <Form.Label htmlFor="password">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>  
        {errors ?
          errors.map(event => {
            if (event === "Password digest can't be blank") {
              return null
            }
          return (<p className='errors' key={event}>{event}</p>)
          }) :
          null
        }
        <button className="login-btn" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            <p className="acc" >Already have an account? </p>
        <button className="login-btn" onClick={() => setShowLogin(true)}>
            Sign In
        </button>
      </Form>
    </div>
  </div>
  )
}

export default SignupForm