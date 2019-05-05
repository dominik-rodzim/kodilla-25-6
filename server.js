var express = require('express');
var app = express();

app.use(express.static('assets'))

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/auth/google', function (req, res) {
    res.render('auth-page');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});