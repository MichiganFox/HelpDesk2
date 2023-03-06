import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  Tickets: Ticket[]=[]
  constructor(private ticketService:TicketService ) { }

  ngOnInit(): void {
    this.ticketService.GetTickets().subscribe((response:Ticket[]) =>{
      console.log(response);
      this.Tickets = response;
    });

}
}
