import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; */

import Vuelos from './components/Vuelos.jsx'

import Hoteles from './components/Hoteles.jsx'
import PageVuelo from './components/PageVuelo/PageVuelo.jsx'
import Root/* , { loader as rootLoader } */ from "./routes/root";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './components/Admin/Add.jsx'
import ListVuelos from './components/Admin/ListVuelos/ListVuelos.jsx'
import { ListVuelosContextProvider } from './context/ListVuelosContext.jsx'
import SearchPageVuelos from './components/Vuelo/SearchPageVuelos.jsx';
import Home from './components/Home.jsx';
import { ThemeProvider } from "@material-tailwind/react";
import Login from './components/views/Login/login.jsx'
import RouteController from './routes/RouteController.jsx'
import Profile from './components/views/Dashboard/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        exact: true,
        element: <Login />,
      },
      {
        path: "vuelos",
        element: <Vuelos />,
      },
      {
        path: "hoteles",
        element: <Hoteles />,
      },
       {
         path: "pagevuelo/:ID_vuelo",
         element: < PageVuelo/>,
       }, 
       {
        path: "add",
        element: <RouteController component={< Add/>}/>,
      }, 
      {
        path: "listvuelos",
       // element: < ListVuelos/>,
       element: <RouteController component={< ListVuelos/>}/>,
       //element: < ListVuelos/>,
      },
      {
        path: "searchpagevuelos/:ID_origen?/:ID_destino?/:fecha?/:pasajeros?",
        element: <SearchPageVuelos />,
      },
      {
        path: "profile",
       // element: < ListVuelos/>,
       element: <RouteController component={< Profile/>}/>,
       //element: < ListVuelos/>,
      },
      
    ],
  },
]);
//console.log(router)
ReactDOM.createRoot(document.getElementById('root')).render(
/*   <React.StrictMode> */
 <ListVuelosContextProvider>
    <ThemeProvider>

<RouterProvider router={router}  />
 {/*    <App /> */}
 </ThemeProvider>


 </ListVuelosContextProvider>
  /* </React.StrictMode> */,

)
