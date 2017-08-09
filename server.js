var express = require('express');
var app = express();
var router = express.Router()

app.use(
  '/bower_components',
  express.static('./bower_components')
),
app.use(express.static("app"));

app.get('/', function (req, res) {
    console.log("MyProject app.get");
    res.redirect('/');
});

app.all('/order', function (req, res) {
  console.log("order app.get");
  res.send('[{"medicineCode":"2","medicineDescription":"Naomi","price":22,"manufacturer":"Himalayas","vendor":"Himalayas","stockCount":2}]');
});

app.listen(8080,'localhost' ); //'10.30.8.130' );
console.log("MyProject Server is Listening on port 8080");


