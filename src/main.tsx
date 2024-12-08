import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './Components/Header/ChangeThemes'
import { Home } from './Layout/Home'



const router = createBrowserRouter([
  {
    path: '/E-Commerce',
    element: <Home/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider> 
  </StrictMode>,
)
