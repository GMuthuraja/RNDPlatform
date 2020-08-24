import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetausersComponent } from './betausers/betausers.component';
import { BetauserhomeComponent } from './betauserhome/betauserhome.component';

const routes: Routes = [
  { path: '', redirectTo: '', component: BetauserhomeComponent },
  { path: 'beta-users', component: BetausersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetauserRoutingModule { }
