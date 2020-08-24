import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";


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
  ]
})
export class FeedbackComponent implements OnInit {

  displayedFeedbackColumns: string[] = ['StaffName', 'Payroll', 'Rate', 'Issues', 'Suggestions', 'moreDetail'];
  isAllExpanded:boolean = false;
  constructor() { }

  feedbackSource;
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
      }
    ];
    
    this.feedbackSource = FEEDBACK_DATA;
  }

  toggleTableRows() {
    this.isExpanded = !this.isExpanded;

    this.feedbackSource.forEach((row: any) => {
      row.expanded = this.isExpanded;
    })

    var allExpanded = this.feedbackSource.filter(val=>val.expanded == false);
    if(allExpanded.length == this.feedbackSource.length) {
      this.isAllExpanded = false;
    } else {
      this.isAllExpanded = true;
    }
  }
}
