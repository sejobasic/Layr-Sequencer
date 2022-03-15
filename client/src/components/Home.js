import React from 'react'
import { motion } from 'framer-motion'
import jam from '../assets/jam-img.png'
import seq from '../assets/seq-img.png'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import {  Link } from "react-router-dom";

function Home({user}) {

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit ={{ opacity: 0 }}
    >
      <div>
        <Container>
          <h1 className="home">Welcome {user.username}</h1>
          <p className='description'>
          YOU ARE ON THE HOME PAGE OF THE LAYR SEQUENCER.
          EACH PAGE WILL HAVE A HELP BUTTON TO GUIDE YOU THROUGH THE PROCESS OF EVERY PLAYABLE DEVICE.
          THIS PROJECT IS STILL A WORK IN PROGRESS AND MANY MORE FEATURES WILL BE ADDED IN THE FUTURE.
          I HOPE THAT YOU HAVE FUN AND CREATE SOME AWESOME MELODIES. THANKS FOR CHECKING OUT THE LAYR SEQUENCER.
          </p>
        </Container>
      </div>
      <div className='row'>
        <div className='column'>
          <h5 className='jam-text'>VISIT SEQUENCER PAGE</h5>
          <Link to="/sequencer">
            <img className='jam-img' src={seq} />
          </Link>
        </div>
        <div className='column'>
        <h5 className='seq-text'>VISIT JAM PAGE</h5>
          <Link to="/jam">
            <img className='seq-img' src={jam} />
          </Link>
        </div>
      </div>
      <style>{'body { background-color: #8d8e8f; }'}</style>
      <div className='footer-container'>
        <Footer />
      </div>
    </motion.div>
  )
}

export default Home