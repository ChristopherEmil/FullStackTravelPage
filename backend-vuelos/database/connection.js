const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAMEDB,
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a MySQL: ', error);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

module.exports = connection;