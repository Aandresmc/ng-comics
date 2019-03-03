import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroeService : HeroesService,private _router:Router) { }

  ngOnInit() {
  }

  buscar(buscar :string){
    // this._heroeService.buscarHeroe(buscar)
    this._router.navigate(['/buscador',buscar])
  }
}
