import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-betauserhome',
  templateUrl: './betauserhome.component.html',
  styleUrls: ['./betauserhome.component.scss']
})
export class BetauserhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go() {
    this.router.navigateByUrl('/(beta-user:betausers)');
  }

}
