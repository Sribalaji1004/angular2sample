import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    
    imports:[
        BrowserModule,
        FormsModule,
        routing,
        HeroesModule
    ],
    
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    
    providers: [
        
    ],
    
    bootstrap:[ AppComponent ]
})
export class AppModule{}