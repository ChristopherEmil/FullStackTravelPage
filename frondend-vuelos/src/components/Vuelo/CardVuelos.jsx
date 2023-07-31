import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Outlet, Link } from "react-router-dom";
export default function CardVuelos({ data }) {
  return (
    <div className="container">
      <div className="card max-w-sm bg-white border border-gray-200 rounded-lg ">
        <div className="imgcard">
          <img
            className="rounded-t-lg"
            src="https://dam.melia.com/melia/accounts/f8/4000018/projects/127/assets/8e/71078/1d918976ab9c7cb3d08032fbcfbd9e23-1639123945.jpg?fp=1771.5,1328.5&width=2000&height=1500"
            alt=""
          />
        </div>
        <div className="fecha">
          <p>{format(new Date(data.Fecha), "eee, dd MMM", { locale: es })}</p>
        </div>
        <div className="destino">
          <p>{data.CiudadDestino}</p>
        </div>
        <div className="precio">
          <p> {data.Precio} €</p>
        </div>
        <div>
          <Link className="btn btn-primary" to={`/pagevuelo/${data.ID_vuelo}`}>
            {" "}
            <button className=" w-24 rounded-full bg-cyan-500 hover:bg-cyan-600 ...">
              Reservar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
