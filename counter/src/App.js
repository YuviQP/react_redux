import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>Incrementa</button>
    </div>
  );
}

export default App;
