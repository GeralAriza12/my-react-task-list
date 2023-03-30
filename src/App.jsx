import './App.css'
import { task } from './data'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {

  return (
    <div>
      < Header />
      <div>
        <input type="text" placeholder='Escribe tu nueva tarea'/>
        <button id='button1'>➕</button>
      </div>
      <TaskList task={task} />
      <div id='infoClear'>
        <h4>Tienes x tareas pendientes</h4>
        <button id='button2'>Eliminar todo</button>
      </div>
    </div>
  )
}

export default App
