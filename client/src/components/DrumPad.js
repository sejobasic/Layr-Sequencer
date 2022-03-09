import React from 'react'

function DrumPad({pad}) {

  return (
    <div>
        <div id={pad+'1'} className="pad">
            <div className="pad-text">{pad}</div>
          </div>
    </div>
  )
}

export default DrumPad