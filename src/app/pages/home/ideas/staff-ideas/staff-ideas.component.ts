import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Idea_DATA,Filter } from '../../../../utils/constants';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-staff-ideas',
  templateUrl: './staff-ideas.component.html',
  styleUrls: ['./staff-ideas.component.scss'],
  encapsulation: ViewEncapsulation.None ,
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


export class StaffIdeasComponent implements OnInit {

  displayedSuggestionColumns: string[] = ['StaffName', 'Payroll', 'AreaofIdea', 'Idea','moreDetail'];
  constructor() { }

  suggestionSource:any;
  isIdeaExpanded: boolean = false;
  ExpandAll:string='';
  FilterData:any = Filter
  ngOnInit(): void {
    this.suggestionSource = new MatTableDataSource(Idea_DATA);
    console.log(this.suggestionSource);
    
  }

  toggleTableRows() {
    console.log( this.isIdeaExpanded );
    
    this.isIdeaExpanded = !this.isIdeaExpanded;

    this.suggestionSource.forEach((row: any) => {
      //console.log( this.isSuggestionExpanded );
      if(!this.isIdeaExpanded){
        this.ExpandAll=''
      }
      row.expanded = this.isIdeaExpanded;
    })
  }

  expand(event){
  
      if(event=='More Details'){
        this.ExpandAll ='Expand All'
      }else{
        this.ExpandAll=''
      }
  }


  applyFilter(filterValue: string) {
    console.log(filterValue);
    if(filterValue!='Clear' && filterValue!='Others'){
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.suggestionSource.filter = filterValue;
    }else{
      this.suggestionSource.filter = ''
    
    }
   
  }
}
