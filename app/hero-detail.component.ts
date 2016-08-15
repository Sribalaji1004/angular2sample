import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    
    constructor(private heroService: HeroService,  private route: ActivatedRoute) { }

    //hero: Hero;
    
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
        let id = +params['id']; //The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        });
    }
    
    goBack() {
        window.history.back();
    }


}
