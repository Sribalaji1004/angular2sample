import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/heroes/hero';
import { HeroService } from 'app/heroes/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = [];
  
  constructor(private router: Router, private heroService: HeroService) { }
  
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  
  gotoDetail(hero: Hero) {
    let link = ['/hero', hero.id];
    this.router.navigate(link);
  }

}
