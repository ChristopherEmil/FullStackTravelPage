import React, { useState, useEffect, useContext } from 'react'
import { Navigate,Route } from 'react-router-dom'
import ListVuelos from '../components/Admin/ListVuelos/ListVuelos'
import  {ListVuelosContext}  from "../context/ListVuelosContext"
const RouteController = props => {

    const {isAuth,init } = useContext(ListVuelosContext);
    const { component: Component, isAuthenticated, ...rest } = props
    

   useEffect(init, [])

  //  return isAuth ? <Component {...rest} /> : <Navigate to='/login' />

   return isAuth ? Component  : <Navigate to='/login' />
   //return Component
}

export default RouteController