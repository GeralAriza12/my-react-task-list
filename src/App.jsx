import './App.css'
import Header from './components/Header';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskEdit from './components/TaskEdit'
import { usePersonalizado } from './hooks/usePersonalizado';

function App() {
  const [addTask, enterEditMode, updateTask, deleteTask, closeEditMode, toggleTask,
    tasks, editedTask, isEditing, counter ] = usePersonalizado();

  return (
    <div>
      < Header />
      {isEditing && (<TaskEdit editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode}/>)}
      <TaskForm addTask={addTask}/>
      {tasks && (<TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode}/>)}
      <div id='infoClear'>
        <h4>{`El la lista hay: ${counter} tareas`}</h4>
      </div>
    </div>
  )
}

export default App