import React,{ useContext, useEffect, useState} from 'react'
import { useParams } from "react-router";
import { ListVuelosContext } from "../../context/ListVuelosContext";

import SearchVuelo from "../Vuelo/SearchVuelo";
import SearchCardVuelo from './SearchCardVuelo';
import { LoandingPlane } from '../Loanding/LoandingPlane';
import FilterSearchPageVuelos from './FilterSearchPageVuelos';
function SearchPageVuelos() {
  const { data } = useContext(ListVuelosContext);
  const [result, setresult] = useState();
  const [loading, setloading] = useState(true);
  const [filterSearch, setFilterSearch] = useState({});

  let params = useParams();
  useEffect(() => {
    setTimeout(() => {
      setresult(data/* .filter((n) => n.ID_origen === parseInt(params.ID_origen) && n.ID_destino === parseInt(params.ID_destino) && n.Fecha === params.fecha ) */);
      setloading(!loading);
      const aerolineas = Array.from(new Set(data.map((vuelo) => vuelo.NombreAerolinea)));
      const updataOrigen = aerolineas?.reduce((acc, item) => {
        acc[item] = true;
        return acc;
      }, {});
      setFilterSearch(updataOrigen)
  }, 2000);  
  }, [data,params]);

 // setFilterSearch(updataOrigen)
//console.log(updataOrigen)


  const handleCheckboxChange = (event) => {
     const { name, checked } = event.target;
    setFilterSearch((prevSeleccionadas) => ({
      ...prevSeleccionadas,
      [name]: checked,
    }));  
  };
  //console.log(filterSearch)
  const aerolineasFiltradas = data.filter((aerolinea) =>{
    if (Object.keys(filterSearch).length === 0) {
      // Si no hay aerolíneas seleccionadas, mostrar todos los vuelos
      return true;
    } else {
      // Mostrar los vuelos asociados con las aerolíneas seleccionadas
      return filterSearch[aerolinea.NombreAerolinea];
    }
  });
 // console.log(aerolineasFiltradas)
 if(loading){
  setTimeout(() => {
    setloading(false);
}, 2000);  
  return (
    <div className='md:container md:mx-auto mt-5 loadingplane'>
     <SearchVuelo></SearchVuelo>
     <LoandingPlane></LoandingPlane>

    </div>
  )
}
else{ 
  return (
    <div className='md:container md:mx-auto mt-5'>
      <h1> </h1>
      <SearchVuelo></SearchVuelo>
      <div className='flex mt-5'>
      <div className='w-48 ml-4'>
          <FilterSearchPageVuelos handleCheckboxChange={handleCheckboxChange}></FilterSearchPageVuelos>
          </div>
      {aerolineasFiltradas?.length > 0 ? (
    
         
          <div>
          
          {aerolineasFiltradas.map((data, index) => (
                <SearchCardVuelo key={index} data={data}></SearchCardVuelo>
             ))}
      </div>
        
          ) : (
            <div>
  
              <p>NO hay vuelos</p>
              </div>

            
          )}
          </div>
    </div>
  )
}
}
  


export default SearchPageVuelos
