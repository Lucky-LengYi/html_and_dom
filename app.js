var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('.html',ejs.__express);
app.use(express.static('public'));
app.set('view engine','html');

app.get('/', function (req, res) {
  res.render('index',{});
});
app.post('/transcript', function (req, res) {
    res.render('transcript',{
      subject : req.body.subject,
      time : req.body.time,
      class_id : req.body.class_id,
      stu_id : req.body.stu_id,
      stu_name : req.body.stu_name,
      score : req.body.score
    });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
