import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-analytics',
  templateUrl: './view-analytics.component.html',
  styleUrls: ['./view-analytics.component.scss']
})
export class ViewAnalyticsComponent implements OnInit {
  @Output() messageToEmit = new EventEmitter<string>();
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToRatings(url) {
    // console.log("url : ",url);
    // this.messageToEmit.emit(url);
    this.route.navigateByUrl(url)
  }
}
