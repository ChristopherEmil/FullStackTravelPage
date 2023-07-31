import React, { useState } from "react";
import { useContext } from "react";
import { ListVuelosContext } from "../../../context/ListVuelosContext";

function SearchVuelo(props) {
  const [busqueda, setBusqueda] = useState("");

  const { SearchVuelodata } = useContext(ListVuelosContext);
  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  };

  const buscarVuelo = () => {
    props.SearchVuelodata(busqueda);
  };
  return (
    <div className="flex items-start">
      <input
        className=" block  m-1 py-2 px-3 border-2 border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="text"
        value={busqueda}
        onChange={handleInputChange}
        placeholder="Ingrese la ID del vuelo"
      />
      <button
        className="bg-blue-600 py-2 px-3 m-1 text-white active:bg-blue-600 hover:bg-blue-900 font-bold uppercase text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={buscarVuelo}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchVuelo;
