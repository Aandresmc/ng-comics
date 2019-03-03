import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private _activateRoute: ActivatedRoute, private _heroesService: HeroesService,private _location:Location) {
    this._activateRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['nombre']);
    })
  }

  ngOnInit() {
  }

  regresar() {
    this._location.back();
  }

}
