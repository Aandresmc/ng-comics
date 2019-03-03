import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = []
  busqueda: string;
  constructor(private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.busqueda = params['busqueda']
      this.heroes = this._heroeService.buscarHeroe(this.busqueda)
    })
  }

}
