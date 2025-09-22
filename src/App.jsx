import { useState } from 'react'
import './App.css'

function App() {

  const state = useState()

  let likes = 0;
  return (
    <div className='App'>
      <button onClick={() => likes += 1}>increment</button>
      <button onClick={() => likes -= 1}>decrement</button>
      <div>{likes}</div>
    </div>
  );
}

export default App
