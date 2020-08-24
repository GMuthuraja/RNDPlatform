import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetauserRoutingModule } from './betauser-routing.module';
import { BetausersComponent } from './betausers/betausers.component';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { BetauserhomeComponent } from './betauserhome/betauserhome.component';
import { ShareModule } from 'src/app/shared/modules/share/share.module';


@NgModule({
  declarations: [BetausersComponent, BetauserhomeComponent],
  imports: [
    CommonModule,
    BetauserRoutingModule,
    MaterialModule,
    ShareModule
  ]
})
export class BetauserModule { }
