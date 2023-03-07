import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  newTicket:Ticket= {} as Ticket;
  Tickets: Ticket[]=[]
  constructor(private ticketService:TicketService ) { }

  ngOnInit(): void {
    this.GetTickets();
  }

CreateTicket():void{
      this.ticketService.CreateTicket(this.newTicket).subscribe((response:Ticket) =>{
        console.log(response);
        this.GetTickets();
      })
    }
    
    GetTickets(){
      this.ticketService.GetTickets().subscribe((response:Ticket[]) =>{
        console.log(response);
        this.Tickets = response;
      });
    }




    selectedIndex: number=-1;

    select(index:number) {
      this.selectedIndex = index;
    }


    unselect(index:number) {
      this.selectedIndex = -1;
    }



}

