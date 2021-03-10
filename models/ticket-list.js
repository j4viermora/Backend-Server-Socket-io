const Ticket = require('./ticket');

class TickeTList{

	constructor() {

		this.ultimateNumber = 0;
		this.onHold         = [];
		this.assigned		= [];

	}

	get nextNumber(){

		this.ultimateNumber++;
		return this.ultimateNumber;

	}


	get last13(){
		
		return this.assigned.slice(0, 13);
	
	}

	createTicket(){

		const newTicket = new Ticket( this.nextNumber );
		this.onHold.push( newTicket )

		return newTicket;

	}

	toAssignTicket( agente, desktop ){

		if( this.onHold.length === 0 ){
			return {
				status: false,
				msg: 'No tickets'
			}
		}	
		
		const nextTicket   = this.onHold.shift();
				
				nextTicket.agente  = agente;
				nextTicket.desktop = desktop;
				
				this.assigned.unshift( nextTicket )
				
				return nextTicket;}


}


module.exports  = TickeTList;