"use strict";
var router_1 = require('@angular/router');
//import { HeroesComponent } from './heroes.component';
var dashboard_component_1 = require('./dashboard.component');
//import { HeroDetailComponent } from './hero-detail.component';
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    // {
    //     path: 'heroes',
    //     component: HeroesComponent
    // },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map