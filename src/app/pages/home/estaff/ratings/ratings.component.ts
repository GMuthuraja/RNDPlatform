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


export interface RatingElement {
  staffName: string;
  payroll: string;
  rate: number;
  comment: string;
  description: string;
  expanded?: boolean;
}

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
    const RATINGS_DATA: RatingElement[] = [
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 5,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 3,
        comment: 'Test',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 2,
        comment: 'We need more feature',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 1,
        comment: 'I dont know',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 5,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      },
      {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
      }
    ];
    this.ratingSource = RATINGS_DATA;

  }
}
