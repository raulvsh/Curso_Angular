import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,


  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  //hero = 'Windstorm';

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }*/

  heroes = HEROES;

}
