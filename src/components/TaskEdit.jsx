import { useEffect, useState } from "react"
import { CheckIcon } from '@heroicons/react/24/solid'

const TaskEdit = ({editedTask, updateTask, closeEditMode})  => {
  const [updatedTask, setUpdatedTask] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }
    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const editSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTask})
  }

  return (
    <div role="dialog" aria-labelledby="editTask" onClick={(e) => {e.target === e.currentTarget && closeEditMode()}} >
      <form onSubmit={editSubmit}>
        <div>
          <label htmlFor="editTask">Edita la tarea</label>
          <input className="input" type="text" id="editTask" placeholder='Edita la tarea' required 
          value={updatedTask}
          onInput={(e) => setUpdatedTask(e.target.value)}/>
        </div>
        <button className="btn" aria-label={`Confirma la tarea Editada ${updatedTask}`} type='submit'><CheckIcon /></button>
      </form>
    </div>
    
  )
}
export default TaskEdit