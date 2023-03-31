
import Menu from './components/Menu/Menu'
import { Routes, Route } from 'react-router-dom'
import rutas from './routes/index'

interface rutas { path: string; element: Element; }

function App() {

  return (
    <>
      <main className='font-sans'>
        <div className='mt-[90px]'>
          <Menu />
        </div>
        <Routes>
          {rutas.map( ruta => {
            return <Route path={ ruta.path} key={ruta.path}  element={ruta.element}></Route>
        })} 
        </Routes>
      </main>
    </>
  )
}

export default App
