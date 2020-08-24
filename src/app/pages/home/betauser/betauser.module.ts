import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetauserRoutingModule } from './betauser-routing.module';
import { BetausersComponent } from './betausers/betausers.component';


@NgModule({
  declarations: [BetausersComponent],
  imports: [
    CommonModule,
    BetauserRoutingModule
  ]
})
export class BetauserModule { }
