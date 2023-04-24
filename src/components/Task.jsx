import { useState } from "react";
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const Task = ({ task, deleteTask, toggleTask, enterEditMode }) => {
    const [isChecked, setIsChecked] = useState(task.checked);

    const checkboxChange = (e) => {
        setIsChecked(!isChecked);
        toggleTask(task.id)
    }

    return(
    <li id="taskTarjet">
        <div id="tasks">
            <input className="checkbox" type="checkbox" checked={isChecked} onChange={checkboxChange} name={task.name} id={task.id} />
            <label htmlFor={task.id}> <strong>{task.name}</strong> {task.description}</label>
        </div>
        <div>
            <button className="buttonE" aria-label={`Update ${task.name} task`} onClick={()=> enterEditMode(task)}> <PencilSquareIcon width={24} height={24} /> </button>
            <button className="buttonB" aria-label={`Delete ${task.name} task`} onClick={()=> deleteTask(task.id)}>  <TrashIcon width={24} height={24} /> </button>
        </div>
    </li>
    );
}

export default Task;
