import { setDate } from 'date-fns'
import { fi } from 'date-fns/locale';
import React from 'react'

function CardPagevuelo({propsdata,passengers}) {

   function changeJSON(array){


        const optionValue = array;
        const valores = optionValue.split(".");
        
        const precio = valores[0]; // "25"
        const peso = valores[1]; // "17"
        return `Maleta ${peso}kg ${precio} €`
    


   }
  return (
    <div className='border border-black h-auto w-60 rounded-lg '>

      
        <div className='sidebar-image '>
        <div className='w-auto' >
        <img className="rounded-t-lg" src="https://dam.melia.com/melia/accounts/f8/4000018/projects/127/assets/8e/71078/1d918976ab9c7cb3d08032fbcfbd9e23-1639123945.jpg?fp=1771.5,1328.5&width=2000&height=1500" alt="" />
      </div>
            <div className='title text-center '>
                <h4>Tu viaje a {propsdata.CiudadDestino}</h4>
            </div>
            <div className='pasajero'>
                <h2 className='text-blue-700 '>Pasajero</h2>
                <p>Cantidad { passengers.length} {passengers.length*propsdata.Precio} €</p>

            </div>
            <div className='maletas'>
                <h2 className='text-blue-700 '>Maletas</h2>
                
                {passengers.map((pasajero, index)=>{

                    if(pasajero.maleta !=="" && pasajero.maleta != 0){
                    return    <p key={index}> Pasajero {index+1} {changeJSON(pasajero.maleta)} 
                        </p>
                    }
                    else{
                        return <p key={index}>Pasajero {index+1} No tiene maleta extra</p>
                    }
                })}
                

            </div>
            <div className='service'>
                <h4 className='text-blue-700'>Servicio </h4>
                <p>Basico: 0 €</p>
            </div>
            <div className='total'>
                <h4 className='text-blue-700'>Precio Total</h4>
                <p>Cantidad de pasajeros</p>
            </div>

        </div>
    </div>
  )
}

export default CardPagevuelo
