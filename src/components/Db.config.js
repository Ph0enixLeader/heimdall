const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbheimdall"
  });

    db.connect(function(err) {
      if (err) throw err;
      console.log("Connecté à la base de données MySQL!");
    });

  export default Mysql;