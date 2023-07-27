import Header from '../components/Header';
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import TaskEdit from '../components/TaskEdit'
import { usePersonalizado } from '../hooks/usePersonalizado';

const Tareas = () => {
    const [postTask, enterEditMode, updateTask, deleteTask, closeEditMode, toggleTask,
    tasks, editedTask, isEditing] = usePersonalizado();

    return (
        <div className='appTask'>
            < Header />
            {isEditing && (<TaskEdit editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode}/>)}
            <TaskForm addTask={postTask}/>
            {tasks && (<TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode}/>)}
        </div>
    )
}

export default Tareas;