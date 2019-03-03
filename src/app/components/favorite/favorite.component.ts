import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: []
})
export class FavoriteComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroesFavorites();

  }

}
