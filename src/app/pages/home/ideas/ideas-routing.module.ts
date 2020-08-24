import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffIdeasComponent } from './staff-ideas/staff-ideas.component';
import { IdeashomeComponent } from './ideashome/ideashome.component';

const routes: Routes = [
  { path: '', component: StaffIdeasComponent },
  { path: 'staff-ideas', component: StaffIdeasComponent },
   { path: 'ideas-home', component: IdeashomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
