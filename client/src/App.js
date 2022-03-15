import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import './App.css';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <LandingPage onLogin={setUser} />

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
    </Router>
  );
}

export default App;
