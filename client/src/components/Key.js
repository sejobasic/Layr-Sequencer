import React from 'react'

function Key({note}) {
    
    let keyClassName = "key";
    const noteIsFlat = note.length > 2;
    // # This allows us to show the flat keys without rendering the text on top
    if (noteIsFlat) {
      keyClassName += " flat";
    }

  return (
    <div>
{/* If note length is greater than 2 show flat keys without text */}
        {noteIsFlat ? (
          <div id={note+'1'} className={keyClassName}></div>
          ) : (
          <div id={note+'1'} className={keyClassName}>
            <div className="key-text">{note}</div>
          </div>
          )
        }
    </div>
  )
}

export default Key