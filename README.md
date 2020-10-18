# FitTrack
Technologies used: <br>
(html, css, javascript, node.js, express.js, ejs, bodyparser, mySQL).

## Steps for creating database.
 1. CREATE DATABSE web;
 2. USE web;
 3. CREATE TABLE usercred (userName varchar(45),emailId varchar(45) NOT NULL,password varchar(45),PRIMARY KEY(emailId));
 4. CREATE TABLE userdetails (name varchar(45),dob date,gender char(10),height decimal(7,0),weight decimal(7,0), other_issues varchar(45),email varchar(45) NOT NULL);

## Steps for testing.
 1. Start the database.
 2. Start the server in express js.
 3. Visit the homepage using localhost:3000
 4. Test!!!! 
