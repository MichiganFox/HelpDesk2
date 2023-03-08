import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../Models/favorite';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(@Inject ('BASE_URL') private baseUrl: string, private http:HttpClient) { }

  GetFavorites():Observable <Favorite[]>{
    return this.http.get<Favorite[]>(`${this.baseUrl}api/Favorite`);
  }

  CreateFavorite(newFavorite:Favorite):Observable<Favorite>{
    return this.http.post<Favorite>(`${this.baseUrl}api/Favorite?_uid=${newFavorite.uid}&_ticketId=${newFavorite.ticketId}`,{})
  }

  Login():Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}api/Favorite/Login`);
  }

  GetUserFavorites(UserId:string):Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.baseUrl}api/Favorite/GetUserFavorites?_uid=${UserId}`);
  }

}
