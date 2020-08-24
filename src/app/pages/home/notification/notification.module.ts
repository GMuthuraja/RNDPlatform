import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';
import { FormsModule } from '@angular/forms';
import { NotificationhomeComponent } from './notificationhome/notificationhome.component';


@NgModule({
  declarations: [AddNotificationComponent, ViewNotificationComponent, NotificationhomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
