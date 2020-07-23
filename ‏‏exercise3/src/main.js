import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react'

const RandomeNamber = () => {
  // Please separate "state" to multiple fields each with its own role
  // (as it is easier to re-use compared with one big state object)
    const [state, setState] = useState(
        {...RandomeNamber.initial, randomnum: generateRandom()}
        );

    function reset() {
        setState({...RandomeNamber.initial, randomnum: generateRandom()})
    }

    function generateRandom() {
        return Math.round(Math.random()*RandomeNamber.max)
    }

    function updateGuess(e) {
        const choice = Number(e.target.value)
        setState({...state, choice})
    }

    function checkGuess() {
      let hint =0
        if ( state.choice === state.randomnum) {
            hint = "1"
        }
        else if ( state.choice < state.randomnum) {
            hint = "2"
        }
        else if ( state.choice > state.randomnum) {
          hint = "3"
      }
        setState({...state, hint})
    }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <label style={{textAlign:"center"}}>
            בחר מספר בין 0-100
            <br/>
            <input type="text" value={state.choice} onChange={updateGuess}/>
        </label>
        {
          state.hint ==0?(
            <p></p>
          )
          :(
            state.hint == 1?(
              <p>מצויין</p>
            )
            :(
              state.hint == 2?
              (<p>בחר מספר קטן יותר</p>)
              :(<p>בחר מספר גדול יותר</p>)
              
            )

          )
        }
         
        <button type="button" onClick={checkGuess}>אישור</button>

    </div>
  )
};

RandomeNamber.max = 100
RandomeNamber.initial = {
    'randomnum': 0,
    'choice': 0,
    'hint':''
}


// main.js
const root = document.querySelector('main');
ReactDOM.render(<RandomeNamber />, root);
