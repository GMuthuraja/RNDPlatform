import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetausersComponent } from './betausers/betausers.component';

const routes: Routes = [
  { path: '', component: BetausersComponent },
  { path: 'beta-users', component: BetausersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetauserRoutingModule { }
