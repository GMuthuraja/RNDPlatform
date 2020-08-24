import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/http/rest-api.service';
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {
  notificationTopic:string;
  notificationDescription:string;
  notificationTitle:string;
  constructor(
    private api: RestApiService ) { }

  ngOnInit(): void {
  }

  getTopicChange(topic) {
    console.log("select topic : ", topic);
  }

  /**
   * Push Notification Service
  */
  sendNotification() {
    this.api.sendNotificationAPI(this.notificationTitle, this.notificationDescription, this.notificationTopic).subscribe(data=>{
      var output:any = data;
      console.log("Push notification success : ", output);
    },(error=>{
      console.log("Push notification error : ", error);
    }));
  }
}
