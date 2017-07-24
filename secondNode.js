var http = require('http');
var fs = require('fs');
var exp = require('express');
var mong = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var parser = require('body-parser');

app = exp();
app.use(exp.static('./'));
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mong.connect(url, function(err, db) {
  if (err) throw err;
/*  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
*/
/*  var myobj = {name: "Company Inc", rapper: "Kendrick Lamar"};
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
*/
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });

});

app.use(parser.urlencoded({
  extended: true
}));
app.post('/', function(req,res){ 
  console.log('Recieved object: ' + req.body);
  res.send({"name":"John Doe","email":"John@yahoo.com","colour":"blue"});
});
app.listen(8000);
console.log("Listening on port 8000");
/*
//module.exports = app;

http.createServer(function (req, res) {
	if(req.url.indexOf('.css') != -1) {
		fs.readFile('example.css',function(err,data) {
   		 	res.writeHead(200, {'Content-Type': 'text/css'});
  	  		res.write(data);
  	  		res.end();
  		});
  	} else if(req.url.indexOf('.js') != -1) {
  		fs.readFile('example.js',function(err,data) {
    		res.writeHead(200, {'Content-Type': 'text/javascript'});
   	 		res.write(data);
    		res.end();
  		});
  	} else if(req.url.indexOf('.png') != -1) {
  		fs.readFile('example.png',function(err,data) {
    		res.writeHead(200, {'Content-Type': 'image/png'});
   	 		res.write(data);
    		res.end();
  		});
    } else if (req.url.indexOf('inputs') != -1) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write("{'name':'John Doe','email':'John@yahoo.com','colour':'blue'}");
      res.end();
  	} else {
		fs.readFile('index.html',function(err,data) {
	    	res.writeHead(200, {'Content-Type': 'text/html'});
    		res.write(data);
    		res.end();
  		});
	}
}).listen(8000);
/*
mong.connect(url,function(err,db){
  if(err) throw err;
  console.log("Database Created");
  db.close();
});
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/