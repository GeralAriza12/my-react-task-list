import Task from "./Task";

const TaskList = ({tasks, deleteTask, toggleTask, enterEditMode}) => {
    return (
      <ul>
        {tasks.sort((a, b) => b.id - a.id).map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))}
      </ul>
    )
}

export default TaskList;
