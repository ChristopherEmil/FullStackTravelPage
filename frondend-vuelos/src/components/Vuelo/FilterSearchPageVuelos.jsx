import React,{useContext} from 'react'
import { Checkbox } from "@material-tailwind/react";
import { ListVuelosContext } from "../../context/ListVuelosContext";

function FilterSearchPageVuelos({handleCheckboxChange}) {
  const { dataAerolineas } = useContext(ListVuelosContext);

  return (
    <div>
       <h1>Filtro de busqueda</h1>
      <div>
        <h1>Precios</h1>
        
      </div>
       <div className='check'>
      <h1>Aerolineas</h1>

      {dataAerolineas.map((data, index) => (
                 <Checkbox
                 key={index}
                 id={data.ID_aerolínea}
                 defaultChecked
                 ripple={false}
                 className="rounded-full w-6 h-6 hover:before:opacity-0 hover:scale-105 bg-blue-500/25 border-blue-500/50 transition-all"
                 label={data.Nombre}
                 onChange={handleCheckboxChange}
                 name={data.Nombre}
              />
             ))}
      
       </div>
    </div>
  )
}

export default FilterSearchPageVuelos
