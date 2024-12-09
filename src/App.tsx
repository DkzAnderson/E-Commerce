import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <main className='w-full min-h-screen flex'>
      <Outlet/>
    </main>
  )
}

export default App
