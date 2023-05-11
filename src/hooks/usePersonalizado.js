import { useEffect, useState } from 'react'
import useLocalStorage from "./useLocalStorage";

export function usePersonalizado() {
  const [tasks, setTasks] = useLocalStorage('task-list', []);
  const [editedTask, setEditedTask] = useState(null);
  const [editedDescription, setEditedDescription] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null)

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
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
        ? { ...t, name: task.name, description: task.description}

        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task, description) => {
    setEditedTask(task);
    setEditedDescription(description);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    [addTask, enterEditMode, updateTask, deleteTask, closeEditMode, toggleTask,
      tasks, editedTask, isEditing]
  )
}
