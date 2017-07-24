var http = require('http');
var fs = require('fs');
var exp = require('express');
var mong = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
/*
app = exp();
app.use(exp.static('./newsagency'));
app.listen(8000);
console.log("Listening on port 8000");

module.exports = app;
*/
http.createServer(function (req, res) {
	if(req.url.indexOf('.css') != -1) {
		fs.readFile('example.css',function(err,data) {
   		 	res.writeHead(200, {'Content-Type': 'text/css'});
  	  		res.write(data);
  	  		res.end();
  		});
  	} else if(req.url.indexOf('example.js') != -1) {
  		fs.readFile('example.js',function(err,data) {
    		res.writeHead(200, {'Content-Type': 'text/javascript'});
   	 		res.write(data);
    		res.end();
  		});

    } else if(req.url.indexOf('jquery.js') != -1) {
      fs.readFile('jquery.js',function(err,data) {
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
    } else if (req.url.indexOf('/inputs') != -1) {
      console.log("recieved request");
      console.log(req);
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