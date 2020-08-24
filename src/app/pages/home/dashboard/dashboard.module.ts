import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { StylePaginatorDirectiveDirective } from '../../../shared/directive/style-paginator-directive.directive';
import { BetausersComponent } from '../betauser/betausers/betausers.component';
import { RatingsComponent } from '../estaff/ratings/ratings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BetausersComponent,
    RatingsComponent,
    StylePaginatorDirectiveDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    StylePaginatorDirectiveDirective
  ]
})
export class DashboardModule { }
