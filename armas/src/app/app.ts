import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gun } from './domain/entities';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('armas');

    Galil:Gun = {
      nombre: "Gallil",
      calibre: "5.56x45mm OTAN",
      pais: "Israel",
    }

  changeUpper(){
    this.Galil.nombre=this.Galil.nombre.toUpperCase();
  }

  changeLower(){
    this.Galil.nombre=this.Galil.nombre.toLowerCase();
  }

}
