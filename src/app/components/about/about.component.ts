import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit {
  frase: string = "'Esta ciudad se merece un criminal de más categoría, y yo se lo voy a dar...'"
  @ViewChild('closeModal') public closeModal :ElementRef;
  constructor() { }

  ngOnInit() {
  }

  cambiarFrase(fraseNueva: string) {
    fraseNueva != "" ?
      this.frase = fraseNueva
      : fraseNueva = "coloca tu frase"
      this.closeModal .nativeElement.click()

  }

}
