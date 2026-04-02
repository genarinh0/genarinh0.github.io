import express from 'express';
import mysql from 'mysql2';

const app = express();
app.use(express.json());

app.listen(1984, () => {
  console.log('Up and up');
});

const connection = mysql.createConnection({
    host: "mysql-31efc894-tec-f26e.e.aivencloud.com",
    port: 20902,
    user: "avnadmin",
    password: "AVNS_GJwkU29Bq2KswwA_MOt",
    database: "defaultdb"
});

connection.connect(error => {
  if (error) throw error;
  console.log("Conectada");
});

const consultaSQL = "SELECT * FROM donantes";

app.get('/bd', (req, res) => {
    connection.query(consultaSQL, (error, resultados) => {
    if (error) throw error;

    res.send(resultados);
    connection.end();
  });
})