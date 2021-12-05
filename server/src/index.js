const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbheimdall",
  });

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/insert", (req, res) => {

    const Name = req.body.Name;
    const Lastname = req.body.Lastname;
    const Email = req.body.Email;
    const Username = req.body.Username;
    const Password = req.body.Password;
    
    const sqlInsert = "INSERT INTO he_accounts (name, lastname, email, username, password) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [Name, Lastname, Email, Username, Password], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});