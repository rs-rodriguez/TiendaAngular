 // JavaScript Document
var bodyParser = require('body-parser'),
	http = require('http'),
	path = require('path'),
	express = require('express'),
	session = require('express-session'),
	rutaLogin = require('./server/usuarios/rutas.js'),
	rutaArticulos = require('./server/articulos/rutas.js');

var PORT = 3000,
	app = express(),
	Server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
	secret: "123456",
	resave: false,
	saveUninitialized: false
}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//app.use( express.static(__dirname + '/src' ) ); 
app.use(express.static(path.join(__dirname, 'dist/TiendaAngular')));
app.use('/login', rutaLogin);
app.use('/articulos', rutaArticulos);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/TiendaAngular/index.html'));
});

Server.listen(PORT, () => {
	console.log('Server is listening on port: '+PORT);
});
