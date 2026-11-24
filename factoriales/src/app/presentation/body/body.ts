import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {

  numero: WritableSignal<number> = signal(0);
  resultado: string = '';

  calcular(numero: number):void {
    let total = 1;
    for (let i = 2; i <= numero; i++) {
      total *= i;
    }
    this.resultado = total.toString();
  }   

}
