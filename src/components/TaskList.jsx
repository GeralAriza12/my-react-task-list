import Task from "./Task";

const TaskList = ({tasks, description, deleteTask, toggleTask, enterEditMode}) => {
  // Operador ternario para asegurarse de que taskssiempre sea una matriz y evitar el error  "Error de tipo no detectado".
  const tasksArray = Array.isArray(tasks) ? tasks : [];

    return (
      <ul className="ulTask">
        {tasksArray.sort((a, b) => b.id - a.id).map(task => (
          <Task
            key={task._id}
            task={task}
            description={description}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))}
      </ul>
    )
}

export default TaskList;
