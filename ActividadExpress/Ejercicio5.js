import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Necesario para recrear __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/bienvenida', (req, res) => {
  res.send('Esto no es una página html');
});

app.get('/otraBienvenida', (req, res) => {
  res.sendFile(path.join(__dirname, 'bienvenida.html'));
});

app.post("/api/otro", (req, res) => {
  console.log("El cuerpo de la peticion: ", req.body);
  res.sendStatus(200);
});

app.listen(1984, () => {
  console.log('Up and up');
});