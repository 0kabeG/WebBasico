import { Component, inject, input, OnInit, output, Service, signal, WritableSignal } from '@angular/core';
import { Personals } from '../../domain/entities';
import { Personalservice } from '../../application/personalservice';

@Component({
  imports: [],
  selector: 'app-personalcard',
  styleUrl: './personalcard.css',
  templateUrl: './personalcard.html',
})
export class Personalcard{

  service=inject(Personalservice);

  personals=this.service.personals;
 
 
}
