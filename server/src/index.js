const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: true,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbheimdall",
});

app.post("/api/insert", (req, res) => {

    const Name = req.body.Name;
    const Lastname = req.body.Lastname;
    const Email = req.body.Email;
    const Username = req.body.Username;
    const Password = req.body.Password;

    bcrypt.hash(Password, saltRounds, (err, hash) => {

        if (err){
            console.log(err);
        }

        db.query(
            "INSERT INTO he_accounts (name, lastname, email, username, password) VALUES (?, ?, ?, ?, ?)", 
            [Name, Lastname, Email, Username, hash], 
            (err, result) => {
                console.log(result);
            }
        );
    });
});

app.get("/api/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: true });
      }
    });

app.post("/api/login", (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    db.query(
        "SELECT * FROM he_accounts WHERE username = ?;",
        Username,
        (err, result) => {
          if (err) {
            res.send({ err: err });
          }
    
          if (result.length > 0) {
            bcrypt.compare(Password, result[0].password, (error, response) => {
              if (response) {
                req.session.user = result;
                console.log(req.session.user);
                res.send(result);
              } else {
                res.send({ message: "Wrong username/password combination!" });
              }
            });
          } else {
            res.send({ message: "User doesn't exist" });
          }
        }
      );
    });

app.listen(3001, () => {
    console.log("running on port 3001");
});