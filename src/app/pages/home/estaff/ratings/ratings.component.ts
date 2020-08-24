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
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
  animations: [
    trigger("ratingExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ],
})
export class RatingsComponent implements OnInit {
  displayedRatingColumns: string[] = ['StaffName', 'Payroll', 'Rate', 'Comment', 'moreDetail'];
  ratingSource = RATINGS_DATA;

  // Pie
  public pieChartOptions: any = {
    responsive: true,
      legend: {
        position: 'bottom'
      },
      pieceLabel: {
        render: function (args) {
          const label = args.label,
          value = args.value;
          return value+'%';
        }
      },
      plugins: {
        datalabels: {
          display: true,
          color: 'white',
          formatter: (value, ctx) => {
            ctx.chart.data[ctx.dataIndex];
          },
        },
      }
  };
  public pieChartLabels: Label[] = ['R-1', 'R-2', 'R-3', 'R-4', 'R-5'];
  public pieChartData = [7,4,6,30,53];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: any = [
    {
      backgroundColor: [
        '#be2623',
        '#ec9e3a',
        '#f6e245',
        '#4887d7',
        '#84c83f'
      ]
    }
  ];
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }
}
