import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'

const ColorsInput = () => {
  const [color, setColor] = useState('');

  function seletColor(e) {
    setColor(e.target.value)
  }
  const divStyle ={
    backgroundColor: color,
    width:300,
    height:300,
    marginTop:100
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>בחר צבע</h1>
      <select onChange={seletColor}>
        <option value="blue">blue</option>
        <option value="red">red</option>
        <option value="green">green</option>
      </select>
      <div style={divStyle}></div>
    </div>
  )
};

ColorsInput.inital = {
  color:"white"
}

const root = document.querySelector('main');
ReactDOM.render(<ColorsInput />, root);