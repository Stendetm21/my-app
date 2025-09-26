import { useState } from 'react'
import './App.css'
import HeaderButton from './components/HeaderButton';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <HeaderButton />
        <HeaderButton />
        <HeaderButton />
        <HeaderButton />
      </div>
      <div className='content'></div>
    </div>
  );
}

export default App
