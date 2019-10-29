import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferManagementComponent } from './offer-management/offer-management.component';

const routes: Routes = [
    {
        path: '', component: OfferManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OfferManagementRoutingModule { }
