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
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { RestApiService } from 'src/app/core/http/rest-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


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
  encapsulation: ViewEncapsulation.None
})
export class RatingsComponent implements OnInit {
  displayedRatingColumns: string[] = ['StaffName', 'Payroll', 'Rate', 'Comment', 'moreDetail'];
  @ViewChild (MatPaginator,{static: false}) paginator: MatPaginator;
  ratingSource: MatTableDataSource<RatingElement>;
  rateData:any = [];
  isLoaderVisible: boolean = false;
  pageLength:any=100
  pageSize:any=5
  totalSourceLength:any;
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
    this.getRatingData();
  }
  
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
  }

  /**
   * Get Rating data
  */
  getRatingData() {
    this.isLoaderVisible = true;
    this.api.getEstaffRating().subscribe(data => {
      this.isLoaderVisible = false;
      console.log("Rate data : ", data);
      var output: any = data;
      if (output && output.length > 0) {
        // this.ratingSource = output;
        this.rateData = output;
        var ratingSource:any = this.rateData;
        this.totalSourceLength = this.rateData.length;
        ratingSource.map(rateVal => {
          if (rateVal.comment == null || rateVal.comment == "") {
            rateVal.comment = "-";
          }
        });
        var r1, r2, r3, r4, r5, totalRates;
        r1 = ratingSource.filter(val => val.rate == 1);
        r2 = ratingSource.filter(val => val.rate == 2);
        r3 = ratingSource.filter(val => val.rate == 3);
        r4 = ratingSource.filter(val => val.rate == 4);
        r5 = ratingSource.filter(val => val.rate == 5);
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
      setTimeout(() => {
        this.ratingSource.paginator = this.paginator;
      }, 1000);
      // Assign the data to the data source for the table to render
      this.ratingSource = new MatTableDataSource(this.rateData);
      console.log(this.ratingSource);
    }, (error => {
      this.isLoaderVisible = false;
      console.log(" rating data error : ", error);
    }))
  }
}
