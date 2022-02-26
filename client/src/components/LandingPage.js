import React, {useEffect, useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {Button, Container} from 'react-bootstrap'
import logo from '../assets/logo1.png';

function LandingPage({onLogin}) {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
        <div className="submit-container">
          <div className="d-flex justify-content-center align-items-center">
          {showLogin ? (
            <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
          ) : (
            <SignupForm onLogin={onLogin} setShowLogin={setShowLogin} />
          )}
          </div>
        </div>
    </div>
  )
}

export default LandingPage