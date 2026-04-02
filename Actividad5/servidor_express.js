import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static('public'));

/*
  La verdad me gusta mucho como express simplifica la tarea de crear el servidor y los endpoints.
  Lo hace de una manera que es intuitiva, ademas de que como reduce drasticamente la cantidad de codigo
  por escribir, encontrar errores es mucho mas rapido.
*/

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bienvenida.html'));
});

app.get('/arbol', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'arbol.jpg'));
});

app.get('/api/mascotas', (req, res) => {
  const mascotas = {
      "mascotas": [
        {"nombre": "Pikachu", "color": "Amarillo"},
        {"nombre": "Juanito", "color": "Azul"}
  ]};  

  res.status(200).json(mascotas);
});

app.get('/perfiles', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});

app.get('/adoptantes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'adoptantes.html'));
});

app.get('/api/adoptantes', (req, res) => {
  const adoptantes = {
    "adoptantes": [
      {"nombre": "Genaro", "ubicacion": "Guadalajara"},
      {"nombre": "Isaac", "ubicacion": "Zacatecas"}
    ]};

    res.status(200).json(adoptantes);
});

app.get('/equipo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'equipo.html'));
});

app.get('/opinion', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'opinion.html'));
});

app.use((req, res, next) => {
  res.status(404).send("La princesa esta en otro castillo.");
});

const puerto = 1984;

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});