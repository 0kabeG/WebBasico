import { Component, output, signal, WritableSignal } from '@angular/core';
import { Personals } from '../../domain/entities';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-personalform',
  styleUrl: './personalform.css',
  templateUrl: './personalform.html',
})
export class Personalform {


  //almacena los datos del formulario
  personals:WritableSignal<Personals> = signal({
    name:'',
    rank:'',
    speciality:'',
    situation:'',
  });


  //variable de tipo Output que va a ser el emisor de "pet"
  newPersonals=output<Personals>();
  
  error:WritableSignal<boolean> = signal(false);
  mensaje:WritableSignal<string> = signal("");
  
  emitPersonals(){
      this.newPersonals.emit({
        name: this.personals().name,
        rank: this.personals().rank,
        speciality: this.personals().speciality,
        situation: this.personals().situation
      });
      console.log(this.personals());


  }




}
