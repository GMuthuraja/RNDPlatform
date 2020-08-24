import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstaffRoutingModule } from './estaff-routing.module';
import { ViewAnalyticsComponent } from './view-analytics/view-analytics.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { EstaffhomeComponent } from './estaffhome/estaffhome.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';


@NgModule({
  declarations: [
    ViewAnalyticsComponent,
    RatingsComponent,
    SuggestionComponent,
    EstaffhomeComponent
  ],
  imports: [
    CommonModule,
    EstaffRoutingModule,
    MaterialModule
  ]
})
export class EstaffModule { }
