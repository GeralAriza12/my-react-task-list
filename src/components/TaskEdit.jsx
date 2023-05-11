import { useEffect, useState } from "react"
import { CheckIcon } from '@heroicons/react/24/solid'
import { Input, Stack } from '@chakra-ui/react'

const TaskEdit = ({editedTask, updateTask, closeEditMode})  => {
  const [updatedTask, setUpdatedTask] = useState(editedTask.name);
  const [updatedDescription, setUpdatedDescription] = useState(editedTask.description)

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
    updateTask({...editedTask, name: updatedTask, description: updatedDescription})
  }

  return (
    <div onClick={(e) => {e.target === e.currentTarget && closeEditMode()}} >
      <form onSubmit={editSubmit}>
        <Stack spacing={2}>
          <label htmlFor="editTask">Edita la tarea</label>
          <Input variant='flushed' htmlSize={40} type="text" id="editTask" placeholder='Edita la tarea' required 
          value={updatedTask}
          onInput={(e) => setUpdatedTask(e.target.value)}/>

          <Input variant='flushed' type="text" id="editDescription" placeholder='Edita la descripción'
          value={updatedDescription}
          onInput={(e) => setUpdatedDescription(e.target.value)}/>
          
        </Stack>
        <button className="btn" aria-label={`Confirma la tarea Editada ${updatedTask, updatedDescription}`} type='submit'><CheckIcon /></button>
      </form>
    </div>
    
  )
}
export default TaskEdit