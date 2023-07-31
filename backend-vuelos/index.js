const express = require('express');
//const router = express.Router();
const connection = require('./database/connection');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

/* app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' })) */  
//
//Añadir nuevo destino
app.post('/api/guardardestino', (req, res) => {
  const data = req.body;
  //console.log(data);
  const sql = `INSERT INTO Destinos ( Ciudad, País, Descripción) VALUES (?, ?, ?)`;
  connection.query(sql,[
    data.ciudad,
    data.pais,
    data.descripcion
  ],(error)=>{
    if(error){
      console.error('Error al ejecutar la consulta:', error);
      return res.status(500).json({ error: 'Error al guardar los datos' });
    }
    else{
      console.log('Datos guardados correctamente');
      return res.status(200).json({ message: 'Datos guardados correctamente' });
    }
  }) 

})

//Añadir nuevo origen
app.post('/api/guardarorigen', (req, res) => {
  const data = req.body;
  const sql = `INSERT INTO Origen ( Ciudad, País) VALUES (?, ?)`;
  connection.query(sql,[
    data.ciudad,
    data.pais
  ],(error)=>{
    if(error){
      console.error('Error al ejecutar la consulta:', error);
      return res.status(500).json({ error: 'Error al guardar los datos' });
    }
    else{
      console.log('Datos guardados correctamente');
      return res.status(200).json({ message: 'Datos guardados correctamente' });
    }
  })

})

// Añadir vuelos
app.post('/api/guardar', (req, res) => {
    const data = req.body; // Obtener los datos enviados en el cuerpo de la solicitud
    const sql = `INSERT INTO Vuelos ( ID_aerolínea, ID_origen, ID_destino, Fecha, Hora, Duración, Precio) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    // Realizar las operaciones necesarias con los datos recibidos
  //  console.log(data); // Imprimir los datos recibidos en la consola
  
    // Puedes realizar acciones adicionales, como guardar los datos en una base de datos
    connection.query(sql, [
      data.idaerolinea,
      data.idorigen,
      data.iddestino,
      data.fecha,
      data.hora,
      data.duracion,
      data.precio,
    ], (error, results, fields) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        return res.status(500).json({ error: 'Error al guardar los datos' });
      }
      console.log('Datos guardados correctamente');
      return res.status(200).json({ message: 'Datos guardados correctamente' });
    });
  });
// Traer datos de los vuelos
app.get('/api/vuelos', (req, res) => {
  const query = 'SELECT d.ID_destino,o.ID_origen,a.ID_aerolínea, d.Ciudad AS CiudadDestino, d.País AS PaisDestino, d.Descripción, v.ID_vuelo, v.Fecha, v.Hora, v.Duración, v.Precio, a.Nombre AS NombreAerolinea, a.País AS PaísAerolinea, o.Ciudad AS CiudadOrigen, o.País AS PaisOrigen FROM Destinos d JOIN Vuelos v ON d.ID_destino = v.ID_destino JOIN Aerolíneas a ON v.ID_aerolínea = a.ID_aerolínea JOIN Origen o ON v.ID_origen = o.ID_origen;';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener datos de MySQL: ', error);
      res.status(500).send('Error del servidor');
    } else {
     // res.json(results);
     const vuelos = results.map((vuelo) => ({
      ...vuelo,
      Fecha: vuelo.Fecha.toISOString().split('T')[0],
    }));
    res.json(vuelos);
    }
  });
}); 
//Eliminar los vuelos
app.delete('/api/deletevuelos/:id',(req,res)=>{
  const id = req.params.id;
  const sql = `DELETE FROM vuelos WHERE vuelos.ID_vuelo = ?`;
  connection.query(sql, [
    id
  ], (error, results, fields) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      return res.status(500).json({ error: 'Error al eliminar el vuelo' });
    }
    console.log('vuelo eliminado correctamente');
    return res.status(200).json({ message: 'vuelo eliminado correctamente' });
  });
  console.log(id) 
})

//actualizar los vuelos
app.put('/api/updatevuelo', (req, res) => {
  // Obtener los datos enviados desde el cliente
 const { ID_vuelo, Fecha, Hora, Duración, Precio,ID_destino,ID_origen,ID_aerolínea } = req.body;

  // Construir la consulta de actualización
  const query = `UPDATE Vuelos
                 SET ID_destino = '${ID_destino}',
                 ID_origen = '${ID_origen}',
                 ID_aerolínea = '${ID_aerolínea}', 
                 Fecha = '${Fecha}',
                     Hora = '${Hora}',
                     Duración = ${Duración},
                     Precio = ${Precio}
                 WHERE ID_vuelo = ${ID_vuelo}`;
  // Ejecutar la consulta en la base de datos
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al actualizar datos en MySQL: ', error);
      res.status(500).send('Error del servidor');
    } else {
      res.json({ mensaje: 'Datos actualizados correctamente' });
    }
  }); 
});


app.get('/api/aerolineas', (req, res) => {
  const query = 'SELECT * FROM aerolíneas';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener datos de MySQL: ', error);
      res.status(500).send('Error del servidor');
    } else {
      res.json(results);
    }
  });
}); 
app.get('/api/destino', (req, res) => {
  const query = 'SELECT * FROM Destinos';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener datos de MySQL: ', error);
      res.status(500).send('Error del servidor');
    } else {
      res.json(results);
    }
  });
}); 
app.get('/api/origen', (req, res) => {
  const query = 'SELECT * FROM Origen';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener datos de MySQL: ', error);
      res.status(500).send('Error del servidor');
    } else {
      res.json(results);
    }
  });
}); 
//Login , register
app.post('/api/login', (req, res) => {
  //const query = 'SELECT * FROM usuarios WHERE username=? AND password=?';
  const query = 'SELECT * FROM `usuarios` WHERE username=? AND password=?;';
  const data = req.body;
//  console.log(data)
  connection.query(query,
     [
      data.username,
      data.password
    ] , (error, results) => {
    if (error) {
      console.error('Error al obtener datos de MySQL: ', error);
      res.status(500).send('Error del servidor');
    } else {
      if(results.length > 0){
        res.status(200).send(results[0])
      
      }
      else{
        res.status(400).send("Usuario no Existe")
      }
    }
  }); 
}); 


app.listen(4000, () => {
	console.log("corriendo en el puerto 4000")
})
module.exports = app;