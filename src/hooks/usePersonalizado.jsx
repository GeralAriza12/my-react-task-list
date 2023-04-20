import { useEffect, useState } from 'react'
import useLocalStorage from "./useLocalStorage";

export function usePersonalizado() {
  const [tasks, setTasks] = useLocalStorage('task-list', []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null)
  const [counter, setCounter] = useState(Number)

  console.log(typeof counter)
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
    [addTask, enterEditMode, updateTask, deleteTask, closeEditMode, toggleTask,
      tasks, editedTask, isEditing, counter ]
  )
}
