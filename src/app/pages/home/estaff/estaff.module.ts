import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstaffRoutingModule } from './estaff-routing.module';
import { ViewAnalyticsComponent } from './view-analytics/view-analytics.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [ViewAnalyticsComponent, RatingsComponent, SuggestionComponent],
  imports: [
    CommonModule,
    EstaffRoutingModule,
    MaterialModule
  ]
})
export class EstaffModule { }
