import { useState } from 'react'
import './App.css'
import HeaderButton from './components/HeaderButton';
import Task from './components/Task';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <HeaderButton />
        <HeaderButton />
        <HeaderButton />
        <HeaderButton />
      </div>
      <div className='content'>
        <Task task={{ id: 1, text: 'Learn React', completed: false }} onToggle={() => {}} onDelete={() => {}} />
        <Task task={{ id: 2, text: 'Build a Todo App', completed: true }} onToggle={() => {}} onDelete={() => {}} />
        <Task task={{ id: 3, text: 'Master JavaScript', completed: false }} onToggle={() => {}} onDelete={() => {}} />
        <Task task={{ id: 4, text: 'Explore CSS', completed: true }} onToggle={() => {}} onDelete={() => {}} />
          
      </div>
    </div>
  );
}

export default App
