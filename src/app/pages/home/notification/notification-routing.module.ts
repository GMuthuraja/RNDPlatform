import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';

const routes: Routes = [
  { path: '', component: AddNotificationComponent },
  { path: 'view-notification', component: ViewNotificationComponent },
  { path: 'add-notification', component: AddNotificationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
