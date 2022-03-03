import React, { useState }from 'react'

function Key({note}) {


    const noteToKey = {
        C2: 'z',
        Cf2: 'q',
        D2: 'x',
        Df2: 'w',
        E2: 'c',
        F2: 'v',
        Ff2: 'e',
        G2: 'b',
        Gf2: 'r',
        A2: 'n',
        Af2: 't',
        B2: 'm',
        C3: 'a',
        Cf3: 'y',
        D3: 's',
        Df3: 'u',
        E3: 'd',
        F3: 'f',
        Ff3: 'i',
        G3: 'g',
        Gf3: 'o',
        A3: 'h',
        Af3: 'p',
        B3: 'j',
      };



    


  return (

    <div>
{/* If note length is greater than 1 show flat keys */}
        {note.length > 2 ? (
          <div className='key-flat'></div>
         ) : (
            <div className='key'>
              <div className="key-text">{note}</div>
            </div>
          )
        }
    </div>


    // <div className="key">
    //     <div className="key-text">
    //         {note}
    //     </div>
    // </div>
  )
}

export default Key