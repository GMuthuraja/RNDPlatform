import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';


@NgModule({
  declarations: [AddNotificationComponent, ViewNotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
