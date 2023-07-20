import { useEffect, useState } from 'react'
import axios from "axios"

export function usePersonalizado() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [editedDescription, setEditedDescription] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null)

  useEffect(() => {
    getTask()
  },[tasks]);

  async function postTask(task) {
    try {
      const response = await axios.post('http://localhost:3000/create', task);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async function getTask() {
    try {
      const response = await axios.get('http://localhost:3000/read');
      setTasks(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTask(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/delete/${id}`);
      setTasks(response);

      getTask();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateTask(id) {
    try {
      console.log(id);
      const putTaskBody = {
        name: id.name, 
        description: id.description,
        checked: id.checked
      }

      console.log(putTaskBody);

      const response = await axios.put(`http://localhost:3000/update/${id._id}`, putTaskBody);

      setEditedTask(response.name);
      setEditedDescription(response.description);
      setIsChecked(response.checked);

      closeEditMode();
      getTask();
    } catch (error) {
      console.error(error);
    }
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
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
    [postTask, enterEditMode, updateTask, deleteTask, closeEditMode, toggleTask,
      tasks, editedTask, isEditing]
  )
}
