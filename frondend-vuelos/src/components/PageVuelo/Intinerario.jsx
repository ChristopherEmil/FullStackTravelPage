import React, {useState}from 'react'
import { FaPlaneDeparture,FaPlaneArrival, FaPlane } from 'react-icons/fa';
import { useContext } from "react";
import { ListVuelosContext } from "../../context/ListVuelosContext";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect } from 'react';
export default function Intinerario(props) {
  const [data, setData] = useState(props.propsdata);
  const [hora, setHora] = useState();
  const [fecha, setFecha] = useState();
  const [duracion, setDuracion] = useState();
   useEffect(() => {
    const horaOriginal = data.Hora;
    const minutosAIncrementar = data.Duración;
             // Crear un objeto de fecha y hora basado en la hora original
    const fechaHora = new Date(`2000-01-01T${horaOriginal}`);
             // Añadir los minutos a la hora
     fechaHora.setMinutes(fechaHora.getMinutes() + minutosAIncrementar);
       // Obtener la nueva hora en formato HH:mm:ss
       setHora(fechaHora.toTimeString().split(" ")[0]);
       const fechaOriginal = data.Fecha;
       const fechaFormateada = format(new Date(fechaOriginal), "eee, dd MMM", { locale: es });
       setFecha(fechaFormateada);  

       function convertirMinutosAHoras(minutos) {
        const horas = Math.floor(minutos / 60); // Obtener las horas completas
        const minutosRestantes = minutos % 60; // Obtener los minutos restantes
        return `${horas} horas con ${minutosRestantes} minutos`;
      }
      setDuracion(convertirMinutosAHoras(data.Duración))
   }, []);
 

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Itinerario <FaPlane className='inline-block'/></h2>
     <div className="itinerario flex">
            

            <div className="header">
              <h4>{data.NombreAerolinea}</h4>
            </div>
            <div className="infovuelo flex flex-1 items-center">
              <div className="infosalida flex-1 py-12 ">
              
                <span> {data.Hora} <FaPlaneDeparture className='inline-block' /></span>
                <div>
                  <span>{fecha}</span>
                </div>
                <span>
                  <span>{data.CiudadOrigen} </span>
                  <span>({data.PaisOrigen})</span>
                </span>
              </div>
              <div className="escala flex-1">
******************* <br />
 Sin Escala
              </div>
              <div className="infollegada py-12 flex-1">
              <span> {hora}</span> <FaPlaneArrival className='inline-block'/>
                <div>
                  <span>{fecha} </span>
                </div>
                <span>
                <span>{data.CiudadDestino} </span>
                  <span>({data.PaisDestino})</span>
                </span>
              </div>
            </div>
            <div className="duracion flex-1">
              
              <span> {duracion}</span>

            </div>
          </div>
    </div>
  )
}
