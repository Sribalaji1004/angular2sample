import { NgModule } from '@angular/core';
import { TopPartnersService } from './top-partners-service';
import { TopPartnersComponent }   from './top-partners-component';
import { topPartnersRouting } from './top-partners-routing';

@NgModule({
    imports: [topPartnersRouting],
    exports: [],
    declarations: [TopPartnersComponent],
    providers: [TopPartnersService],
})
export class TopPartnersModule { }
