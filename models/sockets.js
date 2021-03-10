const TickeTList = require("./ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        //crear la instancia de nuestro ticketlist
        this.ticketlist = new TickeTList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log( 'Cliente conectado' )

            // // Escuchar evento: mensaje-to-server
            // socket.on('mensaje-to-server', ( data ) => {
            //     console.log( data );
                
            //     this.io.emit('mensaje-from-server', data );
            // });
            
            socket.on( 'solicitar-ticket', ( data, callback ) => {
                
                const nuevoTicketGenerado  =  this.ticketlist.createTicket();
                callback(nuevoTicketGenerado)

            } )

            socket.on( 'siguiente-ticket-trabajar', ( {agente, escritorio}, callback ) => {

                console.log( agente, escritorio )

                const yourTicket = this.ticketlist.toAssignTicket( agente, escritorio )
                
                callback( yourTicket )

                this.io.emit( 'tickets-asignado', this.ticketlist.last13 );

            });
            

        
        });
    }


}


module.exports = Sockets;