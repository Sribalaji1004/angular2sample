"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var heroes_module_1 = require('./heroes/heroes.module');
var toppartners_module_1 = require('./top-partners/toppartners.module');
var http_1 = require('@angular/http');
//import { bind } from '@angular/core';
//import { HTTP_BINDINGS, BaseRequestOptions, RequestOptions } from '@angular/http';
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var http_client_1 = require('./http-client');
/*
class MyOptions extends BaseRequestOptions {
  constructor () {
    super();
    var token = window.localStorage.getItem("myToken");
    console.log(token);
    this.headers.append('My-Custom-Header','MyCustomHeaderValue');
    console.log(this.headers);
  }
  // search: string = 'coreTeam=true';
}
*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                heroes_module_1.HeroesModule,
                http_1.HttpModule,
                toppartners_module_1.TopPartnersModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent
            ],
            providers: [
                http_client_1.HttpClient
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map