import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

const Menu = lazy(() => import("./components/Menu"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/SobreNosotros"));
const ListTask = lazy(() => import("./pages/Tareas"));


function App() {

  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Suspense fallback={<h2>Estamos procesando tu solucitud ...</h2>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/list-tasks' element={<ListTask />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App