import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ListVuelosContext } from "../../../context/ListVuelosContext";
import ModalEdit from "./ModalEdit";
import SearchVuelo from "./SearchVuelo";
function ListVuelos() {
  const { data, deleteVuelodata, EditVuelodata } =
    useContext(ListVuelosContext);
  const [resultado, setResultado] = useState([]);
  useEffect(() => {
    setResultado(data);
  }, [data]);
  function EditVuelo(id) {
    /*     const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas actualizar este vuelo?"
    ); */
    const url = `http://localhost:4000/api/updatevuelo`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((response) => {
        console.log("Datos actualizados correctamente");
        EditVuelodata(id);
        // Realizar acciones adicionales después de la actualización exitosa
      })
      .catch((error) => {
        console.error("Error al actualizar datos:", error);
        // Manejar el error de la actualización
      });
  }
  function DeleteVuelo(id) {
    const url = `http://localhost:4000/api/deletevuelos/${id}`;
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este vuelo?"
    );
    if (confirmDelete) {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            deleteVuelodata(id);
            console.log("El vuelo fue eliminado correctamente.");
          } else {
            console.error("Error al eliminar el vuelo.");
          }
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud de eliminación:", error);
        });
    }
  }
  function SearchVuelodata(searchid) {
    if (searchid === "") {
      setResultado(data);
    } else {
      const vueloEncontrado = resultado.filter((id) =>
        id.ID_vuelo.toString().includes(searchid)
      );
      setResultado(vueloEncontrado);
    }
  }
  return (
    <div className="contaimd:container md:mx-autoner"><br />
      <h2> Componente para admin para eliminar y editar vuelos</h2><br />
      <SearchVuelo SearchVuelodata={SearchVuelodata}></SearchVuelo>
      <div>
        {resultado.length > 0 ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3"> Aerolinea</th>
                  <th className="px-6 py-3"> Origen</th>
                  <th className="px-6 py-3"> Destino</th>
                  <th className="px-6 py-3"> Fecha</th>
                  <th className="px-6 py-3"></th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {resultado.map((data, index) => (
                  <tr
                    key={data.ID_vuelo}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{data.ID_vuelo}</td>
                    <td className="px-6 py-4">{data.NombreAerolinea}</td>
                    <td className="px-6 py-4">
                      {data.CiudadOrigen}({data.PaisOrigen})
                    </td>
                    <td className="px-6 py-4">
                      {data.CiudadDestino}({data.PaisDestino})
                    </td>
                    <td className="px-6 py-4">{data.Fecha}</td>
                    <td className="px-6 py-4">
                      <ModalEdit
                        key={index}
                        propsdata={data}
                        EditVuelo={EditVuelo}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-red-500 text-white active:bg-red-600 hover:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => DeleteVuelo(data.ID_vuelo)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No hay vuelos disponibles</p>
        )}
      </div>
    </div>
  );
}
export default ListVuelos;
