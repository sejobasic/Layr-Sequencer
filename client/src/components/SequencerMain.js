import React from 'react'
import * as Tone from 'tone'
import { Sequencer } from 'react-nexusui';

function SequencerMain() {
  

  return (
    <div className="sequencer">
      <Sequencer
        rows={8}
        columns={16}
       />
      <style>{'body { background-color: #8d8e8f; }'}</style>
    </div>
  )
}

export default SequencerMain