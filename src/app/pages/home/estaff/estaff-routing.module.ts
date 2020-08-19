import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAnalyticsComponent } from './view-analytics/view-analytics.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
  { path: '', component: ViewAnalyticsComponent },
  { path: 'view-analytics', component: ViewAnalyticsComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'suggestions', component: SuggestionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstaffRoutingModule { }
