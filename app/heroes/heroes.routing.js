"use strict";
//import { ModuleWithProviders }  from '@angular/core';
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroesRoutes = [
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
//export const heroesRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);
exports.heroesRouting = router_1.RouterModule.forChild(heroesRoutes);
//# sourceMappingURL=heroes.routing.js.map