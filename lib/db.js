// db.js
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD

    // host: '91.194.76.170',
    // port: '3306',
    // database: 'lms',
    // user: 'lms',
    // password: 'ud4D1q?85',
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    console.log('222ERORRRRRRRRRRRRRR!!!!!!!!!!!!');
    return { error };
  }
}
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
// });

// // Connect to the server
// connection.connect((err) => {
//     if (err) {
//       // Return error if present
//       console.log("Error occurred", err);
//     } else {
//       // Create database
//       console.log("Connected to MySQL Server");
//       const query = "CREATE DATABASE courses";
//       connection.query(query, function (err, result) {
//         if (err) {
//           err;
//         }
//         console.log("New database created");
//       });
//     }
// });