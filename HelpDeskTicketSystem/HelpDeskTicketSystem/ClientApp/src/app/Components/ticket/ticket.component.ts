import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';
import { FormsModule } from '@angular/forms';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { Favorite } from 'src/app/Models/favorite';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  @Output() deleted = new EventEmitter<Ticket>();

  UserId:string="";
  selectedIndex: number = -1;
  deleteTicket: Ticket = {} as Ticket;
  newTicket: Ticket = {} as Ticket;
  Tickets: Ticket[] = [];
  constructor(private ticketService: TicketService, private favoriteService:FavoriteService) {}

  ngOnInit(): void {
    this.GetTickets();
  }

  CreateTicket(): void {
    this.ticketService
      .CreateTicket(this.newTicket)
      .subscribe((response: Ticket) => {
        console.log(response);
        this.GetTickets();
      });
  }
  DeleteTicket(ticketId: number): void {
    let index: number = this.Tickets.findIndex((t) => t.id == ticketId);
    this.Tickets.splice(index, 1);
    this.ticketService.DeleteTicket(ticketId).subscribe((response: any) => {
      console.log(response);
      this.Tickets.splice(ticketId, 1);
    });
  }

  // BookMarkTicket(ticketId:number):void{
  //   let index:number = this.Tickets.findIndex((t)=> t.id==ticketId);

  // }
  AddToFav(ticketid:number):void{
    let newFavorite:Favorite = {} as Favorite;
    newFavorite.ticketId=ticketid
    newFavorite.uid=this.UserId
    this.favoriteService.CreateFavorite(newFavorite).subscribe((response: Favorite)=>{
      console.log(response);
    })
  }

  GetTickets() {
    this.ticketService.GetTickets().subscribe((response: Ticket[]) => {
      console.log(response);
      this.Tickets = response;
    });
  }

  select(index: number) {
    this.selectedIndex = index;
  }

  unselect(index: number) {
    this.selectedIndex = -1;
  }
}
