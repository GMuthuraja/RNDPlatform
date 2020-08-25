import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NAV_DASHBOARD, NAV_EXP_HOME, NAV_BETA_HOME, NAV_IDEAS_HOME, NAV_ESTAFF_HOME } from 'src/app/utils/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(param => {
    //   console.log(param);
    // });
  }

  onTabChanged(event) {
    if (event.index == 0) {
      this.router.navigate([NAV_DASHBOARD]);
    } else if (event.index == 1) {
      this.router.navigate([NAV_EXP_HOME]);
    } else if (event.index == 2) {
      this.router.navigate([NAV_BETA_HOME]);
    } else if (event.index == 3) {
      this.router.navigate([NAV_IDEAS_HOME]);
    } else if (event.index == 4) {
      this.router.navigate([NAV_ESTAFF_HOME]);
    }
  }
}