import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskEdit from './components/TaskEdit'
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage('task-list.tasks', []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null)

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div>
      < Header />
      {isEditing && (<TaskEdit editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode}/>)}
      <TaskForm addTask={addTask}/>
      {tasks && (<TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode}/>)}
      {/* <div id='infoClear'>
        <h4>Tienes x tareas pendientes</h4>
        <button id='button2'>Eliminar todo</button>
      </div> */}
    </div>
  )
}

export default App