import React, {useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
// import Synth from './Synth'
import * as Tone from 'tone'
import logo from '../assets/logo3.png';
import sound from "../assets/test.mp3"


function LandingPage({onLogin}) {
    const [showLogin, setShowLogin] = useState(true)
    const [showForm, setShowForm] = useState(true)


    function clickHandler(e) {
      e.preventDefault()
      setShowForm(false)
   }

   function handleSynth(){
    const player = new Tone.Player({
      url: sound,
      autostart: true,
    });
    const feedbackDelay = new Tone.FeedbackDelay(5, 0.5).toDestination();
    // connect the player to the feedback delay and filter in parallel
    player.connect(feedbackDelay);
    Tone.Master.volume.value = -20
  }

  // function handleSynth() {
  //   const duoSynth = new Tone.DuoSynth().toDestination();
  //   duoSynth.triggerAttackRelease("C4", "2n");
  //   Tone.Master.volume.value = -20
  // }

  return (
    <div className="landing-page">
      <style>{'body { background-color: #8d8e8f; }'}</style>
        <div className="submit-container">
          <div className="d-flex justify-content-center align-items-center">
          {showForm ? (
            <img src={logo} className="App-logo" alt="logo" onClick={clickHandler} onMouseOver={handleSynth}/>
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
  )
}

export default LandingPage