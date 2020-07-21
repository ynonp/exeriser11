import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'

const MultiInput = () => {
  const [text, setContent] = useState('');

  function changeText(e) {
    setContent(e.target.value)
  }
  // Cool. Can you modify it to 5? 10? 50?
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <label style={{ marginBottom: "12px", textAlign: "center" }}>
        1 <br />
        <input type="text" value={text} onChange={changeText} />
      </label>
      <label style={{ marginBottom: "12px", textAlign: "center" }}>
        2 <br />
        <input type="text" value={text} onChange={changeText} />
      </label>
      <label style={{ marginBottom: "12px", textAlign: "center" }}>
        3<br />
        <input type="text" value={text} onChange={changeText} />
      </label>
      <label style={{ marginBottom: "12px", textAlign: "center" }}>
        4<br />
        <input type="text" value={text} onChange={changeText} />
      </label>
      <label style={{ marginBottom: "12px", textAlign: "center" }}>
        5<br />
        <input type="text" value={text} onChange={changeText} />
      </label>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<MultiInput />, root);