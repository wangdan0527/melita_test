import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { OfferManagementComponent } from './offer-management/offer-management.component';
import { OfferManagementRoutingModule } from './offer-management-routing.module';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

@NgModule({
  declarations: [OfferManagementComponent, OfferDetailsComponent],
  imports: [
    CommonModule,
    OfferManagementRoutingModule,
    MatTableModule,
    MatSortModule,
    TranslateModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
    entryComponents: [
      OfferDetailsComponent
  ]
})
export class OfferManagementModule { }
