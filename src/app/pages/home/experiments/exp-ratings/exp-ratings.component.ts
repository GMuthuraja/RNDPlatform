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


export interface VirtualRatingElement {
  staffName: string;
  payroll: string;
  rate: number;
}

@Component({
  selector: 'app-exp-ratings',
  templateUrl: './exp-ratings.component.html',
  styleUrls: ['./exp-ratings.component.scss'],
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
export class ExpRatingsComponent implements OnInit {
  displayedRatingColumns: string[] = ['StaffName', 'Payroll', 'Rate'];
  ratingSource;

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
        return value + '%';
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
  public pieChartData = [7, 4, 6, 30, 53];
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
    const VIRTUAL_RATINGS_DATA: VirtualRatingElement[] = [
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 5
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 3
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 2
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 1
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 5
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4
      }
    ];
    this.ratingSource = VIRTUAL_RATINGS_DATA;
  }

}
