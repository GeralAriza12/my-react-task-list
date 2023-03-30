// En este componente debe visualizarse la lista completa de tareas.
import Task from "./Task";

function TaskList(props) {
    const { task } = props;
    return (
        <div>
            <div id="taskList">
                {task.map(task => {
                    return (
                        <Task
                            key={task.id}
                            charge={task.charge}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TaskList;