import express from 'express';

const app = express();

app.delete('/api/guardados/:id', (req, res) => {
	const { id } = req.params;
	const borrado = borrarGuardado(Number(id));

	if (!borrado) {
	return res.status(404).send('Guardado no encontrado');
}

	res.status(200).send('Publicacion Borrada de Guardados');
});

const guardados ={
    "publicaciones": [
        {"id": 1, "mascota": "perro"},
        {"id": 5, "mascota": "gato"},
        {"id": 10, "mascota": "pez"}
    ]
};

function borrarGuardado(id){
    const publicaciones = guardados.publicaciones;
    const index = publicaciones.findIndex(pub => pub.id === id);

    if (index === -1) {
        return false;
    }

    publicaciones.splice(index, 1);
    return true;
}

const puerto = 1984;

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});