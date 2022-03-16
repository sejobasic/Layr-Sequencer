import React from 'react'

function Footer() {

  return (
    <div>
      <div className="year">
      </div>
      <div className="git-icon">
        <p className="footer">
          &copy;{new Date().getFullYear()} Made By Sejo Basic. 
        </p>
        <a href="https://github.com/sejobasic/Layr-Sequencer" target="_blank" rel="noreferrer"> 
          <i className="fa-brands fa-github" id="git">
          </i>
        </a>
        <a href="https://linkedin.com/in/sejo-basic" target="_blank" rel="noreferrer"> 
          <i className="fa-brands fa-linkedin" id="linked">
          </i>
        </a>
      </div>
    </div>
  )
}

export default Footer