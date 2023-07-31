import React, { useState } from 'react';

const Seat = ({ passengerCount }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < passengerCount) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      }
    }
  };
  
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Selección de Asientos</h2>
      <p>Selecciona un asiento para cada pasajero:</p>
      <div className="seat-grid">
        {[...Array(passengerCount)].map((_, index) => (
          <div key={index}>
            <span>Pasajero {index + 1}</span>
            <div className="seat-row">
              {['A', 'B', 'C', 'D', 'E', 'F'].map((seatLetter) => (
                <button
                  key={seatLetter}
                  onClick={() => handleSeatSelect(`${index + 1}${seatLetter}`)}
                  className={`seat ${selectedSeats.includes(`${index + 1}${seatLetter}`) ? 'selected' : ''}`}
                  disabled={selectedSeats.length >= passengerCount && !selectedSeats.includes(`${index + 1}${seatLetter}`)}
                >
                  {`${index + 1}${seatLetter}`}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Seat
