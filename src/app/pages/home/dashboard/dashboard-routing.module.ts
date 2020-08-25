import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BetauserhomeComponent } from '../betauser/betauserhome/betauserhome.component';
import { BetausersComponent } from '../betauser/betausers/betausers.component';
import { ViewAnalyticsComponent } from '../estaff/view-analytics/view-analytics.component';
import { SuggestionComponent } from '../estaff/suggestion/suggestion.component';
import { RatingsComponent } from '../estaff/ratings/ratings.component';
import { EstaffhomeComponent } from '../estaff/estaffhome/estaffhome.component';
import { ViewExperimentsComponent } from '../experiments/view-experiments/view-experiments.component';
import { FeedbackComponent } from '../experiments/feedback/feedback.component';
import { UsersComponent } from '../experiments/users/users.component';
import { NewExperimentsComponent } from '../experiments/new-experiments/new-experiments.component';
import { AddUsersComponent } from '../experiments/add-users/add-users.component';
import { SummaryComponent } from '../experiments/summary/summary.component';
import { ExperimentshomeComponent } from '../experiments/experimentshome/experimentshome.component';
import { ExpRatingsComponent } from '../experiments/exp-ratings/exp-ratings.component';
import { StaffIdeasComponent } from '../ideas/staff-ideas/staff-ideas.component';
import { IdeashomeComponent } from '../ideas/ideashome/ideashome.component';
import { AddNotificationComponent } from '../notification/add-notification/add-notification.component';
import { ViewNotificationComponent } from '../notification/view-notification/view-notification.component';
import { NotificationhomeComponent } from '../notification/notificationhome/notificationhome.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'beta-home', component: BetauserhomeComponent },
      { path: 'estaff-home', component: EstaffhomeComponent },
      { path: 'experiments-home', component: ExperimentshomeComponent },
      { path: 'ideas-home', component: IdeashomeComponent },
      { path: 'notification-home', component: NotificationhomeComponent },
      { path: 'beta-users', component: BetausersComponent },
      { path: 'view-analytics', component: ViewAnalyticsComponent },
      { path: 'estaff-ratings', component: RatingsComponent },
      { path: 'suggestions', component: SuggestionComponent },
      { path: 'view-experiments', component: ViewExperimentsComponent },
      { path: 'new-experiments', component: NewExperimentsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'exp-ratings', component: ExpRatingsComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'add-user', component: AddUsersComponent },
      { path: 'staff-ideas', component: StaffIdeasComponent },
      { path: 'view-notification', component: ViewNotificationComponent },
      { path: 'add-notification', component: AddNotificationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
