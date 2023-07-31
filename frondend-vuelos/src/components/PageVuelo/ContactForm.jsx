import React,{useState} from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    city: "",
    country: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar acciones con los datos del formulario
    console.log(formData);
    // Restablecer el formulario
    setFormData({
      email: "",
      confirmEmail: "",
      city: "",
      country: "",
      address: "",
      postalCode: "",
    });
  };

  return (
    <div className="ContacForm">
    <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="emailInput" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="emailInput"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmEmailInput" className="block text-sm font-medium text-gray-700">
            Confirmar Correo Electrónico
          </label>
          <input
            type="email"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="confirmEmailInput"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="cityInput" className="block text-sm font-medium text-gray-700">
            Ciudad
          </label>
          <input
            type="text"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="cityInput"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="countryInput" className="block text-sm font-medium text-gray-700">
            País
          </label>
          <input
            type="text"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="countryInput"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="addressInput" className="block text-sm font-medium text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="addressInput"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCodeInput" className="block text-sm font-medium text-gray-700">
            Código Postal
          </label>
          <input
            type="text"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="postalCodeInput"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-600 text-white py-3 px-3 ">Enviar</button>
    </form>
  </div>
  );
}

export default ContactForm
