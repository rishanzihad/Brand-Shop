import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:
    [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/data.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addedcart',
        element:<PrivateRoute><AddedCart></AddedCart></PrivateRoute>
      },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('http://localhost:4005/carts')
      },
      {
        path:'//update/:id',
        element:<PrivateRoute><UpdateCart></UpdateCart></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:4005/products/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:()=>fetch('http://localhost:4005/products')
        
    },
      {
        path:'/products/:brandName',
        element:<PrivateRoute> <FilterProduct></FilterProduct>  </PrivateRoute>,
        loader:()=>fetch("http://localhost:4005/products")
      }
    ]
  },
]);
import './index.css'
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Layout from './LayOut/Layout';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AddedCart from './Pages/Added Cart/AddedCart';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import FilterProduct from './Components/BrandName/FilterProduct';
import UpdateCart from './Pages/UpdateCart/UpdateCart';
import Details from './Pages/Details/Details';
import MyCart from './Pages/MyCart/MyCart';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
