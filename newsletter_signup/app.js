

const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

app.listen(3000, function(){
  console.log("Listening on port 3000");
})

app.post("/", function(req, res){
  var formInfo = req.body;

  var userData = {
    members: [
      {
        email_address: formInfo.email,
        status: "subscribed",
        merge_fields: {
          FNAME: formInfo.fname,
          LNAME: formInfo.lname
        }
      }
    ]
  };
  var jsonData = JSON.stringify(userData);
  const url = "https://us10.api.mailchimp.com/3.0/lists/3ceb9fbc5d"
  const options = {
    method: "POST",
    auth: "juan:b18c35289dae0e8c963ef62d473a7a40-us10",
  };

  const request = https.request(url, options, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      console.log(data);
    });
  });

  request.write(jsonData);
  request.end();

})

//b18c35289dae0e8c963ef62d473a7a40-us10
//3ceb9fbc5d
