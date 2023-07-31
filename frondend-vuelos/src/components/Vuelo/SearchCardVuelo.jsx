import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Outlet, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
function SearchCardVuelo({ data }) {
  function prueba(data) {
    const horaOriginal = data.Hora;
    const minutosAIncrementar = data.Duración;
    const fechaHora = new Date(`2000-01-01T${horaOriginal}`);
    // Añadir los minutos a la hora
    fechaHora.setMinutes(fechaHora.getMinutes() + minutosAIncrementar);
    return fechaHora.toTimeString().split(" ")[0];
  }

  return (
    <div>
      <Card className="flex-row w-full max-w-[48rem] mb-5">
        <CardBody className="w-4/5 shrink-0 m-0 rounded-r-none">
          <Typography>{data.NombreAerolinea}</Typography>

          <div className="infovuelo flex ml-5">
            <div className="infosalida">
              <span> {data.Hora} </span>
              <FaPlaneDeparture className="inline-block" />
              <div>
                <span>{data.Fecha}</span>
              </div>
              <span>
                <span>{data.CiudadOrigen} </span>
                <span>({data.PaisOrigen})</span>
              </span>
            </div>
            <div className="escala">
              ******************* <br />
              <span> {data.Duración} Minutos</span>{" "}
            </div>
            <div className="infollegada ml-5">
              <span> {prueba(data)}</span>{" "}
              <FaPlaneArrival className="inline-block" />
              <div>
                <span>{data.Fecha} </span>
              </div>
              <span>
                <span>{data.CiudadDestino} </span>
                <span>({data.PaisDestino})</span>
              </span>
            </div>
            <div className="duracion"></div>
          </div>
        </CardBody>
        <CardHeader className="w-2/5 shrink-0 m-0 rounded-r-none">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            <span>
              <h3> {data.Precio} €</h3>
            </span>
          </Typography>

          <Link className="btn btn-primary" to={`/pagevuelo/${data.ID_vuelo}`}>
            <Button variant="text" className="flex items-center gap-2">
              Reservar
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </Link>
        </CardHeader>
      </Card>
      
    </div>
  );
}

export default SearchCardVuelo;
