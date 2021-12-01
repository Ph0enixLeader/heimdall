const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbheimdall"
  });

  const Testdb = () =>{
    db.connect(function(err) {
      if (err) throw err;
      <div className="Testdb"><h1>Connecté à la base de données MySQL!</h1></div>
      console.log("Connecté à la base de données MySQL!");
    });
  }

  export default Testdb;