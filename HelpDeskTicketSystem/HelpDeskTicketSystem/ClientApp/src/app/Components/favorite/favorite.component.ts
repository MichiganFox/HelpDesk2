import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { Ticket } from 'src/app/Models/ticket';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  Tickets: Ticket[] = [];
  Favorites: Favorite[]=[];
  newFavorite: Favorite={} as Favorite;
  loginInfo: string[]=[];

  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.GetFavorites(); 
    this.Login();
    }

    GetFavorites(){
      this.favoriteService.GetFavorites().subscribe((response:Favorite[]) =>{
        console.log(response);
        this.Favorites = response;
      });
    }

    Login(){
      this.favoriteService.Login().subscribe((response:string[])=>{
        this.loginInfo=response;


      })
    }


    GetUserFavorites(uid:Event){
        if ((uid.target as HTMLInputElement).value){
       this.favoriteService.GetUserFavorites((uid.target as HTMLInputElement).value).subscribe((response:Ticket[])=>{
        this.Tickets = response;
       
    
      });}
    }

}

