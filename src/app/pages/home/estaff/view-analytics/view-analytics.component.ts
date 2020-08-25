import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_ESTFF_RATINGS, NAV_SUGGESTIONS } from 'src/app/utils/constants';

@Component({
  selector: 'app-view-analytics',
  templateUrl: './view-analytics.component.html',
  styleUrls: ['./view-analytics.component.scss']
})

export class ViewAnalyticsComponent implements OnInit {

  @Output() messageToEmit = new EventEmitter<string>();

  constructor(private route: Router) { }

  ngOnInit(): void { }

  goToRatings() {
    this.route.navigate([NAV_ESTFF_RATINGS]);
  }

  goToSuggestions() {
    this.route.navigate([NAV_SUGGESTIONS]);
  }
}
