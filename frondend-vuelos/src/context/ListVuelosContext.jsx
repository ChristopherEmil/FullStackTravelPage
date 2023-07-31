import { da } from "date-fns/locale";
import { createContext } from "react";
import React, { useState, useEffect } from "react";
export const ListVuelosContext = createContext();

export function ListVuelosContextProvider(props) {
  const [data, setData] = useState([]);
  const [dataAerolineas, setdataAerolineas] = useState();
  const [dataDestino, setdataDestino] = useState();
  const [dataOrigen, setdataOrigen] = useState();
  useEffect(() => {
    fetchData();
    init();
  }, []);
  function deleteVuelodata(id) {
    console.log(id);
    setData(data.filter((n) => n.ID_vuelo !== id));
  }
  function EditVuelodata(id) {
    const updata = data.map((item) => {
      if (item.ID_vuelo === id.ID_vuelo) {
        return id; // Reemplazar el objeto si coincide con el idvuelo
        // console.log("existe")
      }
      return item; // Mantener el objeto sin cambios
    });
    //setData(updata)
    fetchData();
  }
/*   function SearchVuelodata(searchid) {
    const vueloEncontrado = data.find((id) => id.ID_vuelo === parseInt(searchid));

    if (vueloEncontrado) {
     // setData(vueloEncontrado);
     console.log(vueloEncontrado)
    }  else {
      //setData(null);
      console.log("no hay datos dato")
    } 

  } */


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/vuelos");
      const jsonData = await response.json();
      setData(jsonData);
      const response1 = await fetch("http://localhost:4000/api/destino");
      const jsonData1 = await response1.json();
      setdataDestino(jsonData1);
      const response2 = await fetch("http://localhost:4000/api/origen");
      const jsonData2 = await response2.json();
      setdataOrigen(jsonData2);
      const response3 = await fetch("http://localhost:4000/api/aerolineas");
      const jsonData3 = await response3.json();
      setdataAerolineas(jsonData3);
    } catch (error) {
      console.error("Error al obtener datos: ", error);
    }
  };

 //variable para comprobar el inicio de session
 const [isAuth, setIsAuth] = useState(true)

 const init = () => {
     if (!localStorage.getItem("auth")) {
         setIsAuth(false)
     } else {
         const auth = JSON.parse(localStorage.getItem('auth'))
         if (auth === 'yes') {
             setIsAuth(true)
         } else {
             setIsAuth(false)
         }
     }
 } 

  return (
    <ListVuelosContext.Provider
      value={{
        data: data,
        dataAerolineas: dataAerolineas,
        dataDestino: dataDestino,
        dataOrigen: dataOrigen,
        deleteVuelodata: deleteVuelodata,
        EditVuelodata: EditVuelodata,
        isAuth:isAuth,
        init:init
      //  SearchVuelodata:SearchVuelodata
      }}
    >
      {props.children}
    </ListVuelosContext.Provider>
  );
}
