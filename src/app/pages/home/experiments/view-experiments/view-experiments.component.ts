import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-experiments',
  templateUrl: './view-experiments.component.html',
  styleUrls: ['./view-experiments.component.scss']
})
export class ViewExperimentsComponent implements OnInit {

  // displayedRatingColumns: string[] = ['StaffName', 'Payroll', 'Rate', 'Comment', 'moreDetail'];
  // ratingSource = RATINGS_DATA;

  displayedColumns: string[] = [ 'clmIcon', 'name', 'views', 'testers', 'rating', 'feedback', 'status', 'notification'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {

  }
}
/* Static data */

export interface PeriodicElement {
  clmIcon: string;
  name: string;
  views: number;
  testers: number;
  rating: number;
  feedback: number;
  status: boolean;
  notification: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { clmIcon: '', name: 'Virtual Reality', views: 1320, testers: 45, rating: 4.3, feedback: 423, status: true, notification: true },
  { clmIcon: '', name: 'Smart Attendance', views: 1320, testers: 45, rating: 4.3, feedback: 423, status: true, notification: true },
  { clmIcon: '', name: 'Robot Experiment', views: 1320, testers: 45, rating: 4.3, feedback: 423, status: false, notification: false }
];
