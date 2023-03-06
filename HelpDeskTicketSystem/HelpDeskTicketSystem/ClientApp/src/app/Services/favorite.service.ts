import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../Models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(@Inject ('BASE_URL') private baseUrl: string, private http:HttpClient) { }

  GetFavorites():Observable <Favorite[]>{
    return this.http.get<Favorite[]>(`${this.baseUrl}api/Favorite/GetFavorites`, {});
  }
}
