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


@NgModule({
  declarations: [ViewExperimentsComponent, FeedbackComponent, UsersComponent, RatingsComponent, NewExperimentsComponent, AddUsersComponent, SummaryComponent],
  imports: [
    CommonModule,
    ExperimentsRoutingModule
  ]
})
export class ExperimentsModule { }
