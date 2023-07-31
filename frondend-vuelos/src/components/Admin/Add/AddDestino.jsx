import React, { useState } from "react";
import Select from "react-select";
import { Button  } from "@material-tailwind/react";

export default function AddDestino({ onSubmit }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [description, setDescription] = useState("");

  const countries = [
    {
      value: "ar",
      label: "Argentina",
      cities: ["Buenos Aires", "Córdoba", "Rosario"],
    },
    {
      value: "br",
      label: "Brasil",
      cities: ["Río de Janeiro", "Sao Paulo", "Salvador"],
    },
    { value: "co", label: "Colombia", cities: ["Bogotá", "Medellín", "Cali"] },
    {
      value: "es",
      label: "España",
      cities: ["Madrid", "Barcelona", "Valencia"],
    },
    {
      value: "us",
      label: "Estados Unidos",
      cities: ["Nueva York", "Los Ángeles", "Miami"],
    },
    {
      value: "mx",
      label: "México",
      cities: ["Ciudad de México", "Guadalajara", "Monterrey"],
    },
    { value: "pe", label: "Perú", cities: ["Lima", "Arequipa", "Cusco"] },
  ];

  const handleSelectCountry = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCity(null);
  };

  const handleSelectCity = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const cityOptions = selectedCountry
    ? selectedCountry.cities.map((city) => ({ value: city, label: city }))
    : [];

  const handleSubmit = async (event) => {
    event.preventDefault();
   /*  console.log('País seleccionado:', selectedCountry.label);
    console.log('Ciudad seleccionada:', selectedCity.label);
    console.log('Descripción:', description); */
    const datosjuntos={
      tipo:"destino",
      ciudad:selectedCity.label,
      pais:selectedCountry.label,
      descripcion:description
    }
    onSubmit(datosjuntos);
   /* 
 */
  };

  return (
<div className="container">
  <h2 className="text-2xl font-bold">Añadir destino</h2>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label htmlFor="country" className="block font-medium mb-1">
        País:
      </label>
      <Select
        id="country"
        options={countries}
        value={selectedCountry}
        onChange={handleSelectCountry}
        isSearchable={true}
        placeholder="Buscar país..."
        className="w-full"
      />
    </div>
    <div>
      <label htmlFor="city" className="block font-medium mb-1">
        Ciudad:
      </label>
      <Select
        id="city"
        options={cityOptions}
        value={selectedCity}
        onChange={handleSelectCity}
        isSearchable={true}
        placeholder="Buscar ciudad..."
        className="w-full"
      />
    </div>
  </div>

  <div className="mt-4">
    <div className="mb-1">
      <label htmlFor="description" className="block font-medium">
        Descripción:
      </label>
      <textarea
        id="description"
        value={description}
        onChange={handleDescriptionChange}
        className="form-control w-full h-32"
        placeholder="Ingrese una descripción..."
      />
    </div>

    <div className="mt-3">
      <Button className="btn btn-primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </div>
  </div>
</div>
  );
}
