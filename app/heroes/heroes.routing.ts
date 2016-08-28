//import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }    from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

//export const heroesRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);
export const heroesRouting = RouterModule.forChild(heroesRoutes);
