import { useState } from 'react'
import './App.css'
import HeaderButton from './components/HeaderButton';
import Task from './components/Task';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
    { id: 3, text: 'Master JavaScript', completed: false },
    { id: 4, text: 'Explore CSS', completed: true },
  ]);
  const [headerTitle, setHeaderTitle] = useState([
    { id: 1, title: 'All' },
    { id: 2, title: 'Active' },
    { id: 3, title: 'Completed' },
    { id: 4, title: 'Clear Completed' },
  ]);


  function toggleTask(id) {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, completed: !post.completed } : post
    ));
  }

  function deleteTask(id) {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className='App'>
      <div className='header'>
        {headerTitle.map((header) => (
          <HeaderButton key={header.id} title={header.title} />
        ))}
      </div>

      <div className='content'>
        {posts.map((post) => (
          <Task 
            key={post.id} 
            task={post}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
