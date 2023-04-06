import { useState } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'

 const TaskForm = ({addTask})  => {
  const [task, setTask] = useState("");

  const addSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
      <form onSubmit={addSubmit}>
      <div>
        <label htmlFor="task">¿Qué tareas tienes?</label>
        <input className="input" type="text" id="task" placeholder='¿Qué tareas tienes?' required 
        value={task}
        onInput={(e) => setTask(e.target.value)}/>
        
      </div>
      <button className="btn" aria-label="Add Task" type='submit'><PlusIcon/></button>
    </form>
  )
}

export default TaskForm