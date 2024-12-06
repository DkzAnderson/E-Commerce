import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




const router = createBrowserRouter([
  {
    path: '/',
    element: '',
    children: [
      {
        path: '/product-list',
        element: ''
      },

    ]
  },
  {

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
