import React, { useState,useEffect } from "react";
import Select from "react-select";
import { Button  } from "@material-tailwind/react";
import axios from 'axios';

export default function ({onSubmit}) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countriesData = response.data.map(country => ({
          value: country.translations.spa.common,
          label: country.translations.spa.common,
          svg: country.flags.svg,
          altname:country.altSpellings
        }));
        setCountries(countriesData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  /* const countries = [
    {
      value: "ar",
      label: "Argentina",
      cities: ["Buenos Aires", "Córdoba", "Rosario"],
      svg:"https://mainfacts.com/media/images/coats_of_arms/es.svg"
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
  ]; */

  const handleSelectCountry  = async (selectedOption) => {

    setSelectedCountry(selectedOption);

    try {
      const response = await axios.get('http://api.geonames.org/searchJSON', {
        params: {
          q: selectedOption.altname[0],
          country: selectedOption.altname[0],
          maxRows: 10,
          username: 'christophere0510'
        }
      });
      const cities = response.data.geonames.map((city) => ({
        value: city.name,
        label: city.name
      }));
      setCity(cities)
      //return cities;
    } catch (error) {
      console.error(error);
    }
 setSelectedCity(null); 
  };

  const handleSelectCity = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const cityOptions = selectedCountry
   /*  ? selectedCountry.cities.map((city) => ({ value: city, label: city }))
    : [] */;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const datosjuntos={
      tipo:"origen",
      ciudad:selectedCity.label,
      pais:selectedCountry.label
    }
    onSubmit(datosjuntos);
   /* 
 */
  };

  return (
    <div className="container">
  <h2 className="text-2xl font-bold">Añadir Origen</h2>
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
        getOptionLabel={option => (
          <div className="flex items-center gap-2">
            <img src={option.svg} alt={option.label} style={{ height: '20px', marginRight: '8px' }} />
            {option.label}
          </div>
        )}
        getOptionValue={option => option.value}
      />
      
    </div>
    <div>
      <label htmlFor="city" className="block font-medium mb-1">
        Ciudad:
      </label>
      <Select
        id="city"
        options={city}
        value={selectedCity}
        onChange={handleSelectCity}
        isSearchable={true}
        placeholder="Buscar ciudad..."
        className="w-full"
      />
    </div>
  </div>
  <div className="mt-4">
    <Button className="btn btn-primary" onClick={handleSubmit}>
      Enviar
    </Button>
  </div>
</div>
  );
}
