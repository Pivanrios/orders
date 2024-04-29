import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Orders from './assets/components/Orders.jsx';
import Form from './assets/components/Form.jsx';

const router = createBrowserRouter(//version 6.4 of react-router
  createRoutesFromElements(
      <Route path='/' >
        <Route path='takeOrder' element={<Form/>}/>
        <Route path='orders' element={<Orders/>}/>
      </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
