import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Personalform } from '../personalform/personalform';
import { Personalcard } from '../personalcard/personalcard';
import { Personals } from '../../domain/entities';
import { Personalservice } from '../../application/personalservice';

@Component({
  imports: [Personalform, Personalcard],
  selector: 'app-personal',
  styleUrl: './personal.css',
  templateUrl: './personal.html',
})
export class Personal {

  service=inject(Personalservice);

   
   
  

  
}
