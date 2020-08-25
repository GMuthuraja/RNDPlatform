import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { ShareModule } from '../../../shared/modules/share/share.module';
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


@NgModule({
  declarations: [
    DashboardComponent,
    BetausersComponent,
    BetauserhomeComponent,
    ViewAnalyticsComponent,
    RatingsComponent,
    SuggestionComponent,
    EstaffhomeComponent,
    ViewExperimentsComponent,
    FeedbackComponent,
    UsersComponent,
    ExpRatingsComponent,
    NewExperimentsComponent,
    AddUsersComponent,
    SummaryComponent,
    ExperimentshomeComponent,
    IdeashomeComponent,
    StaffIdeasComponent,
    AddNotificationComponent,
    ViewNotificationComponent,
    NotificationhomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ShareModule
  ]
})
export class DashboardModule { }
