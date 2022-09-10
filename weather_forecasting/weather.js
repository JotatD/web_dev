const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
  var userCity = req.body.city;
  url = "https://api.openweathermap.org/data/2.5/weather?appid=716150da4b5a04af6647668b8b33b064&q=" + userCity + "&units=metric"
  https.get(url, function(response){
    response.on('data', function(data){
      const weatherData = JSON.parse(data);
      if (weatherData.cod == "404"){
        res.write("Cagamos")
      }
      else{
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const imageUrl = "http://openweathermap.org/img/wn/"+ weatherData.weather[0].icon + "@2x.png";
        res.write("<h1>The temp in " + toTitleCase(userCity) + " is " + temperature + " ceslsious</h1>");
        res.write("<p> " + description + "</p>")
        res.write("<img src=" + imageUrl + ">");
      }
      res.send();

    })
  })
})

app.listen(3000, function(){
  console.log("Server listening on 3000");
})
