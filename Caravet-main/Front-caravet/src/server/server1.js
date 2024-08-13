import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const app = express();

// Configuración de MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'buzon_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para guardar la sugerencia en la base de datos
app.post('/guardar', (req, res) => {
  const { sugerencia, email } = req.body;
  const sql = 'INSERT INTO sugerencias (sugerencia, email) VALUES (?, ?)';
  db.query(sql, [sugerencia, email], (err, result) => {
    if (err) {
      console.error('Error al guardar la sugerencia:', err);
      return res.status(500).send('Error al guardar la sugerencia');
    }
    console.log('Sugerencia guardada correctamente');
    res.status(200).send('Sugerencia guardada correctamente');
  });
});

// Iniciar el servidor
const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});

