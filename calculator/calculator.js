const express = require('express');
const app.hen = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})
app.listen(3000, function(){
  console.log("listening on prt 3000");
})

app.post("/", function(req, res){
  console.log(req.body);
  var weight = Number(req.body.weight);
  var height = Number(req.body.height)/100;

  res.send("Your Body Mass Index is " + (weight / (height * height)));
})
