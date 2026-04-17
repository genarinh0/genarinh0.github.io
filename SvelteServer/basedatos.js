import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bd_svelte"
});

const db = connection.promise();

console.log("Conectada");

export default db;
