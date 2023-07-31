import React, { useEffect, useState }  from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import CardVuelos from './Vuelo/CardVuelos';
import './Vuelo/CardVuelos.css';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {  useContext } from "react";
import  {ListVuelosContext}  from "../context/ListVuelosContext"
import SearchVuelo from './Vuelo/SearchVuelo';
import { Outlet, Link } from "react-router-dom";
import { LoandingPlane } from './Loanding/LoandingPlane';
//const date = new Date(dateString);
function Vuelos() {
  const [loading, setloading] = useState(true);
  const currentDate = new Date(); 
    const {data, deleteVuelodata} = useContext(ListVuelosContext);

    //Recodar hacer un useEffect para que actualice los datos
    const filteredData = data
    .filter((flight) => new Date(flight.Fecha) >= currentDate) // Filtrar vuelos con fecha mayor o igual a la actual
    .sort((a, b) => a.Precio - b.Precio); // Ordenar vuelos por precio
  const cheapestFlights = filteredData.slice(0, 4); // Obtener los 4 vuelos más baratos

    if(loading){
      setTimeout(() => {
        setloading(false);
    }, 2000);  
      return (
        <div className='container mx-auto loadingplane'>
          <LoandingPlane></LoandingPlane>
        </div>
      )
    }
    else{ 
  return (
    <div className='container mx-auto'>
        <div>
        <h1>Los mejores vuelos a buen precio</h1>
           <SearchVuelo></SearchVuelo>
        </div>
        <div>
            <h3>Lista de vuelos baratos desde España</h3>
            <p>puedes mirar los vuelos baratos desdee</p>
        </div>
        {(typeof data === 'undefined') ? (
          <p>Loading</p>
        ):(
          cheapestFlights.map((flight, index) => (
            <CardVuelos key={index} data={flight} />
          )) 
        )}

        </div>


  )}

}

export default Vuelos