var React = require('react');
var createReactClass = require('create-react-class');
//Agregamos nuestros componentes
var Students = require('../components/students.jsx');

var Home = createReactClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="type/stylesheet" href="/static/css/styles.css" />
                </head>
                <body>
                    <section className="studens">
                        <Students studens={this.props.studens}/>
                    </section>
                </body>
            </html>
        )
    }
});

module.exports = Home;