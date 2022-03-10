import React from 'react'
import { motion } from 'framer-motion'
import {ListGroup} from 'react-bootstrap'

function Ideas({user}) {

  return (
    <motion.div 
      className="idea-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit ={{opacity: 0}}
    >
      <h1 className='ideas'>{user.username} Ideas</h1>
      <ListGroup className="list" as="ol" numbered>
        <ListGroup.Item  className="list" as="li"> Load/Download here</ListGroup.Item>
        <ListGroup.Item className="list" as="li"> Load/Download here</ListGroup.Item>
        <ListGroup.Item className="list" as="li"> Load/Download here</ListGroup.Item>
      </ListGroup>
      <style>{'body { background-color: #8d8e8f; }'}</style>
    </motion.div>
  )
}

export default Ideas