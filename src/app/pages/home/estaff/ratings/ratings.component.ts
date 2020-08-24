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
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { USER_INFO_KEY } from 'src/app/utils/constants';
import { RestApiService } from 'src/app/core/http/rest-api.service';


export interface RatingElement {
  dtRated: string,
  rate: number,
  comment: string,
  PRN: string,
  DisplayName: string,
  mail: string,
  Tel: string,
  Dep: string
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
  ratingSource: RatingElement[];
  userInfo: any;

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
  public pieChartData = [];
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
  constructor(
    private api: RestApiService,
    private storageService: LocalStorageService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.getUserInfo();
    this.getRatingData();
  }

  /**
   * Get User info
  */
  getUserInfo() {
    if(this.storageService.getLocalStorage(USER_INFO_KEY))
    var userInfo = JSON.parse(this.storageService.getLocalStorage(USER_INFO_KEY));
    this.userInfo = userInfo ? userInfo[0] : "";
    console.log("userInfo : ", this.userInfo);
  }

  /**
   * Get Rating data
  */
  getRatingData() {
    this.api.getEstaffRating().subscribe(data => {
      console.log("Rate data : ", data);
      var output: any = data;
      if (output && output.length > 0) {
        this.ratingSource = output;
        this.ratingSource.map(rateVal => {
          if (rateVal.comment == null || rateVal.comment == "") {
            rateVal.comment = "-";
          }
        });
        var r1, r2, r3, r4, r5, totalRates;
        r1 = this.ratingSource.filter(val => val.rate == 1);
        r2 = this.ratingSource.filter(val => val.rate == 2);
        r3 = this.ratingSource.filter(val => val.rate == 3);
        r4 = this.ratingSource.filter(val => val.rate == 4);
        r5 = this.ratingSource.filter(val => val.rate == 5);
        totalRates = r1.length + r2.length + r3.length + r4.length + r5.length;
        console.log("r1 value : ", Math.floor((r1.length) * 100 / totalRates));
        this.pieChartData = [
          Math.floor((r1.length * 100) / totalRates),
          Math.floor((r2.length * 100) / totalRates),
          Math.floor((r3.length * 100) / totalRates),
          Math.floor((r4.length * 100) / totalRates),
          Math.floor((r5.length * 100) / totalRates)
        ];
      }
    }, (error => {
      console.log(" rating data error : ", error);
    }))
  }
}
