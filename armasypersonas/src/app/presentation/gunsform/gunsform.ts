import { Component, output, signal, WritableSignal } from '@angular/core';
import { Guns } from '../../domain/entities';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-gunsform',
  styleUrl: './gunsform.css',
  templateUrl: './gunsform.html',
})
export class Gunsform{ 



  //almacena los datos del formulario
  guns:WritableSignal<Guns> = signal({
    id:0,
    name:'',
    description:'',
    caliber:'',
    price:0,
  });


  //variable de tipo Output que va a ser el emisor de "pet"


  newGuns=output<Guns>();
  error:WritableSignal<boolean> = signal(false);
  mensaje:WritableSignal<string> = signal("");
  
  emitGuns(){

      this.newGuns.emit({
        id: this.guns().id,
        name: this.guns().name,
        description: this.guns().description,
        caliber: this.guns().caliber,
        price: this.guns().price
      });
  }
}
