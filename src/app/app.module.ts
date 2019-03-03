import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Rutas
import { APP_ROUTING } from './app.routes'
//Servicios
import { HeroesService } from './services/heroes.service'
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
//Componentes
import {SnackbarModule} from 'ngx-snackbar';
import { NgxFabModule } from 'ngx-fab';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    SnackbarModule.forRoot(),
    NgxFabModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
