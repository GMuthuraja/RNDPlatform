import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface FeedbackElement {
  staffName: string;
  payroll: string;
  rate: number;
  issues: string;
  suggestions: string,
  description: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [
    trigger("feedbackExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ],
  encapsulation:ViewEncapsulation.None
})
export class FeedbackComponent implements OnInit {

  displayedFeedbackColumns: string[] = ['StaffName', 'Payroll', 'Rate', 'Issues', 'Suggestions', 'moreDetail'];
  @ViewChild (MatPaginator,{static: false}) paginator: MatPaginator;
  feedbackSource: MatTableDataSource<FeedbackElement>;
  feedbackData:any = [];
  isAllExpanded:boolean = false;

  constructor() { }

  isExpanded: boolean = false;
  ngOnInit(){
    const FEEDBACK_DATA: FeedbackElement[] = [
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 5,
          issues: "-",
          suggestions: "My suggestion is to provide a smarter and faster way of showing …",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 3,
          issues: "i can't login",
          suggestions: "-",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 4,
          issues: "there is missing label in second of the name",
          suggestions: "My suggestion is to provide a smarter and faster way of showing …",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 4,
          issues: "-",
          suggestions: "None",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 4,
          issues: "there is missing label",
          suggestions: "Great",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 5,
          issues: "there is missing label",
          suggestions: "-",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 2,
          issues: "there is missing label",
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 1,
          issues: "not working at all",
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 2,
          issues: "there is missing label",
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 1,
          issues: "not working at all",
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 2,
          issues: "there is missing label",
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          rate: 1,
          issues: "not working at all",
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      }
    ];
    
    this.feedbackData = FEEDBACK_DATA;
    setTimeout(() => {
      this.feedbackSource.paginator = this.paginator;
    }, 1000);
    // Assign the data to the data source for the table to render
    this.feedbackSource = new MatTableDataSource(this.feedbackData);
    console.log(this.feedbackSource);
  }

  toggleTableRows() {
    this.isExpanded = !this.isExpanded;

    // Assign the data to the data source for the table to render
    this.feedbackData.forEach((row: any) => {
      row.expanded = this.isExpanded;
    })
    this.feedbackSource = new MatTableDataSource(this.feedbackData);
    console.log(this.feedbackSource);

    var allExpanded = this.feedbackData.filter(val=>val.expanded == false);
    if(allExpanded.length == this.feedbackData.length) {
      this.isAllExpanded = false;
    } else {
      this.isAllExpanded = true;
    }
  }
}
