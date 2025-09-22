import { useState } from 'react'
import './App.css'

function App() {

  const [likes, setlikes] = useState(0)
  const [value, setValue] = useState('')

  function increment() {
    setlikes(likes + 1)
  };

  function decrement() {
    setlikes(likes - 1)
  };

  return (
    <div className='App'>
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <input onChange={(e => setValue(e.target.value))} value={value}></input>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App
