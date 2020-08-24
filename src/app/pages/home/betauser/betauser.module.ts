import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetauserRoutingModule } from './betauser-routing.module';
import { BetausersComponent } from './betausers/betausers.component';
import { MaterialModule } from '../../../shared/modules/material/material.module';

import { StylePaginatorDirectiveDirective } from './betausers/style-paginator-directive.directive';


@NgModule({
  declarations: [BetausersComponent, StylePaginatorDirectiveDirective],
  imports: [
    CommonModule,
    BetauserRoutingModule,
    MaterialModule
  ],
  entryComponents: [StylePaginatorDirectiveDirective]
})
export class BetauserModule { }
