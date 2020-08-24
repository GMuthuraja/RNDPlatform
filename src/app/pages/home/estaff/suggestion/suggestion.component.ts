import { Component, OnInit } from '@angular/core';
import { RATINGS_DATA, SUGGESTIONS_DATA } from '../../../../utils/constants';
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
  
})
export class SuggestionComponent implements OnInit {

  displayedSuggestionColumns: string[] = ['StaffName', 'Payroll', 'Suggestions', 'moreDetail'];
  constructor() { }

  suggestionSource = SUGGESTIONS_DATA;
  isSuggestionExpanded: boolean = false;
  ngOnInit(): void {
  }

  toggleTableRows() {
    this.isSuggestionExpanded = !this.isSuggestionExpanded;

    this.suggestionSource.forEach((row: any) => {
      row.expanded = this.isSuggestionExpanded;
    })
  }
}
