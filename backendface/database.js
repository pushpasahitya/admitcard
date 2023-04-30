

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(express.json());
 
const cors = require('cors');
server.use(cors({
    origin: '*'
}));
 
//Establish the database connection
 
const db = mysql.createConnection({
 
    host: "localhost",
    user: "root",
    password: "2020",
    database: "admit",
 
});
 
db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      console.log("successfully Connected to DB");
    }
  });
 
//Establish the Port
 
  server.listen(8080,function check(error) {
    if (error)
    {
    console.log("Error....dddd!!!!");
    }
 
    else
    {
        console.log("Started....!!!! 8080");
 
    }
});
 
//Create the Records
 
server.post("/add", (req, res) => {
    let details = {
    //   itemid: req.body.itemid,
      name: req.body.name,
      phone: req.body.phone,
      school:req.body.school,
      classs:req.body.classs,
      rollno:req.body.rollno,
      address:req.body.address

    };
    let sql = "INSERT INTO student SET ?"  ;
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "items created Failed" });
        console.log(error)
      } else {
        res.send({ status: true, message: "items created successfully" });
      }
    });
  });
 
 
 
//view the Records
 
server.get("/items", (req, res) => {
    var sql = "SELECT * FROM student ";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        // res.send( {data: result });
        return res.json(result)
      }
    });
  });
 
 



  
 