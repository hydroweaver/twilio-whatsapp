const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('http');
const accountSid = '//'; 
const authToken = '//'; 
const client = require('twilio')(accountSid, authToken); 

var app = express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/', (req, res)=>{
    var reply = req.body.Body;
    console.log(req);
    res.send('done.');
    client.messages 
    .create({ 
       body: 'You replied with ' +reply, 
       from: 'whatsapp:+//',       
       to: 'whatsapp:+//' 
     }) 
    .then(message => console.log(message.sid)) 
    .done();
})

app.get('/', function (req, res) {
  res.send('Hello World!');
  client.messages 
      .create({ 
         body: 'Sent from application', 
         from: 'whatsapp:+//',       
         to: 'whatsapp:+//' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});