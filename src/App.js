
import './App.css';
import React, { useState } from 'react';

function App() {
  const parent = "AppParent";
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <div className='counter'>
        <button onClick={increment}>+</button>
       {counter}
        <button onClick={decrement}>-</button>
      </div>
      <h1>Welcomw to my site</h1>
      <Child parent={parent} />
    </div>
  );
}
function Child(props) {
  return (
    <h1>Hey,I am a child,my parent is {props.parent}</h1>
  );
}
export default App;
