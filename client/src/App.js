import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Sequencer from "./components/Sequencer";
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
      <Navbar user={user} setUser={setUser} />
      <Sequencer user={user} />
    </Router>
  );
}

export default App;
