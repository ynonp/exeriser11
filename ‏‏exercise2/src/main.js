import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import Convert from './Convert'

const TimeUnits = () => {
  // We don't really need to save all 3 values in state, right?
  // Please refactor to save only the seconds
    const [content, setContent] = useState(
        TimeUnits.initial
        );

  // These 3 functions looks awefully similiar
  // Can you create a more general version of it without code duplication?
    function convertHours(e) {
        const hours = Number(e.target.value)

        let minutes = ( hours * 60 )
        let seconds = ( hours *3600 )
        const inputUpdate = {
            hours,
            minutes,
            seconds
        }
        setContent(inputUpdate)
    }

    function convertMinutes(e) {
        const minutes = Number(e.target.value)

        let hours = ( minutes/60 ).toString()
        let seconds = ( minutes*60 ).toString()
        const inputUpdate = {
            hours,
            minutes,
            seconds
        }
        setContent(inputUpdate)
    }

    function convertSeconds(e) {
        const seconds = Number(e.target.value)
        let hours = ( seconds/3600 ).toString()
        let minutes = ( seconds/60 ).toString()
        const inputUpdate = {
            hours,
            minutes,
            seconds
        }       
        setContent(inputUpdate)
    }

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
        <h1>convert</h1>
        <label style={{textAlign:"center"}}>
            שעות <br/>
            <input type="text" value={content.hours} onChange={convertHours}/>
        </label>
        <label style={{textAlign:"center"}}>
            דקות <br/>
            <input type="text" value={content.minutes} onChange={convertMinutes}/>
        </label>
        <label style={{textAlign:"center"}}>
            שניות <br/>
            <input type="text" value={content.seconds} onChange={convertSeconds}/>
        </label>
    </div>
  )
};

TimeUnits.initial = {
    'hours': '',
    'minutes': '',
    'seconds': '',
}


// main.js
const root = document.querySelector('main');
ReactDOM.render(<TimeUnits />, root);
