const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path         = require('path');
const Sockets = require('./sockets');

class ServerExpress {

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;



        //http server 
        this.server = http.createServer( this.app );


        //configuraciones en socket 
        this.io = socketio( this.server)

    }

    
    
    middlewares(){
        
        this.app.use( express.static( path.resolve( __dirname ,'../public' ) ) );
        
    }
    

    // configuración de socket
    setUpSocket(){
       const socket =  new Sockets( this.io );

       socket.socketEvent();
    
        
    }


    execute() {
        //inicializar socket
        this.setUpSocket();
        //inicializar middlewares 
        this.middlewares();
        // inicializar server
        this.server.listen( this.port, () => {
            console.log( `Server on PORT ${ this.port }` );
        });
    };


};


module.exports = ServerExpress