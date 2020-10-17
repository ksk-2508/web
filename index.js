const express = require("express");
const bodyParser = require("body-parser");
const mysql=require("mysql");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/frontend/index.html");
});

var mysqlCon=mysql.createConnection({
    database : "web",
    host : "localhost",
    user : "root",
    password : "root"

});

mysqlCon.connect(function(err){
    if(err)
    {
      console.log("connected  failed!");
    }
    else{
        console.log("connection");
    }
});

app.post("/signup", function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  console.log(name, email);
  var sql = "INSERT INTO usercred VALUES('" + name + "', '" + email + "', '" + password +"');";
  mysqlCon.query(sql, function(err, results){
    if(err) throw err;
    console.log("Details inserted");
  });
})

app.post("/login", function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var sql = "SELECT password FROM usercred WHERE emailId ='" + email +"';";

  //res.sendFile(__dirname + "/frontend/routine.html");
  console.log(password, email);
  mysqlCon.query(sql, function(err, results){
    if(err) throw err;
    var retrivedPassword = JSON.stringify(results);
    res.send(retrivedPassword);
    //console.log(retrivedPassword.password);
  });
})

app.listen(3000, function(){ console.log("server started in port 2508!");});
