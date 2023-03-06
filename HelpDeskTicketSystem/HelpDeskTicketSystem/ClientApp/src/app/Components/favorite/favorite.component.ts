import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  Fav: Favorite[]=[];
  constructor(private FavItem:FavoriteService) { }

  ngOnInit(): void {
    this.FavItem.GetFavorites().subscribe((response:Favorite[]) =>{
      console.log(response);
      this.Fav = response;
    });

}
}