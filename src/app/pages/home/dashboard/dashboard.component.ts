import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashBoardPages = "main";
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  getMessage(navigateUrl: string) {
    console.log("navigateUrl : ",navigateUrl);
    this.dashBoardPages = navigateUrl;
  }
}