import express from 'express';
import db from './basedatos.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:1989' // o el puerto donde corre tu frontend
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola funciona");
});

app.get('/api/publicaciones', async (req, res) => {
    console.log("Se llego al endpoint get");
    try {
        const [rows] = await db.query('SELECT * FROM publicaciones');
        console.log(rows);

        res.status(201).json({
            message: 'Publicaciones recabadas con exito',
            publicaciones: rows
        });

    }catch (error){
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las publicaciónes' });
    }
})

app.post('/api/publicaciones', async (req, res) => {
    console.log("Se llego al endpoint");
    try {
        const formPublicacion = req.body;
        console.log(formPublicacion);

        const params = [
            formPublicacion.nombre,
            formPublicacion.especie,
            formPublicacion.raza,
            formPublicacion.color,
            formPublicacion.lat,
            formPublicacion.long
        ];

        const [result] = db.query(
            'INSERT INTO publicaciones (nombre, especie, raza, color, latitud, longitud) VALUES (?, ?, ?, ?, ?, ?)',
            params
        );

        res.status(201).json({
            message: 'Publicación creada exitosamente',
            id: result.insertId
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la publicación' });
    }
});

const puerto = 1984;

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});