
import './App.css';
import React, { useState } from 'react';

function App() {
  const parent = "AppParent";
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState(false);
  const [formValue, setFormValue] = useState("");

  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  const changeColor = () => {
    setBgColor(!bgColor);
  }
  const formHandle = (e) => {
    setFormValue(e.target.value);
    
  }

  return (
    <>
      <div className={bgColor ? "red" : "App"}>
        <div className='counter'>
          <button onClick={increment}>+</button>
          {counter}
          <button onClick={decrement}>-</button>
        </div>
        <button onClick={changeColor}>Change Color</button>
        <h1>Welcomw to my site</h1>
        <Child parent={parent} />
      </div>
      <input type="text" value={formValue} onChange={formHandle} />
      <h2>Form Data is:{formValue}</h2>
    </>
  );
}
function Child(props) {
  return (
    <h1>Hey,I am a child,my parent is {props.parent}</h1>
  );
}
export default App;
