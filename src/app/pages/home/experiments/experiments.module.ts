import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentsRoutingModule } from './experiments-routing.module';
import { ViewExperimentsComponent } from './view-experiments/view-experiments.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UsersComponent } from './users/users.component';
import { RatingsComponent } from './ratings/ratings.component';
import { NewExperimentsComponent } from './new-experiments/new-experiments.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { SummaryComponent } from './summary/summary.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ShareModule } from 'src/app/shared/modules/share/share.module';
import { ExperimentshomeComponent } from './experimentshome/experimentshome.component';


@NgModule({
  declarations: [
    ViewExperimentsComponent,
    FeedbackComponent,
    UsersComponent,
    RatingsComponent,
    NewExperimentsComponent,
    AddUsersComponent,
    SummaryComponent,
    ExperimentshomeComponent],
  imports: [
    CommonModule,
    ExperimentsRoutingModule,
    MaterialModule,
    ShareModule
  ]
})
export class ExperimentsModule { }