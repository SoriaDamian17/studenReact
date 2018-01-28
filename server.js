require('node-jsx').install({harmony:true});
//Incluimos nuestro node_modulo express
var express = require('express');
//Incluimos nuestro node_module react-engine
var reactEngine = require('react-engine');
// Creo la instancia de express
var app = express();
//Seteamos nuestra carpeta de vistas
app.set('views', __dirname + '/src/views/');
//Seteamos nuestra carpeta de los recursos (css|img|js)
app.use('/static/', express.static(__dirname + '/public'));
//Creamos nuestro server para renderizar jsx en nuestras vistas
var engine = reactEngine.server.create();
//Seteamos nuestro engine paran decirle el formato de nuestras vistas
app.engine('.jsx', engine);
//seteamos nuestras vistas para que usen jsx
app.set('view engine', 'jsx');
//Seteamos nuestra vista para que express pueda leer el nuevo formato de vistas
app.set('view', reactEngine.expressView);
//Creamos nuestra ruta
app.get('/', function(req, res){
  var studen = [{
    Nombre: 'Damian',
    Descripcion:'Estudiante'
  },{
    Nombre: 'Damian',
    Descripcion:'Estudiante'
  }];
  res.render('home', {
      title: 'My primera aplicacion',
      studens:studen
  });
});
//Escuchamos nuestro servidor en el puerto 3000
app.listen(3001,function(req, res){
   console.log('Listen server in port 3000');
});