import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_DASHBOARD, NAV_VIEW_EXP, NAV_BETA_USERS, NAV_STAFF_IDEAS, NAV_VIEW_ANALYTICS } from 'src/app/utils/constants';
import { GlobalStorageService } from 'src/app/core/services/global-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  isLoaderVisible: boolean = false;

  constructor(
    private router: Router,
    private ref: ChangeDetectorRef,
    private globalStorageService: GlobalStorageService) { }

  ngOnInit() {
    this.globalStorageService.loader$.subscribe(res => {
      this.isLoaderVisible = res;
      this.ref.detectChanges();
      console.log(">>>>>>>>Loader", res);
    });
  }

  onTabChanged(event) {
    if (event.index == 0) {
      this.router.navigate([NAV_DASHBOARD]);
    } else if (event.index == 1) {
      this.router.navigate([NAV_VIEW_EXP]);
    } else if (event.index == 2) {
      this.router.navigate([NAV_BETA_USERS]);
    } else if (event.index == 3) {
      this.router.navigate([NAV_STAFF_IDEAS]);
    } else if (event.index == 4) {
      this.router.navigate([NAV_VIEW_ANALYTICS]);
    }
  }
}