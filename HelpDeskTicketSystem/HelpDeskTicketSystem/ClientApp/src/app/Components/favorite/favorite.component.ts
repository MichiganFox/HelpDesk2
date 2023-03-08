import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  Favorites: Favorite[]=[];
  newFavorite: Favorite={} as Favorite;
  loginInfo: string[]=[];

  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.GetFavorites();
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

    // GetUserFavorites(){
    //   this.favoriteService.GetUserFavorites().subscribe(())
    // }

}

