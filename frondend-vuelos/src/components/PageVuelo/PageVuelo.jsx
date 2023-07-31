import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import "./PageVuelo.css";
import Intinerario from "./Intinerario";
import { useContext } from "react";
import { ListVuelosContext } from "../../context/ListVuelosContext";
import InfoClient from "./InfoClient";
import CardPagevuelo from "./CardPagevuelo";
import Maleta from "./Maleta";
import Seat from "./Seat";
import ContactForm from "./ContactForm";
import { LoandingPlane } from "../Loanding/LoandingPlane";
import { BsPersonFillAdd } from "react-icons/bs";
export default function PageVuelo() {
  let params = useParams();
  //console.log(params)
  const { data } = useContext(ListVuelosContext);
  const [loading, setloading] = useState(true);
  const [passengers, setPassengers] = useState([
    {
      Nombre: "",
      Apellido: "",
      genero: "",
      Fecha: "",
      maleta:"",
    },
  ]);
  const AddPassenger = () => {
    setPassengers((prevPassengers) => [
      ...prevPassengers,
      {
        Nombre: "",
        Apellido: "",
        genero: "",
        Fecha: "",
        maleta:"",
      },
    ]);
  };
  const handlePassengerInfoChange = (event, index) => {
    const { name, value } = event.target;
    setPassengers((prevPassengerInfo) =>
      prevPassengerInfo.map((passenger, i) =>
        i === index ? { ...passenger, [name]: value } : passenger
      )
    );
  };
  const deletePassenger = (index) => {
    if (index >= 0 && index < passengers.length) {
      const newData = [...passengers]; // Copia del array original
      newData.splice(index, 1); // Eliminar el elemento en el índice especificado
      setPassengers(newData); // Eliminar un elemento en el índice dado
    }
  };
  const result = data.find(
    (item) => item.ID_vuelo === parseInt(params.ID_vuelo)
  );
  if (loading) {
    setTimeout(() => {
      setloading(false);
    }, 2000);
    return (
      <div className="container loadingplane">
        <LoandingPlane></LoandingPlane>
      </div>
    );
  } else {
    return (
      <div className="md:container md:mx-auto mt-5   parent">
        <div className="">
          <h1 className="text-3xl font-bold mb-4 flex">
            Tu Viaje a {result.CiudadDestino}
          </h1>
          <br />

          <div className="right-section absolute right-7 ...">
            <CardPagevuelo propsdata={result} passengers={passengers}></CardPagevuelo>
          </div>

          <div className="left-section">
            <Intinerario propsdata={result}></Intinerario>
            {/*  <InfoClient propsclientdata={clientdata} propshandleChange={() => {}}></InfoClient><br /> */}

            <h2 className="text-2xl font-bold mb-4"> Datos del Pasajero</h2>

            {passengers.map((passenger, index) => (
              <InfoClient
                key={index}
                onPassengerInfoChange={(event) =>
                  handlePassengerInfoChange(event, index)
                }
                deletePassenger={() => deletePassenger(index)}
                passenger={passenger}
                indexN={index}
              />
            ))}
            <div className="flex justify-center my-5 mr-40">
              <button
                onClick={AddPassenger}
                className="border border-green-600 text-green-500 text-center h-14 w-20 rounded-lg "
              >
                <BsPersonFillAdd className="inline-block "/>
              </button>
            </div>

            <Maleta propsclientdata={passengers} onPassengerInfoChange={handlePassengerInfoChange
                }></Maleta>
            <Seat></Seat>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    );
  }
}
