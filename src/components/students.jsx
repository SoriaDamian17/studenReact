var React = require('react');
var createClass = require('create-react-class');
//Creamos nuestro componente estudiantes
var Students = createClass({
    getStudens:function(){
        console.log(this.props.studens);
    },
    render:function(){
        return (
            /*{
                for (let userObject of this.props.studens) {
                    console.log(userObject.username);
                }
            }*/
            <article>
                <h1>{this.props.studens[0].Nombre}</h1>
                <p>{this.props.studens[0].Descripcion}</p>
            </article>
        )
    }
});

module.exports = Students;