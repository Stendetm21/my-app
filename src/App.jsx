import { useState } from 'react'
import './App.css'
import HeaderButton from './components/HeaderButton';
import Task from './components/Task';
import MyButton from './components/UI/MyButton';
import MyInput from './components/UI/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: 'Learn React', description: 'Учим основы React, компоненты, хуки и JSX.', completed: false},
    { id: 2, text: 'Build a Todo App', description: 'Создаём простое приложение Todo с возможностью добавлять, удалять и отмечать задачи.', completed: true },
    { id: 3, text: 'Master JavaScript', description: 'Прокачиваем знание JS: функции, массивы, объекты, асинхронность.', completed: false },
    { id: 4, text: 'Explore CSS', description: 'Разбираемся с Flexbox, Grid, анимациями и стилями.', completed: true },
  ]);

  const [headerTitle] = useState([
    { id: 1, title: 'All' },
    { id: 2, title: 'Active' },
    { id: 3, title: 'Completed' },
    { id: 4, title: 'Clear Completed' },
  ]);

  const [testProps, setTestProps] = useState('Test Props state');
  const [activeFilter, setActiveFilter] = useState('All');

  function testFunction() {
    if (testProps === 'Test Props state') {
      setTestProps('Updated Test Props state');
    } else {
      setTestProps('Test Props state');
    }
  }

  function toggleTask(id) {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, completed: !post.completed } : post
    ));
  }

  function deleteTask(id) {
    setPosts(posts.filter(post => post.id !== id));
  }

  function toggleOpen(id) {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, opened: !post.opened } : post
    ));
  }

  function setFilter(filter) {
    if (filter === 'Clear Completed') {
      setPosts(posts.filter(post => !post.completed));
      setActiveFilter('All'); // сброс фильтра
    } else {
      setActiveFilter(filter);
    }
  }

  // 🔥 вычисляем список прямо перед рендером
  const filteredPosts = posts.filter(post => {
    if (activeFilter === 'Active') return !post.completed;
    if (activeFilter === 'Completed') return post.completed;
    return true; // All
  });

  return (
    <div className='App'>
      <div className='header'>
        {headerTitle.map((header) => (
          <HeaderButton
            key={header.id}
            title={header.title}
            onClick={() => setFilter(header.title)} // обязательно пробрасываем обработчик!
          />
        ))}
      </div>

      <div className='content'>
        {filteredPosts.map((post) => (
          <Task
            key={post.id}
            task={post}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onOpen={toggleOpen}
          />
        ))}
      </div>
      <MyButton onClick={() => alert('Clicked!')}>Click Me</MyButton>
      <MyInput placeholder="New task" />
      <MyInput type="text" placeholder="description" />

      <TestComponent onTest={testFunction} props1={testProps} props2={'Prop 2'} props3={'Prop 3'} />
    </div>
  );
}

export default App;
