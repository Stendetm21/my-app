const InputCreateTask = ({ newTask, setNewTask, handleCreateTask }) => {

  return (
    <form onSubmit={handleCreateTask} className="input-create-task">
        <input className="input-task" type="text" placeholder="New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            required
        />
        <button type="submit">Add</button>
    </form>
  );
}
export default InputCreateTask;