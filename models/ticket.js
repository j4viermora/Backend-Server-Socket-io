const { v4: uuidv4 } = require('uuid');

class Ticket {

		constructor( number ,agente, desktop ){
			this.id 	 = uuidv4();
			this.agente  = agente;
			this.number  = number;
			this.desktop = desktop;
		}

}

module.exports = Ticket;