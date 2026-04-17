import http from 'http';
import url from 'url';

const p = {
    "hola": "que tal",
    "nombre": "genaro"
}

async function obtenerMusica(){
    const response = await fetch('https://www.theaudiodb.com/api/v1/json/123/search.php?s=coldplay');
    const datos = await response.json();
    return datos.artists[0].strBiographyEN;
}

const servidor = http.createServer(async (req, res) => {
    console.log("Alguien me mando una solicitud");
    res.writeHead(200, { 'Content-Type': 'application/json'});

    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;

    /*
    if (queryParams.x == 2016){
        res.end(JSON.stringify(p));
    }else{
        res.end(JSON.stringify({
            "quiero": "la libertad",
            "porfavor": "quiero ser libre plis"
        }));
    }
    */

    res.end(JSON.stringify(await obtenerMusica()));
})

const puerto = 1984;

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
})
