import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//routes
import Products from '../src/pages/Products.jsx'
import Solutions from '../src/pages/Solutions.jsx'
import Resources from '../src/pages/Resources.jsx'
import Pricing from '../src/pages/Pricing.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'


const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/Products", element: <Products />},
  {path: "/Solutions", element: <Solutions />},
  {path: "/Resources", element: <Resources />},
  {path: "/Pricing", element: <Pricing />},
  {path: "*", element: <NotFoundPage />},


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
