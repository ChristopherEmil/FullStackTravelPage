import React, { useState } from "react";
import AddVuelos from "./Add/AddVuelos";
import AddDestino from "./Add/AddDestino";
import AddOrigen from "./Add/AddOrigen";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaPlaneDeparture,FaPlaneArrival, FaPlane } from 'react-icons/fa';
export default function Add() {
  // const [reloadChild, setReloadChild] = useState(false);
  const [datadestino, setdatadestino] = useState();

  const handleChildSubmit = async (data) => {
    // Lógica para enviar los datos al backend
    try {
      const response = await fetch(
        "http://localhost:4000/api/guardar" + data.tipo,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("Datos enviados correctamente");
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error en la solicitud: ", error);
    }
    // Actualizar el estado del padre para recargar el componente hijo
    setdatadestino(data);
    //console.log(data)
    //setReloadChild(!reloadChild);
  };
  const data = [
    {
      label: " vuelos",
      value: "AddVuelos",
      icon:<FaPlane></FaPlane>,
      desc: <AddVuelos propsdata={datadestino}></AddVuelos>,
    },
    {
      label: " Origen",
      value: "AddOrigen",
      icon:<FaPlaneDeparture></FaPlaneDeparture>,
      desc: <AddOrigen onSubmit={handleChildSubmit}></AddOrigen>,
    },
    {
      label: " Destino",
      value: "AddDestino",
      icon:<FaPlaneArrival></FaPlaneArrival>,
      desc: <AddDestino onSubmit={handleChildSubmit}></AddDestino>,
    },

    {
      label: " Aerolinea",
      value: "AddAerolinea",
      icon:<FaPlane></FaPlane>,
      desc: <AddDestino onSubmit={handleChildSubmit}></AddDestino>,
    },
  ];
  return (
    <div className="md:container md:mx-auto mt-5 ">
      <Tabs value="AddVuelos" orientation="vertical">
        <TabsHeader className="w-28">
          {data.map(({ label, value ,icon }) => (
           <Tab key={value} value={value} className="place-items-start">
           <div className="flex items-center gap-2">
            
             {label}
             {icon}
           </div>
         </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="">
          {data.map(({ value, desc}) => (
            <TabPanel key={value} value={value} className="py-0">
              <div style={{ height: "100rem" }}>{desc}</div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      
      {/*    <AddVuelos propsdata={datadestino}></AddVuelos>   <br/>
      <AddDestino onSubmit={handleChildSubmit}></AddDestino><br/>
      <AddOrigen onSubmit={handleChildSubmit}></AddOrigen><br/> */}
    </div>
  );
}
