import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Backenditem } from '../../application/backenditem';
import { Guns } from '../../domain/entities';
import { __values } from 'tslib';


@Component({
  imports: [],
  selector: 'app-gunscard',
  styleUrl: './gunscard.css',
  templateUrl: './gunscard.html',
})
export class Gunscard implements OnInit {

  private _service=inject(Backenditem);
  guns:WritableSignal<Guns[]>=signal([]);
  ngOnInit(): void {
    this._service.getGunsFromAPI()
                  .subscribe({
                    next: values => this.guns.set(values),
                    error: e => console.log(e)
                    
                  });
  }
}


