const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("hello");
  console.log(req);
})

app.get("/about", function(req, res){
  res.send("hello, I wish I understood what im doing");
})

app.get("/cv", function(req, res){
  res.send("hello, this is my cv");
})

app.listen(3000, function(){
  console.log("Hello, Im listening");
})
