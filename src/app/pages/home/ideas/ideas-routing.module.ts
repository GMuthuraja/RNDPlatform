import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffIdeasComponent } from './staff-ideas/staff-ideas.component';

const routes: Routes = [
  { path: '', component: StaffIdeasComponent },
  { path: 'staff-ideas', component: StaffIdeasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
