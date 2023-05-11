import Task from "./Task";

const TaskList = ({tasks, description, deleteTask, toggleTask, enterEditMode}) => {
    return (
      <ul className="ulTask">
        {tasks.sort((a, b) => b.id - a.id).map(task => (
          <Task
            key={task.id}
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
