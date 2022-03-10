import React, { useState } from "react";
import { Form } from 'react-bootstrap'

function LoginForm({onLogin, setShowLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    }).then((resp) => {
      setIsLoading(false);
      if(resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((error) => {
          setErrors(error.errors)
        });
      }
    });
  }

  return (
    <div className="form-container">
      <div id="form-container">
        <Form onSubmit={handleSubmit} id="sign-in-form">
          <Form.Group id="form-text" className="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              id="username"
              placeholder="Enter Username"
              autoComplete="on"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group id="form-text" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {errors ?
            errors.map(e => {
            return (<p className='errors' key={e}>{e}</p>)
            }) : null
          }
          <button className="login-btn" type="submit">
            {isLoading ? "Loading..." : "Sign In"}
          </button> 
          <button className="login-btn"  onClick={() => setShowLogin(false)}>
            Sign Up
          </button>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm