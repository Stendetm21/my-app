import classes from './MyButton.module.css';
import { useState } from 'react';
const MyButton = ({ children, create, ...props }) => {

  const [post, setPost] = useState({text: '', description: ''});

      const addNewTask = (e) => {
        // логика добавления новой задачи
        const newTask = { 
          id: Date.now(), 
          text: post.text, 
          description: post.description, 
          completed: false
         };
        props.create(newTask);
        //
        setPost({text: '', description: ''});
  }
  return (
    <button onClick={addNewTask} className={classes.myBtn} {...props}>
        {children}
    </button>
  );
}
export default MyButton;