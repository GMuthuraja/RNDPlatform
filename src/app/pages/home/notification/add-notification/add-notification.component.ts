import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class AddNotificationComponent implements OnInit {

  panelOpenState: boolean = false;
  content:any;
  expand: boolean = false;
  hide:boolean = false;
  isOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.content=['Beta Users ','Operation','Virtual Reality','Customer Experience']
  }


  togglePanel() {
    this.panelOpenState = !this.panelOpenState
}
openclose(){
this.expand=true;
}
visibletexbox(){
  this.hide=true
}

addfield(){
  this.hide=false
  this.content[this.content.length]=['text']
}

data = [
  {id:1, header:'Select Topic', content:this.content, expanded: false},
 
]
}
