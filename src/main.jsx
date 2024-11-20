import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import AboutPage from './Pages/AboutPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage></LandingPage>,
  },
  {
    path: '/about',
    element: <AboutPage></AboutPage>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
