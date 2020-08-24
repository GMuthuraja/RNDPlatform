import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { StaffIdeasComponent } from './staff-ideas/staff-ideas.component';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { ShareModule } from '../../../shared/modules/share/share.module';
import { IdeashomeComponent } from './ideashome/ideashome.component';

@NgModule({
  declarations: [StaffIdeasComponent, IdeashomeComponent],
  imports: [
    CommonModule,
    IdeasRoutingModule, 
    MaterialModule,
    ShareModule
  ],
  entryComponents: []
})
export class IdeasModule { }
