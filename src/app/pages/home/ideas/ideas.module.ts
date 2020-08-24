import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { StaffIdeasComponent } from './staff-ideas/staff-ideas.component';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { StylePaginatorDirectiveDirective } from '../ideas/staff-ideas/style-paginator-directive.directive';


@NgModule({
  declarations: [StaffIdeasComponent,StylePaginatorDirectiveDirective],
  imports: [
    CommonModule,
    IdeasRoutingModule, MaterialModule
  ],
  entryComponents: [StylePaginatorDirectiveDirective]
})
export class IdeasModule { }
