import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { TopPartnersService } from './top-partners-service';
import { TopPartnersComponent }   from './top-partners-component';
import { topPartnersRouting } from './top-partners-routing';

@NgModule({
    imports: [CommonModule, topPartnersRouting],
    exports: [],
    declarations: [TopPartnersComponent],
    providers: [TopPartnersService],
})
export class TopPartnersModule { }
