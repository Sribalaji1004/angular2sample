import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/heroes/heroes.component.html',
    styleUrls: ['./app/heroes/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    
    // Dependency Injection will happen here
    constructor(private router: Router, private heroService: HeroService) { }
    
    title = 'Senthil Kumaran';
    selectedHero: Hero;
    
    public heroes: Hero[];
    
    onSelect(hero: Hero) { this.selectedHero = hero; }
    
    getHeroes() {
        this.heroService.getHeroesSlowly().then(h => this.heroes = h);
    }
    
     ngOnInit() {
        this.getHeroes();
    }
    
    gotoDetail() {
        this.router.navigate(['/hero', this.selectedHero.id]);
    }
}


