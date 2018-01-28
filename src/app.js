//Creamos nuestro Cliente
var Client = require('react-engine/lib/client');
//Incluimos nuestra vista, y seteamos nuestro parametro glob en true para que sea global
require('./views/home.jsx', {glob:true});
var options = {
    viewResolver:function(viewName){
        return require('./views/' + viewName);
    }
};
// Creamos un evento listener para que escuche nuestro ContentLoad, 
// para actualizar nuestro sitio segun nuestros librerias.
document.addEventListener('DOMContentLoaded', function onLoad(){
    //Le pasamos a nuestro cliente, la configuracion de nuestra vista
    Client.boot(options);
});
