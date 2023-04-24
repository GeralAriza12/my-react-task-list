import { useState } from "react"
import { useForm } from "react-hook-form"
import { PlusIcon } from '@heroicons/react/24/solid'

 const TaskForm = ({addTask})  => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("")
  const {register, handleSubmit, formState: {errors}} = useForm();


  const addSubmit = (e) => {
    addTask({
      name: task,
      description: description,
      checked: false,
      id: Date.now()
    })
    setTask("")
    setDescription("")
  }

  return (
      <form onSubmit={handleSubmit(addSubmit)}>
        <div className="formulario">
          <label htmlFor="task">¿Qué tareas tienes?</label>
          <input className="input" type="text" id="task" placeholder='¿Qué tareas tienes?'
          value={task}
          onInput={(e) => setTask(e.target.value)}
          {...register("tarea", {required:true, minLength: 3})}/>
          {errors.tarea?.type === 'required' && <span className="error">El nombre de la tarea es obligatoria</span> }
          {errors.tarea?.type === 'minLength' && <span className="error">La tarea debe contener por lo menos 3 caracteres</span>}

          <input className="input" type="text" id="description" placeholder="Descripción de tu tarea" 
          value={description}
          onInput={(e) => setDescription(e.target.value)}/>
        </div>
        <button className="btn" type='submit'><PlusIcon/></button>
    </form>
  )
}

export default TaskForm