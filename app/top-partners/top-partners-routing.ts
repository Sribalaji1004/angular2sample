import { Routes, RouterModule } from '@angular/router';
import { TopPartnersComponent } from './top-partners-component';

const topPartnersRoutes:Routes = [
    {
        path: 'top-partners',
        component: TopPartnersComponent
    }
];

export const topPartnersRouting = RouterModule.forChild(topPartnersRoutes);
