import mysql from '../components/DbConnection'

db.connect(function(err) {
    if (err) throw err;
    <div><h1>Connecté à la base de données MySQL!</h1></div>
    console.log("Connecté à la base de données MySQL!");
  });