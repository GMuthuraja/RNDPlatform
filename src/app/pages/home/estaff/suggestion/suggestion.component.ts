import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import 'chart.piecelabel.js';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import {PageEvent} from '@angular/material/paginator';


export interface SuggestionsElement {
  staffName: string;
  payroll: string;
  suggestions: string,
  description: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss'],
  animations: [
    trigger("suggestionExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
  
})
export class SuggestionComponent implements OnInit {

  displayedSuggestionColumns: string[] = ['StaffName', 'Payroll', 'Suggestions', 'moreDetail'];
  constructor() { }

  suggestionSource;
  isSuggestionExpanded: boolean = false;
  ngOnInit(){
    const SUGGESTIONS_DATA: SuggestionsElement[] = [
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      }
    ];
    
    this.suggestionSource = SUGGESTIONS_DATA;
  }

  toggleTableRows() {
    this.isSuggestionExpanded = !this.isSuggestionExpanded;

    this.suggestionSource.forEach((row: any) => {
      row.expanded = this.isSuggestionExpanded;
    })
  }
}
