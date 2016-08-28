import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from 'app/heroes/heroes.module';
import { TopPartnersModule } from 'app/top-partners/toppartners.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from 'app/app.component';
import { routing }        from 'app/app.routing';

import { DashboardComponent } from 'app/dashboard/dashboard.component';

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
        
    ],
    
    bootstrap:[ AppComponent ]
})
export class AppModule{}