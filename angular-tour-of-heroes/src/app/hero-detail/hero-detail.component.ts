import {Hero} from '../hero';
import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HeroesComponent } from '../heroes/heroes.component';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe, HeroesComponent],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

}
