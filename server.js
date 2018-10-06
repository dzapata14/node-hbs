const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home.hbs', {
        nombre: "Daniel"
    })
})

app.get('/about', function(req, res) {

    res.render('about.hbs');
})

app.listen(port, () => {
    console.log(`escuchando en el puerto ${ port }`);
})