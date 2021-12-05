import { useState } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import google from './google.png';

function App() {
  const [counter, setCounter] = useState<number>(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={increment}>Click here to increment the counter</button>
      <div>Counter: {counter}</div>
      <img src={google} alt="google" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('app loaded');
