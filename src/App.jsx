import { useEffect, useState } from 'react'
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
  const [counter, setCounter] = useState([])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
    setCounter((prevState) => prevState + 1)
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
    setCounter((prevState) => prevState - 1)
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

  useEffect(()=>{
    let count = localStorage.getItem('counter')
    if (count){
      setCounter (JSON.parse(count))
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('counter', JSON.stringify(counter))
  }, [counter])

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