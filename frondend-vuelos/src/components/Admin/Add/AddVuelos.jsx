import React, { useEffect, useState, useContext } from "react";
import { ListVuelosContext } from "../../../context/ListVuelosContext";
import Select from "react-select";
import { Button  } from "@material-tailwind/react";

export default function AddVuelos(props) {
  const [datachange, setdatachange] = useState({
    idaerolinea: "",
    idorigen: "",
    iddestino: "",
    fecha: "",
    hora: "",
    precio: "",
    duracion: "",
  });
  const { dataOrigen, dataDestino, dataAerolineas } =
    useContext(ListVuelosContext);
    const updataAerolineas = dataAerolineas?.map((item) => {
      return {
        value: item.ID_aerolínea,
        label: item.Nombre,
        tipo:"aerolinea",
        
      };
    });
  const updataOrigen = dataOrigen?.map((item) => {
    return {
      value: item.ID_origen,
      label: item.Ciudad + " (" + item.País + ")",
      tipo:"origen",
      svg:item.icon
    };
  });
  const updataDestino = dataDestino?.map((item) => {
    return {
      value: item.ID_destino,
      label: item.Ciudad + " (" + item.País + ")",
      tipo:"destino"
    };
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/guardar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datachange),
      });

      if (response.ok) {
        // Se envió correctamente
        console.log("Datos enviados correctamente");
        // Restablecer el estado o redireccionar a otra página, si es necesario
        /*         setdatachange({
          idaerolinea: "",
          idorigen: "",
          iddestino: "",
          fecha: "",
          hora: "",
          precio: "",
    duracion: ""
        }); */
      } else {
        // Error al enviar los datos
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error en la solicitud: ", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
     setdatachange((prevDataChange) => ({
      ...prevDataChange,
      [name]: value,
    })); 
  };

  const handleChangeSelect=(selectOptions)=>{
      if(selectOptions.tipo ==="aerolinea"){
        setdatachange((prevDataChange) => ({
          ...prevDataChange,
          ["idaerolinea"]: selectOptions.value,
        })); 
      }
      else if(selectOptions.tipo ==="origen"){
        setdatachange((prevDataChange) => ({
          ...prevDataChange,
          ["idorigen"]: selectOptions.value,
        })); 
      }
      else if(selectOptions.tipo ==="destino"){
        setdatachange((prevDataChange) => ({
          ...prevDataChange,
          ["iddestino"]: selectOptions.value,
        })); 
      }
  }
  return (
    <div className="">
      <h2 className="text-2xl font-bold">Añadir vuelo</h2>
      <p className="text-gray-600">Añade nuevos vuelos para la agencia</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="">
          <label htmlFor="select1" className="form-label">
            Aerolínea
          </label>
          <br />
   <Select
        id="aerolinea"
        options={updataAerolineas}
        
        onChange={handleChangeSelect}
        isSearchable={true}
        placeholder="Buscar aerolinea..."
      />
        </div>
        <div>
          <label htmlFor="select2" className="form-label ">
            Origen
          </label>
          <br />
         
             <Select
        id="origen"
        options={updataOrigen}
        
        onChange={handleChangeSelect}
        isSearchable={true}
        placeholder="Buscar origen..."
      />
        </div>
        <div>
          <label htmlFor="select3" className="form-label">
            Destino
          </label>
          <br />
             <Select
        id="destino"
        options={updataDestino}
        
        onChange={handleChangeSelect}
        isSearchable={true}
        placeholder="Buscar destino..."
      />
        </div>
        <div>
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <br />
          <input
            type="date"
            id="fecha"
            className="form-control border border-black"
            name="fecha"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="hora" className="form-label">
            Hora
          </label>
          <br />
          <input
            type="time"
            id="hora"
            className="form-control border border-black"
            name="hora"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="precio" className="form-label">
            Precio (€)
          </label>
          <br />
          <input
            type="number"
            id="precio"
            className="form-control border border-black"
            step="0.01"
            name="precio"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="duracion" className="form-label">
            Duración en minutos
          </label>
          <br />
          <input
            type="number"
            id="duracion"
            className="form-control border border-black"
            name="duracion"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <form onSubmit={handleSubmit}>
            {/* ...código de los campos del formulario */}
            <Button  type="submit">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
