import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Cards from './Components/Cards/Cards.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/category.json'),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader:()=>fetch('/gadget.json')
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader:()=>fetch('/gadget.json')
          }
        ]
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>,
      },
      {
        path:"/Dashboard",
        element:<Dashboard></Dashboard>
      },
     
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
