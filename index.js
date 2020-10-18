const express = require("express");
const bodyParser = require("body-parser");
const mysql=require("mysql");
const ejs = require("ejs");
const path = require("path");

const app = express();

var task = ["hello"];
var pressed = "signin";
var pemail = "";

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
        console.log("connected");
    }
});

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function(req, res){
  res.sendFile(index.html);
})

app.get('/sign', (req, res) => {
    res.render(__dirname + '/views/sign', {buttonPressed: pressed});
   });

app.post("/1", function(req, res){
 pressed = "signin";
 res.redirect("/sign");
})

app.post("/2", function(req, res){
 pressed = "signup";
 res.redirect("/sign");
})

app.get('/routine', (req, res) => {
  res.render(__dirname + "/views/routine", {tasks:task} );
});

app.post('/routine', function(req, res){
  task.push(req.body.newTask);
  res.redirect("/routine")

});



// app.get("/:customListName", function(req, res){
//   const customListName = req.param.customListName;
//   res.redirect("/" + customListName)
// });

app.post("/personalDetails", function(req,res){
  var name = req.body.userName;
  var dob = req.body.dob;
  var gender = req.body.gender;
  var height = req.body.height;
  var weight = req.body.weight;
  var healthIssues = req.body.healthIssues;
  var values = [name, dob, gender, height, weight, healthIssues, pemail];
  var sql = "INSERT INTO userdetails (name,dob,gender,height,weight,other_Issues,email) VALUES(?,?,?,?,?,?,?)" ;
      mysqlCon.query(sql, values, function(err, results){
        if(err) throw err;
        res.sendFile(path.join(__dirname+'/public/BMI.html'));
    });
})



app.post("/signup", function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var sql = "INSERT INTO usercred VALUES('" + name + "', '" + email + "', '" + password +"');";
      mysqlCon.query(sql, function(err, results){
        if(err) throw err;
        pemail = email;
        res.sendFile(path.join(__dirname+'/public/personalDetails.html'));
    });
})

app.post("/login", function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var sql = "SELECT password FROM usercred WHERE emailId = ?";

  console.log(password, email);
  mysqlCon.query(sql, [email], function(err, result, fields){
    if(err) throw err;
    var retrivedPassword = result[0].password;
    if (retrivedPassword === null){
      alert("You have not yet registered in our platform...");
    } else{
      if (retrivedPassword === password){
        pemail = email;
        res.sendFile(path.join(__dirname+'/public/BMI.html'));
      }else{
        alert("you have entered wrong password!");
      }
    }

  });
})
app.listen(3000, function(){ console.log("server started in port 3000!");});
