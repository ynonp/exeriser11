import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'

const styles = {
  container: {
    marginBottom: "12px",
    textAlign: "center",
  },

  label: {
    marginBottom: "12px",
    textAlign: "center",
  }
};

const MultiInput = () => {
  const [text, setContent] = useState('');

  function changeText(e) {
    setContent(e.target.value)
  }
  // 1. Cool. Can you modify it to 5? 10? 50?
  // 2. It's generally better to have all styles defined in one place
  //    (instead of in the JSX)
  //    so for example we'd define a styles variable and use it
  return (
    <div style={styles.container}>
      <label style={styles.label}>
        1 <br />
        <input type="text" value={text} onChange={changeText} />
      </label>
      <label style={{}}>
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
