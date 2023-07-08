import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testuser',
  password: 'testpass',
  database: 'invest',
});

export default connection;