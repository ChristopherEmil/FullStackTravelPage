import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Select from "react-select";
import { Outlet, Link } from "react-router-dom";
import { ListVuelosContext } from "../../context/ListVuelosContext";
import { set } from "date-fns";

function SearchVuelo() {
  const { dataOrigen, dataDestino } = useContext(ListVuelosContext);

  const updataOrigen = dataOrigen?.map((item) => {
    return {
      value: item.ID_origen,
      label: item.Ciudad + " (" + item.País + ")",
    };
  });
  const updataDestino = dataDestino?.map((item) => {
    return {
      value: item.ID_destino,
      label: item.Ciudad + " (" + item.País + ")",
    };
  });
  const [selectedOrigen, setSelectedOrigen] = useState({
    value: 1,
    label: "Madrid (España)",
  });
  const [selectedDestino, setSelectedDestino] = useState({
    value: 3,
    label: "Punta Cana (Republica Dominicana)", 
  });
  const [count, setCount] = useState(1);
  const [datachangeFecha, setDatachangeFecha] = useState(getFormattedDate());
  function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // Agregar un 0 inicial si el mes o el día tienen un solo dígito
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }
  const handleSelectOrigen = (selectedOption) => {
    setSelectedOrigen(selectedOption);
  };
  const handleSelectDestino = (selectedOption) => {
    setSelectedDestino(selectedOption);
  };
  const handleChangeFecha = (event) => {
    const { name, value } = event.target;
    setDatachangeFecha(event.target.value);
  };
  function handleClick(operacion) {
    if (operacion === "suma") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  }
  return (
    <div className="flex items-center gap-4 bg-blue-500 h-32">
    <div className="flex-1 ml-10" >
      <label htmlFor="origen">Origen:</label>
      <Select
        id="origen"
        options={updataOrigen}
        value={selectedOrigen}
        onChange={handleSelectOrigen}
        isSearchable={true}
        placeholder="Buscar origen..."
      />
    </div>
    <div className="flex-1">
      <label htmlFor="destino">Destino:</label>
      <Select
        id="destino"
        options={updataDestino}
        value={selectedDestino}
        onChange={handleSelectDestino}
        isSearchable={true}
        placeholder="Buscar destino..."
      />
    </div>
    <div className="flex-1">
      <label htmlFor="fecha">Fecha</label><br />
      <input
        type="date"
        id="fecha"
        className="form-control"
        name="fecha"
        value={datachangeFecha}
        onChange={handleChangeFecha}
      />
    </div>
    <div className="flex-1">
      <label htmlFor="fecha">Pasajeros</label>
      <div className="flex items-center">
        <button onClick={() => handleClick("suma")}>+</button>
        <span className="mx-2">{count}</span>
        <button onClick={() => handleClick("resta")}>-</button>
      </div>
    </div>
    <div className="flex-1">
      <div className="mt-4">
        <Link
          to={`/searchpagevuelos/${selectedOrigen.value}/${selectedDestino.value}/${datachangeFecha}/${count}/`}
        >
          <button className=" w-24 rounded-full bg-cyan-500 hover:bg-cyan-600 ...">Buscar</button>

        </Link>
      </div>
    </div>
  </div>
  );
}

export default SearchVuelo;
