import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '', component: DashboardComponent },
  { path: 'beta-user', loadChildren: () => import('../betauser/betauser.module').then(m => m.BetauserModule) },
  { path: 'estaff', loadChildren: () => import('../estaff/estaff.module').then(m => m.EstaffModule) },
  { path: 'ideas', loadChildren: () => import('../ideas/ideas.module').then(m => m.IdeasModule) },
  { path: 'experiments', loadChildren: () => import('../experiments/experiments.module').then(m => m.ExperimentsModule) },
  { path: 'notification', loadChildren: () => import('../notification/notification.module').then(m => m.NotificationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
