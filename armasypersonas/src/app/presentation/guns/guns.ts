import { Component } from '@angular/core';
import { Gunsform } from '../gunsform/gunsform';
import { Gunscard } from '../gunscard/gunscard';

@Component({
  imports: [Gunsform, Gunscard],
  selector: 'app-guns',
  styleUrl: './guns.css',
  templateUrl: './guns.html',
})
export class Guns {}
