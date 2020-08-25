import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_SUMMARY } from 'src/app/utils/constants';

@Component({
  selector: 'app-new-experiments',
  templateUrl: './new-experiments.component.html',
  styleUrls: ['./new-experiments.component.scss']
})

export class NewExperimentsComponent implements OnInit {
  checked = true;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToSummary() {
    this.router.navigate([NAV_SUMMARY]);
  }
}
