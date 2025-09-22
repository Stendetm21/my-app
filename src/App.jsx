import { useState } from 'react'
import './App.css'

function App() {

  const [likes, setlikes] = useState(0)

  function increment {
    return setlikes(likes + 1)
  };

  function decrement {
    return setlikes(likes - 1)
  };

  return (
    <div className='App'>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <div>{likes}</div>
    </div>
  );
}

export default App
