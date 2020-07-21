import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'

const input = () => {
  const [text, setContent] = useState('');

  function changeText(e) {
    setContent(e.target.value)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
tinycolor("#000");
tinycolor("000");
tinycolor("#369C");
tinycolor("369C");
tinycolor("#f0f0f6");
tinycolor("f0f0f6");
tinycolor("#f0f0f688");
tinycolor("f0f0f688");
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<MultiInput />, root);