import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { StaffIdeasComponent } from './staff-ideas/staff-ideas.component';


@NgModule({
  declarations: [StaffIdeasComponent],
  imports: [
    CommonModule,
    IdeasRoutingModule
  ]
})
export class IdeasModule { }
