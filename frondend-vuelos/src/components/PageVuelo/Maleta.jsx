import React, { useEffect, useState } from "react";

export default function Maleta({ propsclientdata, onPassengerInfoChange }) {
  //console.log(propsclientdata)

  const maletas=[{
    precio:"25",
    peso:"17",
  },{
  precio:"30",
  peso:"20",
},
{
precio:"37",
    peso:"25",
  },{

  precio:"40",
  peso:"30",
}
]

  return (
    <div className="maletas w-3/4">
      <h2 className="text-2xl font-bold mb-4">Añade Alguna maleta extra</h2>
      {propsclientdata.length > 0 /* &&
      !propsclientdata.every((data) =>
        Object.keys(data).every((key) => data[key] === "")
      ) */ ? (
        propsclientdata
          .filter((data) => Object.keys(data).length !== 0)
          .map((data, index) => {
            /* if (data.Nombre !== "") { */
              return (
                <div key={index} className="flex">
                  <label
                    htmlFor="genderSelect"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pasajero {index+1}:
                  </label>

                  <select
                    className="mt-1 block w-36 ml-28 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    id="suitSelect"
                    name="maleta"
                    onChange={(event)=>onPassengerInfoChange(event, index)}
                  >
                  
                    <option value="0">Selecciona una opción</option>
                    {maletas.map((maleta, index)=>(
                    
                      <option key={index} value={`${maleta.peso}.${maleta.precio}`}>{maleta.peso+" kg "+ maleta.precio+" €"}</option>
                    
                    ))}
                  </select>
                </div>
              );
            }
          /* } */)
      ) : (
        <p>No hay pasajero</p>
      )}
    </div>
  );
}
