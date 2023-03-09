import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../Models/favorite';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  endpoint: string = "api/Ticket";

  constructor(@Inject ('BASE_URL') private baseUrl: string, private http:HttpClient) { }

  GetTickets():Observable <Ticket[]>{
    return this.http.get<Ticket[]>(`${this.baseUrl}api/Ticket`, {});
  }
  CreateTicket(newTicket:Ticket):Observable<Ticket>{
    let datePipe:DatePipe=new DatePipe('en-US');
    // datePipe.transform(newTicket.dateCompleted, 'short')
    return this.http.post<Ticket>(`${this.baseUrl}api/Ticket?_userId=${newTicket.userId}&_email=${newTicket.email}&_priority=${newTicket.priority}&_dateSubmitted=${newTicket.dateSubmitted}&_dateCompleted=${datePipe.transform(newTicket.dateCompleted, 'short')}&_subjectBrief=${newTicket.subjectBrief}&_fullIssue=${newTicket.fullIssue}&_open=${newTicket.open}`,{});
  }
  DeleteTicket(ticketId: number){
    return this.http.delete(`${this.baseUrl + this.endpoint}/delete/${ticketId}`);
  }
  // BookmarkTicket(newFavorite:Favorite){
  //   return this.http.post<Favorite>(`${this.baseUrl + this.endpoint}/Favorite/${Favorite.ticketid}`)
  // }

}
