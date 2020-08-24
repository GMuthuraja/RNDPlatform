import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewExperimentsComponent } from './view-experiments/view-experiments.component';
import { NewExperimentsComponent } from './new-experiments/new-experiments.component';
import { UsersComponent } from './users/users.component';
import { SummaryComponent } from './summary/summary.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { RatingsComponent } from '../experiments/ratings/ratings.component';
import { ExperimentshomeComponent } from './experimentshome/experimentshome.component';

const routes: Routes = [
  { path: '', component: ViewExperimentsComponent },
  { path: 'view-experiments', component: ViewExperimentsComponent },
  { path: 'new-experiments', component: NewExperimentsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'add-user', component: AddUsersComponent },
  { path: 'experiments-home', component: ExperimentshomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentsRoutingModule { }
