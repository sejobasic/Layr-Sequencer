import React, {useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import logo from '../assets/logo.png';


function LandingPage({onLogin}) {
    const [showLogin, setShowLogin] = useState(true)
    const [showForm, setShowForm] = useState(true)

    function clickHandler(e) {
      e.preventDefault()
      setShowForm(false)
   }

  return (
    <div className="landing-container">
      <div className="landing-page">
        <div className="submit-container">
          <div className="d-flex justify-content-center align-items-center">
            {showForm ? (
              <img src={logo} className="App-logo" alt="logo" onClick={clickHandler} />
              ) : (
              <div>{showLogin ? (
                <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
                ) : (
                <SignupForm onLogin={onLogin} setShowLogin={setShowLogin} />
                )}
              </div>
              )}
          </div>
        </div>
      </div>
      <style>{'body { background-color: #9a8c98; }'}</style>
    </div>
  )
}

export default LandingPage