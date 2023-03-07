import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(@Inject ('BASE_URL') private baseUrl: string, private http:HttpClient) { }

  GetTickets():Observable <Ticket[]>{
    return this.http.get<Ticket[]>(`${this.baseUrl}api/Ticket/GetTickets`, {});
  }
  CreateTicket(newTicket:Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(`${this.baseUrl}api/Ticket?_=${newTicket.userId}&_email=${newTicket.email}&_dateSubmitted=${newTicket.dateSubmitted}&_dateCompleted=${newTicket.dateCompleted}&_subjectBrief${newTicket.subjectBrief}&_fullIssue${newTicket.fullIssue}&_open${newTicket.open}`,{});
  }
}
