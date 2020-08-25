import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
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
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RatingElement } from '../../estaff/ratings/ratings.component';


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
  encapsulation: ViewEncapsulation.None
})
export class ExpRatingsComponent implements OnInit {
  displayedRatingColumns: string[] = ['StaffName', 'Payroll', 'Rate'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ratingSource: MatTableDataSource<RatingElement>;
  ratingData: any = [];

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
    this.ratingData = VIRTUAL_RATINGS_DATA;
    setTimeout(() => {
      this.ratingSource.paginator = this.paginator;
    }, 1000);
    // Assign the data to the data source for the table to render
    this.ratingSource = new MatTableDataSource(this.ratingData);
    console.log(this.ratingSource);
  }

}
