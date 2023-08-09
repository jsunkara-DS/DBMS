var express = require('express');
var bodyparser = require("body-parser");
var mysql = require('mysql');
var app = express();

app.set("view engine", "ejs"); 
app.use(bodyparser.urlencoded({extended:true}));

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'project'
});

app.get("/", function(req, res){
	res.render("home");
});

app.get("/search", function(req, res){
	res.render("search");
});

app.get("/display", function(req,res){
	var q= "select * from electronics";
	con.query(q, function(error, results){
	if (error) throw error;
	res.render("display",{data:results});
});
});

app.post("/display",function(req,res){
            var i ={type:req.body.type,
			  model:req.body.model,
			  price:req.body.price};//std info 
var q = "insert into electronics set ?"; 
con.query(q, i, function (error, results) {
                 if (error) throw error;
                    res.redirect("/display");
});
});

app.get("/update", function(req,res){
	var q= "select * from store_inventory";
	con.query(q, function(error, results){
	if (error) throw error;
	res.render("update",{data:results});
});
});

		 
app.post("/update",function(req,res){
	var ID = req.body.SID;
			  
			 
var q = "update store_inventory set available="+req.body.available+" WHERE e_id ="+req.body.PID+" and s_id=?";
con.query(q,ID, function (error, results) {
            if (error) throw error;
                res.redirect("/update"); 
});
});

app.get("/delete",function(req,res){
	res.render("delete");
});
		 
app.post("/delete",function(req,res){
var GID = req.body.PID;
			 
var q = "DELETE FROM electronics WHERE e_id = ?"; 
con.query(q, GID,function (error, results) {
            if (error) throw error;
                res.redirect("/display");
});
});

app.get("/search", function(req, res){
   res.render("search"); 
});

app.post("/search",function(req,res){
 
var ID= req.body.Type;
var q = "select * from electronics where type = ?"; 
 
con.query(q, ID, function (error, results) {
	if(results.length==0)
		res.send("No Records found");
 if (error) throw error;
          res.render("search_result",{data:results});
  });
});
 
app.listen(789, function () {
 console.log('App listening on port 789!');
});