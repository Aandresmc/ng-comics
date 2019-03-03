import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { SnackbarService } from 'ngx-snackbar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private snackbarService: SnackbarService, private _router: Router, private _heroesService: HeroesService) {
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    //  metodo output desde el padre "heroeComponent"
    //  this.heroeSeleccionado.emit(this.index)
    this._router.navigate(['/heroe', this.heroe.nombre])

  }

   agregarFavorito(heroe: Heroe) {
    this._heroesService.addFavorite(heroe)
     this.snackbarService.add({
      msg: 'Se agrego a favoritos',
      timeout: 3000,
      action: {
        text: "cancelar",
        color: '#f44052',
        onClick: (snack) => {
          let cancelado = this._heroesService.cancelFavorite()
          this.snackbarService.add({
            msg: cancelado.nombre+' se quito de favoritos',
            timeout: 3000,
            action: {
              text: "",
              color: '#f44052',
            },
          });
        },
      },
    });
  }

  clear() {
    this.snackbarService.clear();
  }

  prueba() {
    console.log('quitar');

  }

}
