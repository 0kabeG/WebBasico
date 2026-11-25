import { Component, input, output } from '@angular/core';
import { Arma } from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-productcard',
  styleUrl: './productcard.css',
  templateUrl: './productcard.html',
})
export class Productcard {

  //El componente product card debe de recivir un producto
  arma=input<Arma>();

  //emite el nombre del producto que deseo eliminar
  nameDelete=output<string>();


  emitArmaName(){
    this.nameDelete.emit(this.arma()?.name??"");
      console.log(this.arma()?.name);
  }


  
  

}
