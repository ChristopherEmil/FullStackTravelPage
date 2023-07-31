import React, { useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { useContext } from "react";
import { ListVuelosContext } from "../../context/ListVuelosContext";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect } from "react";
export default function InfoClient(props) {
  return (
    <div className="FormPasajero w-3/4">
      <div className="flex items-center  justify-between mb-4 mt-4">
        <h5 className="text-lg font-medium mr-4">Pasajero {props.indexN  + 1}</h5>
        {props.indexN > 0 ? (
       <button onClick={props.deletePassenger} className="text-red-500 border border-red-600 rounded-lg ">
     Eliminar pasajero
       </button>
          ) : (

            <></>
          )}
        
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label
            htmlFor="firstNameInput"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="firstNameInput"
            name="Nombre"
            value={props.passenger.Nombre}
            onChange={props.onPassengerInfoChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label
            htmlFor="lastNameInput"
            className="block text-sm font-medium text-gray-700"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lastNameInput"
            name="Apellido"
            value={props.passenger.Apellido}
            onChange={props.onPassengerInfoChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 mr-2">
          <label
            htmlFor="genderSelect"
            className="block text-sm font-medium text-gray-700"
          >
            Género
          </label>
          <select
            id="genderSelect"
            onChange={props.onPassengerInfoChange}
            value={props.passenger.genero}
            name="genero"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Selecciona una opción</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>
        <div className="w-1/2 ml-2">
          <label
            htmlFor="birthdateInput"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="birthdateInput"
            value={props.passenger.Fecha}
            onChange={props.onPassengerInfoChange}
            name="Fecha"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
