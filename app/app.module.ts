import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { TopPartnersModule } from './top-partners/toppartners.module';
import { HttpModule } from '@angular/http';
//import { bind } from '@angular/core';
//import { HTTP_BINDINGS, BaseRequestOptions, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClient } from './http-client';

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

@NgModule({
    
    imports:[
        BrowserModule,
        FormsModule,
        routing,
        HeroesModule,
        HttpModule,
        TopPartnersModule
    ],
    
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    
    providers: [
        HttpClient
    ],
    
    bootstrap:[ AppComponent ]
    //bootstrap:[ AppComponent, [HTTP_BINDINGS, bind(RequestOptions).toClass(MyOptions)] ]
})
export class AppModule{}