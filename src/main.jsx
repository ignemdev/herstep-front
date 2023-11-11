import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { appRouting}  from '@utils/routing/app.routing'

import '@assets/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouting} />
  </React.StrictMode>,
)
