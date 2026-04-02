import express from "express";
const app = express();

const publicaciones = [
  { id: 1, especie: "perro", raza: "labrador", ubicacion: "guadalajara", nombre: "Juanito" },
  { id: 2, especie: "gato", raza: "siames", ubicacion: "zapopan", nombre: "Aguacate" },
  { id: 3, especie: "perro", raza: "pug", ubicacion: "guadalajara", nombre: "Manchitas" },
  { id: 4, especie: "perro", raza: "labrador", ubicacion: "cdmx", nombre: "Toby" }
];

app.get('/api/publicaciones', (req, res) => {
  const { ubicacion, especie, raza } = req.query;

  var resultados = publicaciones;

  if (ubicacion) {
    resultados = resultados.filter(p => p.ubicacion === ubicacion);
  }

  if (especie) {
    resultados = resultados.filter(p => p.especie === especie);
  }

  if (raza) {
    resultados = resultados.filter(p => p.raza === raza);
  }

  res.json(resultados);
});

app.listen(1984, () => {
    console.log("Servidor en puerto 1984");
});