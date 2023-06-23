import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Layout/Home'
import Shop from './components/Shop/Shop'
import Order from './components/Orders/Order'
import Inventory from './components/Inventory/Inventory'
import Login from './components/LogIn/Login'
import cartProductsLoader from './components/Loaders/cartProduct'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvide router={router} /> */}
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
