import React, { useState, useContext, useEffect } from "react";
import { ListVuelosContext } from "../../../context/ListVuelosContext";
import Select from "react-select";
import { Button  } from "@material-tailwind/react";

export default function ModalEdit(props) {
  const { dataAerolineas, dataDestino, dataOrigen } =
    useContext(ListVuelosContext);
  const [showModal, setShowModal] = useState(false);
  const [datachange, setdatachange] = useState({
    ...props.propsdata,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setdatachange((prevDataChange) => ({
      ...prevDataChange,
      [name]: value,
    }));
  };
  return (
    <>
      <button
        className="bg-blue-400 text-white active:bg-blue-600 hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        editar
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Editar Vuelos con el ID: {props.propsdata.ID_vuelo}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="modal-body">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <label
                          htmlFor="select1"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Aerolínea
                        </label>
                        <select
                          id="select1"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          onChange={handleChange}
                          name="ID_aerolínea"
                          value={datachange.ID_aerolínea}
                        >
                          {dataAerolineas?.map((opcion) => (
                            <option
                              key={opcion.ID_aerolínea}
                              value={opcion.ID_aerolínea}
                            >
                              {opcion.Nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="select2"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Origen
                        </label>
                        <select
                          id="select2"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          onChange={handleChange}
                          name="ID_origen"
                          value={datachange.ID_origen}
                        >
                          {dataOrigen?.map((opcion) => (
                            <option
                              key={opcion.ID_origen}
                              value={opcion.ID_origen}
                            >
                              {opcion.Ciudad} ({opcion.País})
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="select3"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Destino
                        </label>
                        <select
                          id="select3"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          onChange={handleChange}
                          name="ID_destino"
                          value={datachange.ID_destino}
                        >
                          {dataDestino?.map((opcion) => (
                            <option
                              key={opcion.ID_destino}
                              value={opcion.ID_destino}
                            >
                              {opcion.Ciudad} ({opcion.País})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex-1">
                        <label
                          htmlFor="fecha"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fecha
                        </label>
                        <input
                          type="date"
                          id="fecha"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          name="Fecha"
                          onChange={handleChange}
                          value={datachange.Fecha}
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="hora"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Hora
                        </label>
                        <input
                          type="time"
                          id="hora"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          name="Hora"
                          onChange={handleChange}
                          value={datachange.Hora}
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="precio"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Precio (€)
                        </label>
                        <input
                          type="number"
                          id="precio"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          step="0.01"
                          name="Precio"
                          onChange={handleChange}
                          value={datachange.Precio}
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="duracion"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Duración en minutos
                        </label>
                        <input
                          type="number"
                          id="duracion"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          name="Duración"
                          onChange={handleChange}
                          value={datachange.Duración}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <Button
                    onClick={() => {
                      setShowModal(false);
                      props.EditVuelo(datachange);
                    }}
                  >
                    Editar
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/*       <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={"#exampleModal" + props.propsdata.ID_vuelo}
      >
        Editar
      </button> */}
      {/*       <div
        className="modal fade"
        id={"exampleModal" + props.propsdata.ID_vuelo}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Editar vuelo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <label htmlFor="select1" className="form-label">
                    Aerolínea
                  </label>
                  <select
                    id="select1"
                    className="form-select"
                    onChange={handleChange}
                    name="ID_aerolínea"
                    value={datachange.ID_aerolínea}
                  >
                    {dataAerolineas?.map((opcion) => (
                      <option
                        key={opcion.ID_aerolínea}
                        value={opcion.ID_aerolínea}
                      >
                        {opcion.Nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="select2" className="form-label">
                    Origen
                  </label>
                  <select
                    id="select2"
                    className="form-select"
                    onChange={handleChange}
                    name="ID_origen"
                    value={datachange.ID_origen}
                  >
                    {dataOrigen?.map((opcion) => (
                      <option key={opcion.ID_origen} value={opcion.ID_origen}>
                        {opcion.Ciudad} ({opcion.País})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="select3" className="form-label">
                    Destino
                  </label>
                  <select
                    id="select3"
                    className="form-select"
                    onChange={handleChange}
                    name="ID_destino"
                    value={datachange.ID_destino}
                  >
                    {dataDestino?.map((opcion) => (
                      <option key={opcion.ID_destino} value={opcion.ID_destino}>
                        {opcion.Ciudad} ({opcion.País})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="fecha" className="form-label">
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    className="form-control"
                    name="Fecha"
                    onChange={handleChange}
                    value={datachange.Fecha}
                  />
                </div>
                <div className="col">
                  <label htmlFor="hora" className="form-label">
                    Hora
                  </label>
                  <input
                    type="time"
                    id="hora"
                    className="form-control"
                    name="Hora"
                    onChange={handleChange}
                    value={datachange.Hora}
                  />
                </div>
                <div className="col">
                  <label htmlFor="precio" className="form-label">
                    Precio (€)
                  </label>
                  <input
                    type="number"
                    id="precio"
                    className="form-control"
                    step="0.01"
                    name="Precio"
                    onChange={handleChange}
                    value={datachange.Precio}
                  />
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="duracion" className="form-label">
                      Duracion en minutos
                    </label>
                    <input
                      type="number"
                      id="duracion"
                      className="form-control"
                      name="Duración"
                      onChange={handleChange}
                      value={datachange.Duración}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => props.EditVuelo(datachange)}
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
