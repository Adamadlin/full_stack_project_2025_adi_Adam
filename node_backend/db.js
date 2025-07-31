// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "nodeuser",
//   password: "nodepass",
//   database: "animals_db",
//   port: 3306
// });

// db.connect(err => {
//   if (err) {
//     console.error("❌ MySQL connection error:", err);
//     process.exit(1);
//   }
//   console.log("✅ MySQL Connected");
// });

// module.exports = db;



require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
    process.exit(1);
  }
  console.log("✅ MySQL Connected");
});

module.exports = db;

