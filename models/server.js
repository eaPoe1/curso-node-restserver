const express = require('express');
const cors = require('cors');

class Server {

    constructor() { 
        this.port = process.env.PORT;
        this.app = express();

        
        //middles
        this.middlewares();

        
        //rutas
        this.routes();
    }

    middlewares() {

        this.app.use( express.static( 'public' ) );
        
        this.app.use( cors() );
    }

    routes() {
        
        this.app.use('/api/usuarios', require('../routes/user'));

    }

    listen() {
        this.app.listen( this.port , () => {
            console.log( 'Server running on port', this.port );
        });
    }
}

module.exports = Server;