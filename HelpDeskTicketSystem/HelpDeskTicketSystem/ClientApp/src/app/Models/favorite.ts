import { Ticket } from "./ticket";

export interface Favorite {
    id:number;
    uid:string;
    dateAdded:Date;
    ticketId:number;
    ticket:Ticket;
}
