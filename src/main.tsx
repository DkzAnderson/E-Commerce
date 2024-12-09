import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './Components/Header/ChangeThemes'
import { Home } from './Layout/Home'
import { ProductDetails } from './Components/ProductDetails/ProductDetails'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: 'details/:id',
      element: <ProductDetails/>
    }

  ],
  {
    basename: '/E-Commerce/'
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider> 
  </StrictMode>,
)
