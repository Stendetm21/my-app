import React, { useState } from 'react';
import classes from './AddTaskForm.module.css';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
const AddTaskForm = ({ create, ...props }) => {
  const [post, setPost] = useState({ text: '', description: '' });

      const addNewTask = (e) => {
        e.preventDefault();
        const newTask = { 
          id: Date.now(), 
          text: post.text, 
          description: post.description, 
          completed: false
         };
        create(newTask);
        setPost({text: '', description: ''});
  }
    return (
        <form className={classes.addTaskForm}>
            <MyInput
                value={post.text}
                onChange={e => setPost({...post, text: e.target.value})}
                type="text"
                placeholder="Task name"
            />
            <MyInput
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
                type="text"
                placeholder="Description"
            />
            <MyButton onClick={addNewTask}>Create</MyButton>
        </form>
    );
}

export default AddTaskForm;