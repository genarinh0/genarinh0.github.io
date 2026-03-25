import http from 'http';
//Escribe un comentario explicando para qué sirve http
/*
    http es un modulo que viene incluido con Node.js, que le permite transferir datos por medio del 
    protocolo HTTP. Permite crear servidores http, hacer peticiones de clientes, manejar los headers,
    metodos y los status codes, y procesar peticiones asi como respuestas. Nos deja hacer todo esto sin
    dependencias externas.

    Referencia: 
        - Technology Diaries. (2025, April 27). Mastering the Node.js HTTP Module: A Complete Guide. Medium. 
        https://medium.com/@TechnologyDiaries/mastering-the-node-js-http-module-a-complete-guide-6f538f892b82
*/

import fs from 'fs';
//Escribe un comentario explicando para qué sirve fs
/*
    fs es un modulo que tambien viene incluido con Node.js, es corto para File System asi que nos brinda 
    la funcionalidad de guardar, acceder y administrar datos en nuestro sistema. Podemos hacer varias
    cosas archivos existentes y nuevos con metodos como readFile y writeFile.

    Referencia:
        - What Is the Node.js fs (File System) Module? (2018). HeyNode. 
        https://heynode.com/tutorial/what-fs-file-system-module/#:~:text=Tap%20to%20unmute-,About%20the%20fs%20module,Append%20data%20to%20a%20file
*/



    //Esta función deberá mostrar una página HTML
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
           /*
                El 500 esta definiendo un codigo de estado que significa que hubo un error interno del 
                servidor. Todo el writeHead esta llenando el header de la respuesta para el cliente. 
           */
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        /*
            El 200 esta definiendo ahora un codigo de estado que significa un okay, como diciendo que todo
            salio bien y lo sepa el que hizo la peticion. 
        */
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las mascotas
    function getMascotas(req, res) {
        //Esto representa un objeto JSON de una mascota
        //Agrega otra mascota
        const mascotas = {
          "mascotas": [
            {
              "nombre": "Pikachu",
              "color": "Amarillo"
            },
            {
              "nombre": "Juanito",
              "color": "Azul"
            }
        ]};  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      /*
          La funcion stringify lo que hace es tomar un objeto o variable JavaScript y lo que hace
          es convertirlo en un string de tipo JSON. Esto lo necesitamos porque aunque se vea parecido
          el objeto a un JSON no lo es hasta que lo convertimos a el gracias a la funcion.
          Como al hacer el post se espera que mandemos un JSON valido, entonces primero convertimos nuestro
          objeto sino daria un error por no ser lo que espera.

          Referencia:
            - Dixit, A. (2022, September 29). Scaler. Scaler Topics. 
            https://www.scaler.com/topics/json-stringify/
      */

      res.end(JSON.stringify(mascotas));
    }

  
    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarAdoptantes(req, res) {
        //Construye una página básica adpotantes.html
        fs.readFile('adoptantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las adoptantes
    function getAdoptantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
      const adoptantes = {
        "adoptantes": [
          {
            "nombre": "Genaro",
            "ubicacion": "Guadalajara"
          },
          {
            "nombre": "Isaac",
            "ubicacion": "Zacatecas"
          }
        ]};

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(adoptantes));
    }

    function mostrarEquipo(req, res) {
      fs.readFile('equipo.html', 'utf-8', (error, data) => {
        if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
      });
    }

    function mostrarOpinion(req, res) {
      fs.readFile('opinion.html', 'utf-8', (error, data) => {
        if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
      });
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('La princesa esta en otro castillo.');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/mascotas') {
        getMascotas(req, res);
      } else if (url === '/api/adoptantes') {
        getAdoptantes(req, res);
      } 
      else if (url === '/mascotas') {
        mostrarMascotas(req, res);
      } 
      else if (url === '/adoptantes') {
        mostrarAdoptantes(req, res);
      }
      else if(url === '/perfiles') {
        mostrarPerfil(req, res);
      }
      else if(url === '/equipo') {
        mostrarEquipo(req, res);
      }
      else if(url === '/opinion') {
        mostrarOpinion(req, res);
      }
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Usando la etiqueta img si puedo verla

      //Agrega una ruta /opinion
      //Haz una página opinion.html

      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      /*
        ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? 
        ¿Para tu vida persona?
        ¿Qué es el freedombox?
        
      */
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html