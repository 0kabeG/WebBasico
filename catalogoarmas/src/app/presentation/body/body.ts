import { Component, signal, WritableSignal } from '@angular/core';
import { Arma } from '../../domain/entities';
import { Productcard } from '../productcard/productcard';

@Component({
  imports: [Productcard],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  armas:WritableSignal<Arma[]> = signal([
    {name: "Beretta", brand: "Pietro", price: 500, description: "Pistola de Origen Italiano, Precisa y de Corto Alcance", calibre: "9x19mm Parabellum"},
    {name: "P320", brand: "SigSauer", price: 450, description: "Pistola de Origen Israelí, Moderna y Versatil", calibre:"9x19mm Parabellum"},
    {name: "23", brand:"Glock", price: 600, description: "Pistola de Origen Austriaco, Cuenta con modo Rafaga y Diversos Accesorios compatibles", calibre:".40 S&W"}
  ]);

  deleteArma(name:string){
    this.armas.set(
      this.armas().filter(t=>t.name != name)
    )
  }
}
 