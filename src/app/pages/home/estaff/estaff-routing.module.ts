import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAnalyticsComponent } from './view-analytics/view-analytics.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { RatingsComponent } from './ratings/ratings.component';
import { EstaffhomeComponent } from './estaffhome/estaffhome.component';

const routes: Routes = [
  { path: '', component: ViewAnalyticsComponent },
  { path: 'view-analytics', component: ViewAnalyticsComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'suggestions', component: SuggestionComponent },
  { path: 'estaff-home', component: EstaffhomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstaffRoutingModule { }
