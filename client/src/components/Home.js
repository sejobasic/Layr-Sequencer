import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import bg1 from '../assets/bg1.png'

function Home({user}) {
  return (
    <motion.div
    className="home-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit ={{opacity: 0}}
    >
    <div className="bg">
      <h1 className="home">Welcome {user.username}</h1>
      </div>
      <style>{'body { background-color: #8d8e8f; }'}</style>
      <Footer />
    </motion.div>
  )
}

export default Home