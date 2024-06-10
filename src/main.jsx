import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/* import router from './router.jsx'
import { RouterProvider } from 'react-router-dom' */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
{/*     <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
