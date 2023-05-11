import Header from '../components/Header';
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import TaskEdit from '../components/TaskEdit'
import { usePersonalizado } from '../hooks/usePersonalizado';

const Tareas = () => {
    const [addTask, enterEditMode, updateTask, deleteTask, closeEditMode, toggleTask,
    tasks, editedTask, isEditing] = usePersonalizado();

    return (
        <div>
            < Header />
            {isEditing && (<TaskEdit editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode}/>)}
            <TaskForm addTask={addTask}/>
            {tasks && (<TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode}/>)}
        </div>
    )
}

export default Tareas;