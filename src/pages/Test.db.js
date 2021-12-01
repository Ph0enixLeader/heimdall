import React from "react";
import { NavLink } from 'react-router-dom';

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbheimdall"
  });

const Testdb = () => {
    return(
        db.connect(function(err) {
            if (err) throw err;
            <div><h1>Connecté à la base de données MySQL!</h1></div>
            console.log("Connecté à la base de données MySQL!");
          }));
}

export default Testdb;