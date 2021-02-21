const { Socket } = require("socket.io");




class Sockets {

    constructor( io ){

        this.io = io;

        

    }


    socketEvent(){

        // on conection
       this.io.on('connection', ( socket ) => {

        // socket.emit( 'welcome-app', {
        //     msg: 'welcome to server',
        //     date: new Date(),
        // });

        // socket.on( 'msg-client' , ( data ) => {
        //     console.log( data )
        // } )

            // escuchar evento : mensaje to server
        socket.on( 'new-msg-to-server', ( { texto } ) => {

            console.log(texto)

        // solo al mismo socket
        // socket.emit( 'msg-from-server', { texto } )
        //para emitir a tdos los conectado a un name space

           this.io.emit( 'msg-from-server', {
                texto
            });
        });

});


    }



}

module.exports = Sockets