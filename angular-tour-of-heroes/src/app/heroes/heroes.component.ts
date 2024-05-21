import { Component } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;


  constructor(private heroService: HeroService) {}


  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
