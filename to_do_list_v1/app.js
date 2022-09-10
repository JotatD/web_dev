const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

app.set('view engine', 'ejs');



app.listen(3000, function() {
  console.log("Listening on port 3000");
})

app.get("/", function(req, res) {
  today = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  var day = today.toLocaleDateString("en-US", options)
  res.render('index', {KindOfDay:day, items:items});
});


app.post("/", function(req, res){
  var data = req.body.userItem;
  items.push(data);
  res.redirect("/");
});

app.post("/clear", function(req, res){
  items = [];
  res.redirect("/");
});
