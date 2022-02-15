const express = require('express');
const cors = require('cors');
const { connectDB } = require('../db/config');

class Server {

    constructor() { 
        this.port = process.env.PORT;
        this.app = express();
        this.usuarioPath = '/api/usuarios';

        this.dbConnected();

        //middles
        this.middlewares();

        //rutas
        this.routes();
    }

    async dbConnected(){
        await connectDB();
    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static( 'public' ) );
        
    }

    routes() {
        
        this.app.use(this.usuarioPath, require('../routes/user'));

    }

    listen() {
        this.app.listen( this.port , () => {
            console.log( 'Server running on port', this.port );
        });
    }
}

module.exports = Server;