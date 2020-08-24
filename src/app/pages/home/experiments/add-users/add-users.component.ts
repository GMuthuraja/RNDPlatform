import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import{ MatTableDataSource} from '@angular/material/table';
import{MatSort}from '@angular/material/sort';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CUSTID_REGEX } from '../../../../utils/constants';
import { UtilityService } from '../../../../core/services/utility.service';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  loginForm: FormGroup;
  isLoginFormValid = true;
  userId: any;
  @ViewChild (MatSort,{static: false}) sort: MatSort;
  @ViewChild (MatPaginator,{static: false}) paginator: MatPaginator;
    title = 'PageNation';
    displayedColumns = ['Staff Name', 'Payroll', 'Position', 'Email','Mobile','Way of contact'];
    dataSource: MatTableDataSource<UserData>;
    pageLength:any=100
    pageSize:any=5
    userData:any=[];
    selected='Area of interest'
     Areaofinterest1 =['Operation','Cost','Revenue','Others']
     Wayofcontact1=['Delete']
     email=['maali@saudia.com', 'mail@saudia.com', 'mailll@saudia.com']
     Position=['IT SPECIALIST','Soft SPECIALIST','Tech SPECIALIST']
     name =['Majed','Majed Taha','Majed Taha Ali']
  constructor( private formBuilder: FormBuilder,public utilityService: UtilityService) {
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
         
         this.userData.push({StaffName:this.name[j], Payroll:numberserial,Position:this.Position[j]
         ,Email: this.email[j],Mobile:mobilenumber,Wayofcontact:this.Wayofcontact1}); 
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
    this.initLoginForm();
  }

   /**
  * Initialize the login form
  */
 initLoginForm() {
  this.loginForm = this.formBuilder.group({
    corpID: [
      "",
      Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(CUSTID_REGEX)])
    ],
  });
}

/**
 * This method call when user manually entered usrname and password
 */
manualLogin(form: NgForm) {
 
}

}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  
    return {
      StaffName:'Majed Taha Ali',
      Payroll: id,
      Position:'IT SPECIALIST',
      Email: 'maali@saudia.com',
      Mobile:'0554543360',
      Wayofcontact:'Delete',
    };
  }
export interface UserData {
  StaffName:any;
  Payroll: any;
  Position: any;
  Email: any;
  Mobile:any;
  Wayofcontact:any
}