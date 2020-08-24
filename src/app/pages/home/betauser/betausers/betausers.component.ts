import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import{ MatTableDataSource} from '@angular/material/table';
import{MatSort}from '@angular/material/sort';
@Component({
  selector: 'app-betausers',
  templateUrl: './betausers.component.html',
  styleUrls: ['./betausers.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class BetausersComponent implements OnInit {
  @ViewChild (MatSort,{static: false}) sort: MatSort;
  @ViewChild (MatPaginator,{static: false}) paginator: MatPaginator;
    title = 'PageNation';
    displayedColumns = ['Staff Name', 'Payroll', 'Position', 'Email','Mobile','Area of interest','Way of contact'];
    dataSource: MatTableDataSource<UserData>;
    pageLength:any=100
    pageSize:any=5
    userData:any=[];
     Areaofinterest1 =['Operation','Cost','Revenue','Others']
     Wayofcontact1=['Email', 'phone', 'notification']
     email=['maali@saudia.com', 'mail@saudia.com', 'mailll@saudia.com']
     Position=['IT SPECIALIST','Soft SPECIALIST','Tech SPECIALIST']
     name =['Majed','Majed Taha','Majed Taha Ali']
  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    
    let j=0;
    for (let i = 1; i <= 100; i++) { 
      if(j==0){
        j=0
      }
      
      let numberserial=11020229+i
      let mobilenumber = 554543360+i
      users.push(createNewUser(numberserial));
      //console.log(j);
      
      if(j<=2){
        //console.log(j);
        
        this.userData.push({StaffName:this.name[j], Payroll:numberserial, Areaofinterest:this.Areaofinterest1[j],Position:this.Position[j]
        ,Email: this.email[j],Mobile:mobilenumber,Wayofcontact:this.Wayofcontact1[j]}); 
        j++;
      }else{
        j=0
      }
      
       }
      console.log(this.userData);
      
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.userData);
       console.log(this.dataSource);
       
   }

  ngOnInit(): void {
  }

   /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    if(filterValue!='Clear'){
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }else{
      this.dataSource.filter = ''
    
    }
   
  }

}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
const Areaofinterest1 =['Operation','Cost','Revenue']

  return {
    StaffName:'Majed Taha Ali',
    Payroll: id,
    Position:'IT SPECIALIST',
    Email: 'maali@saudia.com',
    Mobile:'0554543360',
    Areaofinterest:Areaofinterest1,
    Wayofcontact:'Email, phone, notification',
  };
}


export interface UserData {
  StaffName:any;
  Payroll: any;
  Position: any;
  Email: any;
  Mobile:any;
  Areaofinterest:any;
  Wayofcontact:any
}