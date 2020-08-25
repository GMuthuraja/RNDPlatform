import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface SuggestionsElement {
  staffName: string;
  payroll: string;
  // suggestions: string,
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
  ],
  encapsulation: ViewEncapsulation.None
  
})
export class SuggestionComponent implements OnInit {

  displayedSuggestionColumns: string[] = ['StaffName', 'Payroll', 'Suggestions', 'moreDetail'];
  @ViewChild (MatPaginator,{static: false}) paginator: MatPaginator;
  suggestionSource: MatTableDataSource<SuggestionsElement>;
  suggestionData:any = [];

  constructor() { }

  isSuggestionExpanded: boolean = false;
  ngOnInit(){
    const SUGGESTIONS_DATA: SuggestionsElement[] = [
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      },
      {
          staffName: "Majed Taha Ali",
          payroll: '11020229',
          // suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
          description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
          expanded: false
      }
    ];
    this.suggestionData = SUGGESTIONS_DATA;
    setTimeout(() => {
      this.suggestionSource.paginator = this.paginator;
    }, 1000);
    // Assign the data to the data source for the table to render
    this.suggestionSource = new MatTableDataSource(this.suggestionData);
    console.log(this.suggestionSource);
  }

  toggleTableRows() {
    this.isSuggestionExpanded = !this.isSuggestionExpanded;

    // Assign the data to the data source for the table to render
    this.suggestionData.forEach((row: any) => {
      row.expanded = this.isSuggestionExpanded;
    })
    this.suggestionSource = new MatTableDataSource(this.suggestionData);
    console.log(this.suggestionSource);
  }
}
